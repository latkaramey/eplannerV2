import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import "dhtmlx-gantt";
import { LinkService } from 'src/app/services/link.service';
import { Task } from 'src/app/models/task.model';
import { Link } from 'src/app/models/link.model';
import { TaskService } from 'src/app/services/task.service';
import { BasePage } from 'src/app/base.page';
import { Title } from '@angular/platform-browser';
import { forkJoin } from 'rxjs';
import { MENUID } from 'src/app/models/gantt.menu.enum';
import { ResourceService } from 'src/app/services/resource.service';
import { GANTT_CONFIG } from 'src/app/models/gantt.config';
import { Department } from 'src/app/models/department.model';
import { Staff } from 'src/app/models/staff.model';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';
import { ResourceLib } from 'src/app/models/resourcelib.model';
import { RawInput } from 'src/app/models/RawInput';
import { Priority } from 'src/app/models/priority.model';
import { delay } from 'rxjs/operators';
declare let gantt: any;


@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'gantt',
    styleUrls: ['./view-gantt-charts.component.css'],
    templateUrl: './view-gantt-charts.component.html'
    //template: `<div #gantt_here class='gantt-chart'></div>`,
})
export class ViewGanttChartsComponent extends BasePage implements OnInit {

    @ViewChild("gantt_here") ganttContainer: ElementRef;

    flag: boolean = false;
    showUploadFormFlag: boolean = false;
    showUploadResourceFlag : boolean = false;
    priorities :Priority[]=[];

    /**====================================================
     * Upload plan and resource data variables.
     ======================================================*/
    planFile: File = null;
    resourceFile: File = null;
    successMessage;
    selectedStage;

    excelTask: RawInput[] = [];
    excelResourceLib: ResourceLib[] = [];

    @ViewChild('planFileName')
    planFileName: ElementRef;

    @ViewChild('resourceFileName')
    resourceFileName: ElementRef;

    origTaskMap :Map<number,Task> = new Map<number,Task>();

    intialLoad:boolean = true;


    

    /**======================================================= */
    constructor(private title: Title, private taskService: TaskService,
        private linkService: LinkService, private resourceService: ResourceService,
        private router: Router) {
        super(title);
        super.setTitle("Schedules");

    }
    deparray: Department[] = [];

    flagReader() {
        this.taskService.autoScheduleFlagReader().toPromise().then(
            data => {
              //  alert(data.value);
                this.taskService.autoflag = data.value;
                // if (this.taskService.autoflag == 'ON') 
                // {
                //     this.timelineScale();
                // }
              
            });
    }

    ngOnInit() {

       var flag =  this.flagReader();

       console.log('printing flag ----'+flag);
             
        let tasks: Task[] = [];
        let links: Link[] = [];
        

        const values$ = forkJoin(
            this.taskService.getGanttTasks(), this.linkService.getLinks()
        );

        values$.toPromise().then((data) => {
            tasks = data[0];
            links = data[1];
     if(tasks.length > 0)
     {
         tasks.forEach((ta)=>
         {
            this.origTaskMap.set(ta.id,ta);
         })

         console.log('Am I coming in inOninit');
       
        gantt.clearAll();
        this.resourceService.getDepartments().toPromise().then(
            data => {
                for (var val of data) {
                    this.deparray.push(val);
                }
            }
        );

        // Work Hous and Format of duration calculation
        this.durationConfig();

        this.configLightBox();
        // Config : Staff and resource data for Gantt view
        this.resourceList();
        this.resourceTaskSetting();

        gantt.plugins(GANTT_CONFIG.PLUGINS_CONFIG);
        this.addDateMarker();

        gantt.ext.zoom.init(GANTT_CONFIG.ZOOM_CONFIG);
        this.calendarConfig();
        this.configGanttColums();
        this.cssWorkOffColHeaders();
        this.cssWorkOffColumns();
        gantt.config.sort = true;

        // On start hide Parent column : default view :Gantt
        gantt.getGridColumn("parent").hide = true;

        if (sessionStorage.getItem('role') === 'ROLE_USER') {
            gantt.config.readonly = true;
        }
        gantt.init(this.ganttContainer.nativeElement);

            console.log('populating tasks');
                   tasks.forEach((ttask,index)=>{
                       
                 
                    var ind = ttask.priority;
                    
                 var p= new Priority();
                    p.key =ttask.priority;
                    p.label=ttask.priority.toString();
                this.priorities.push(p);

            });

            console.log('populating tasks End' +this.origTaskMap.size);
            gantt.serverList("priorities",this.priorities)
            //gantt.updateCollection("priorities", priorities);
          


       

            gantt.parse({ tasks, links });
            
            if (this.taskService.autoflag != 'ON')
            {
                const dp = this.buildDP();
            }
           

         //   let ae = this.buildEvent();

           

            if (this.taskService.autoflag == 'ON')
            {
            gantt.batchUpdate(() => {
                console.log('in batch update')
                gantt.eachTask((task) => {
                    this.taskService.update(task);

                })

            })

            this.intialLoad = false;
        }
        }
        this.buildEvent();
    }
        );

        gantt.refreshData();
    }


  

