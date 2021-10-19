import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BasePage } from 'src/app/base.page';
import { TaskService } from 'src/app/services/task.service';
import { Resource } from 'src/app/models/resource.model';
import { Task } from 'src/app/models/task.model';
import { MachineStatus } from 'src/app/models/mcstatus.model';
import { Department } from 'src/app/models/department.model';
import { ResourceService } from 'src/app/services/resource.service';
import { Machine } from 'src/app/models/machine.model';
import { ResourceRequest } from 'src/app/models/rsourcerequest.model';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent extends BasePage implements OnInit {

  resources: Resource[] = [];
  tasks: Task[] = [];
  alignedTask: Task[] = [];
  deparray: Department[] = [];
  depname: String;
  machines: Array<any>;
  machine: Machine;
  flag: boolean = false;
  selectedIndex: number;
  public productDetails: object;
  machineStatusHolder: string[] = ["Available", "Hold", "Running", "Maintanance"];
  machineDropDownHolder: string[] = [];
  currentMachineStatus: string;
  resourceRequest: ResourceRequest = new ResourceRequest();
  selectedTask: Task;
  finishedTask: Task[] = [];
  finish: Task;
  selectedId: any;
  nodata:boolean =true;






  constructor(private taskService: TaskService, private title: Title, private resourceService: ResourceService,
    private router: Router,private authService:AuthService) {
    super(title);
    super.setTitle("Update Task");
  }

  ngOnInit() {
    this.taskService.getResources().subscribe(resources => {
      this.resources = resources;
    
    });
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
        });
  
    this.resourceService.getDepartments().subscribe(
      data => {
        if(data.length === 0)

        {
         // alert("Contact admin to upload schedule");
        }
        for (var val of data) {
          this.nodata =false;
          this.deparray.push(val);
        }
      }
    );
    this.resetTasks;


  }


resetTasks()
{
  this.alignedTask = [];
  this.finishedTask = [];
}

  changeMachineGroup(group) {
    this.resetTasks;
    this.machines = this.deparray.find(grp => grp.label == group).machineList;
    this.resourceRequest.group = group;

  }


  changeMachine(selectedMachine) {
    this.resetTasks;
    this.machineDropDownHolder.splice(0, this.machineDropDownHolder.length);
    this.flag = true;
    this.machine = this.machines.find(machines => machines.machineName == selectedMachine);
     //cleanup
    this.machineStatusHolder.filter((m) => {
     // if (m != this.machine.machineStatus) {
        this.machineDropDownHolder.push(m);
      //}
    });
    this.resourceRequest.machine = selectedMachine;
   this. callTasks(selectedMachine);

    

  }

  changeMachineStatus(machineStatus) {
    this.currentMachineStatus = machineStatus;
    this.resourceRequest.machineStatus = machineStatus;
  }


  submitGroupData(tt) {

    this.resourceService.updateResourceGroup(this.resourceRequest);
  }


  callTasks(dummy) {
   
   this.resetTasks;
    this.taskService.getAlignedTasks(this.resourceRequest).subscribe(tasks => {
      this.alignedTask = tasks;
      this.finishedTask = this.alignedTask.filter(f=>f.status == 'COMPLETED')
      this.alignedTask = this.alignedTask.filter(f=>f.status !=='COMPLETED')
     // 
    });
  }

  selectTask(event, row) {
    this.selectedId = row.id;
    this.selectedTask = row;
  //  console.log(row);
  }

  startTask(event, selectedTask) {

    this.taskService.startTask(selectedTask).subscribe(data => {
      this.selectedTask = data;
      this.callTasks(event);
    });
    
  }

  holdTask(event, selectedTask) {

    this.taskService.holdTask(selectedTask).subscribe(data => {
      this.selectedTask = data;
    })
  }

  // autoSchedule(event)
  // {
  //   //alert("autoscheduling start")
  //   this.taskService.autoSchedule();
    

  // }

  



  finishTask(event, selectedTask) {
    this.resetTasks;
     this.taskService.finishTask(selectedTask).subscribe(data => {
      //this.finish = data;
      this.finishedTask = data;
      this.alignedTask = this.alignedTask.filter(t => t.id !== selectedTask.id)

    })


   





  }

}