    /****************************************************
     * Migrated from other component - Upload File
     *****************************************************/

    onFileChange(files: FileList) {
        this.planFileName.nativeElement.innerText = Array.from(files).map(f => f.name).join(', ');
        this.planFile = files.item(0);
    }

    onResourceFileChange(files: FileList) {
        this.resourceFileName.nativeElement.innerText = Array.from(files).map(f => f.name).join(', ');
        this.resourceFile = files.item(0);
        this.processResourceFile();
    }

    processResourceFile() {
        let workBook = null;
        let jsonData = null;
        const reader = new FileReader();

        reader.onload = (event) => {
            const data = reader.result;
            workBook = XLSX.read(data, { type: 'binary' });
            jsonData = workBook.SheetNames.reduce((initial, name) => {
                const sheet = workBook.Sheets[name];
                initial[name] = XLSX.utils.sheet_to_json(sheet);
                return initial;},
                {}
            );

            const dataString = JSON.stringify(jsonData);
            const object = JSON.parse(dataString);

            var arr = object.Resource;
            for (var resourceElement of arr) {
                var inputElement = new ResourceLib();
                inputElement.key = resourceElement.SrNo;
                inputElement.department = resourceElement.Department;
                inputElement.resourceName = resourceElement.ResourceName;
                this.excelResourceLib.push(inputElement);
            }
            this.taskService.insertResourceLib(this.excelResourceLib).then(()=>{
                alert('Resource Uploaded Succesfully')
            });
        }
        reader.readAsBinaryString(this.resourceFile);
        console.log("Processed Resource File");
    }

    processFile() {
        let workBook = null;
        let jsonData = null;
        const reader = new FileReader();

        reader.onload = (event) => {
            const data = reader.result;
            workBook = XLSX.read(data, { type: 'binary' });
            jsonData = workBook.SheetNames.reduce((initial, name) => {
                const sheet = workBook.Sheets[name];
                initial[name] = XLSX.utils.sheet_to_json(sheet);
                return initial;},
                {}
            );

            const dataString = JSON.stringify(jsonData);
            const object = JSON.parse(dataString);

            console.dir(object);

            var arr = object.Process;
            for (var taskElement of arr) {
                var inputElement = new RawInput();
                inputElement.stage = taskElement.Stage;
                inputElement.workOrder = taskElement.WorkOrder;
                inputElement.operation = taskElement.Operation;
                inputElement.startDate = taskElement.EarliestStartdate;
                inputElement.estimatedTime = taskElement.Estimatedtime;
                inputElement.poDetails = taskElement.PODetails;
                inputElement.priority = taskElement.Priority;
                inputElement.setupTime = taskElement.Setuptime;
                inputElement.tearDownTime = taskElement.Teardowntime;
                inputElement.transferTime = taskElement.Transfertime;
                inputElement.predecessor = taskElement.Predecessor;
                inputElement.resourceGroup = taskElement.Resourcegroup;
                this.excelTask.push(inputElement);
            }

            this.taskService.insertAll(this.excelTask, this.selectedStage).then(
                () => {
                    this.successMessage = 'Data uploaded successfully'
                }
            ).then(() => {
                //this.router.navigateByUrl('/charts/view');
                this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
                this.router.navigate(['/charts/view']));
            });


        }
        reader.readAsBinaryString(this.planFile);
        console.log("Processed Plan File");

    }

    changeStage(ev) {
        this.selectedStage = ev.target.value;
    }

    onSubmit() {
        this.processFile();
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
                this.router.navigate(['/charts/view']));
        // this.router.navigateByUrl('/operator/update', { skipLocationChange: true }).then(() => {
        //     this.router.navigate(['/charts/view']
        //     );
        //}; 
       
    }

    /************************************************************************
     * Migration complet
     * **********************************************************************/

    /**
     * Handle Menu Icon click
     * @param id : Menu Identifier
     */
    private handleMenuClick(id: number) {
        switch (id) {
            case MENUID.ZOOMIN:
               // console.log("Destination reached with id:" + id);
                gantt.ext.zoom.zoomIn();
                break;

            case MENUID.ZOOMOUT:
               // console.log("Destination reached with id:" + id);
                gantt.ext.zoom.zoomOut();
                break;
            case MENUID.WORK_OFF:
             //   console.log("Destination reached with id:" + id);
                if (gantt.config.skip_off_time) {
                    gantt.config.skip_off_time = false;
                } else {
                    gantt.config.skip_off_time = true;
                }
                gantt.render();
                break;

            case MENUID.GANTT_ONLY:
                gantt.getGridColumn("owner").hide = false;
                gantt.getGridColumn("parent").hide = true;
                gantt.groupBy(false);
                gantt.config.layout = GANTT_CONFIG.GANTT_ONLY_LAYOUT;
                gantt.init(this.ganttContainer.nativeElement);
                console.log("reaching hereto calculate end date")
                // this.calculateEndDate();
                break;

            case MENUID.RESOURCE_ONLY:
                break;

            case MENUID.BOTH_LAYOUT:
                gantt.getGridColumn("owner").hide = true;
                gantt.getGridColumn("parent").hide = false;
                console.log("reaching BOTH_LAYOUT calculate end date")
                this.showGroups();
                break;

        }
        return false;
    }

    /**
     * Resurce view: CSS
     */
    private resourceTaskSetting() {
        gantt.templates.grid_row_class = gantt.templates.task_row_class = function (start, end, task) {
            if (task.$virtual)
                return "summary-row"
        };
        gantt.templates.task_class = function (start, end, task) {
            if (task.$virtual)
                return "summary-bar";
        };
    }

    /**
     * Resource list combination
     * @param people 
     * @param departments 
     */
    private combineLists(people, departments) {
        var result = [];
        departments.forEach(function (d) {
            var clone = gantt.copy(d);
            clone.key = "department_" + d.key;
            result.push(clone);
        });

        people.forEach(function (p) {
            var clone = gantt.copy(p);
            clone.owner_id = "department_" + p.department;
            result.push(clone);
        });
        return result;
    }

    /**
     * Resource view render
     */
    private showGroups() {
        var people = gantt.serverList("people"),
            departmnents = gantt.serverList("departments");
      
        gantt.groupBy({
            groups: this.combineLists(people, departmnents),
            relation_property: "owner_id",
            group_id: "key",
            group_text: "label",
        })

    }

    /**
     * Configure Gantt Columns
     */
    private configGanttColums() {
        gantt.config.open_tree_initially = true;
        function byId(list, id) {
            for (var i = 0; i < list.length; i++) {
                if (list[i].key == id)
                    return list[i].label || "";
            }
            return "";
        }

        const formatter = this.durationConfig()

        gantt.config.columns = [
            { name: "text", tree: true, width: 200, resize: true },
            { name: "start_date", align: "center", width: 80, resize: true },
            {
                name: "owner", width: 80, label: "Owner", align: "center", template: function (item) {
                    if (item.type == gantt.config.types.project) return ""
                    return byId(gantt.serverList('people'), item.owner_id)
                }
            },
            {
                name: "parent", width: 80, label: "Parent", align: "center", template: function (item) {
                    if (item.type == gantt.config.types.project) return ""
                    return gantt.getTask(item.parent).text;
                }
            },
            {
                name: "duration", width: 60, align: "center", template: function (task) {
                    return formatter.format(task.duration);
                }
            },
            {
                name: "po-details", width: 80, label: "PO Details", align: "center", template: function (task) {
                    return task.poDetails;
                },
               
            },
            {
                name: "priority", width: 80, label: "priority", align: "center", template: function (task) {
                    return task.priority;
                },
               
            },
            { name: "add", width: 44 }
        ];
    }

    /**
     * Display vertical bar as a marker on today's date.
     */
    private addDateMarker() {
        gantt.plugins({
            marker: true
        });

        var currentDate: any;
        var id = gantt.addMarker({
            start_date: new Date(2020, 1, 10),
            css: "marker_line",
            text: "Marker"
        });

        var dragObject = {};
        var elem: HTMLInputElement;
        document.onmousedown = function (e) {
            // elem = (<HTMLInputElement> e.target).closest('.marker_line');
            //     if (e.which != 1 || !elem)
            //         return;
            //dragObject.elem =(<HTMLInputElement>elem);
        }

        document.onmousemove = function (e) {
            if (!elem) return;
            var position = e.clientX - gantt.config.grid_width + gantt.getScrollState().x;
            currentDate = gantt.dateFromPos(position);
        }

        document.onmouseup = function (e) {
            dragObject = {};
        }
    }

    /**
     * Build Resource List
     */

    private resourceList() {
        let depts: Department[] = [];
        let staff: Staff[] = [];

        const values$ = forkJoin(
            this.resourceService.getDepartments(),
            this.resourceService.getStaff()
        );

        values$.toPromise().then((data) => {
            depts = data[0];
            staff = data[1];

            gantt.serverList("departments", depts);
            gantt.serverList("people", staff);
            gantt.serverList("priorities",this.priorities);
        })
    }

    /**
     *  Workday and resource calendar
     */
    private calendarConfig() {
        let standardCal = gantt.addCalendar(GANTT_CONFIG.STD_CALENDAR_CONFIG);
        let qualityCal = gantt.addCalendar(GANTT_CONFIG.QUALITY_CALENDAR_CONFIG);

        this.resourceService.getStaff().toPromise().then(staff => {
            gantt.updateCollection("user", staff);
        })

        gantt.config.resource_property = "owner_id";
        gantt.config.resource_calendars = {
            5: standardCal,
            6: standardCal,
            7: standardCal,
            8: standardCal,
            9: standardCal,
            12: standardCal,
            13: standardCal,
            10: qualityCal,
            11: qualityCal
        };
        // alert("Reached Destination");
        console.log("CALENDAR: " + gantt.getResourceCalendar(5));

        gantt.templates.timeline_cell_class = function (task, date) {
            if (!gantt.isWorkTime({ date: date, task: task }))
                return "week_end";
            return "";
        };

        gantt.templates.timeline_cell_class = function (task, date) {
            if (!gantt.isWorkTime(date, 'hour')) {
                return ("no_work_hour");
            }

            return "";
        };
    }

    /**
     * Lightbox/Dialog box to set task information.
     */
    private configLightBox() {
        gantt.locale.labels.section_owner = "Owner";
        gantt.locale.labels.section_priority = "Priority";
        gantt.locale.labels.section_parent = "Stage";
        gantt.locale.labels.section_department = "Department"


       

        // var opts = [
        //     { key: 1, label: 'High' },
        //     { key: 2, label: 'Normal' },
        //     { key: 3, label: 'Low' }
        // ];
         
        var opts = this.priorities;
        gantt.config.lightbox.sections = [
            //Project Name
            { name: "description", height: 38, map_to: "text", type: "textarea", focus: true },
            // Task type: Project/Task
            { name: "type", type: "typeselect", map_to: "type" },
            // Duration config: Format : Date and time
            { name: "time", type: "duration", map_to: "auto", time_format: ["%d", "%m", "%Y", "%H:%i"] },
            // Resource : Map-To owner_id=> refered as id for task data format
           // { name: "owner", height: 30, map_to: "owner_id", type: "select", options: gantt.serverList("people") },
            { name: "department", height: 30, map_to: "resourceGroup", type: "select", options: this.deparray},
            
        ];

        gantt.config.lightbox.project_sections = [
            //Parent selection control- Planned, Released, Scheduled
            {
                name: "parent", type: "parent", filter: function (id, task) {
                    if (task.$level < 1) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            { name: "priority", height: 30, map_to: "priority", type: "textarea",focus: true }
        ];

        this.resourceService.getStaff().toPromise().then(staff => {
            gantt.updateCollection("people", staff);
        })
    }

    private forwardSchedule() {
        // alert("coming to forward schedule");
        gantt.config.auto_scheduling = true;
        gantt.config.auto_scheduling_strict = true;
    }

    /**
     * Date and time scale.
     */
    private timelineScale() {
        gantt.config.fit_tasks = true;
        gantt.config.drag_project = true;
        // alert(this.taskService.autoflag);
        if (this.taskService.autoflag == 'ON') {
            //alert('scheduling by library');
            gantt.config.auto_scheduling = true;
            gantt.config.auto_scheduling_strict = true;
        }
        gantt.config.min_column_width = 20;
        gantt.config.row_height = 20;
        gantt.config.work_time = true;
        gantt.config.correct_work_time = true;
        gantt.config.scales = GANTT_CONFIG.TIMELINE_SCALES
    }

    /**
     * Duration configuration: Formats duration presentation
     */
    private durationConfig() {
        gantt.config.duration_unit = "hour";//an hour
        return gantt.ext.formatters.durationFormatter(GANTT_CONFIG.DURATION_FORMATTER);
    }

    /**
     * Highlight weekend columns on Gantt.
     */
    private cssWorkOffColumns() {
        gantt.templates.timeline_cell_class = function (task: any, date: any) {
            if (!gantt.isWorkTime({ task: task, date: date })) {
                return "weekend";
            }
        }
    }

    /**
     * Highlight weekend header on on  time scale
     */
    private cssWorkOffColHeaders() {
        gantt.templates.scale_cell_class = function (date: { getDay: () => number; }) {
            if (date.getDay() == 0 || date.getDay() == 6) {
                return "weekend";
            }
        };
    }

    /**======================================================
     * Data processor.
     *======================================================*/
     private buildDP() {
        gantt.createDataProcessor({
            task: {
                update: (data: Task) => {

                    this.taskService.update(data).then(()=>console.log('update complete'));
                
                }
                    
                    ,
                // update: null,
                 create: (data: Task) => this.taskService.insert(data),
                 delete: (id: number) => this.taskService.remove(id)
            },
            link: {
                update: (data: Link) => this.linkService.update(data),
                 create: (data: Link) => this.linkService.insert(data),
                 delete: (id: number) => this.linkService.remove(id)
            }
        });
    }
     

   private buildEvent()
    {

         gantt.attachEvent("onLightboxSave", async (id, task, is_new)=>{
             console.log('started build event processing')

            console.log('size of task map = '+this.origTaskMap.size);
            
           console.log('from orig task map')
           console.log(  this.origTaskMap.get(id));
            let  value = this.origTaskMap.get(id);
           console.log('printing updated task ')
           console.log(task);
          if( value === undefined )
          {
              console.log('Its a new task');
          }
          else{
            this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
            this.router.navigate(['/charts/view']));

          }
                 
              return true;
         });
    }
  



    autoSchedule(event) {
        this.taskService.autoSchedule().then(() => {
            gantt.config.sort = true;

            this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=> 
            this.router.navigate(['/charts/view']));
        })
        // .
        // then(() => { this.router.navigateByUrl('/charts/view') });
    }


  

    cleanUpAll(event) {
        this.taskService.cleanUp().then(() => {
            this.router.navigateByUrl('/signin');
            window.location.reload();
        });
    }

    showUploadForm() {
        this.showUploadFormFlag = !this.showUploadFormFlag;
    }

    showUploadFormResources()
    {
        this.showUploadResourceFlag = !this.showUploadResourceFlag;
    }

}


