import { Injectable } from "@angular/core";
import { ApiBaseService } from './api.base.service';
import { HttpClientService } from './http.client.service';
import { Observable } from 'rxjs';
import { Resource } from '../models/resource.model';
import { map } from 'rxjs/operators';
import { Task } from '../models/task.model';
import { MachineStatus } from '../models/mcstatus.model';
import { HandleError } from './service-helper';
import { RawInput } from '../models/RawInput';
import { ResourceRequest } from '../models/rsourcerequest.model';
import { ResourceLib } from '../models/resourcelib.model';
import { on } from "process";
import { Params } from "../models/Params";



@Injectable()
export class TaskService extends ApiBaseService{
    constructor(private httpClientService : HttpClientService){
        super()
    }

    flag:boolean = false;
    autoflag:string ;
    params:Params;
    


    getResources() : Observable<Resource[]>{
       return this.httpClientService.get(this.api.getResources)
            .pipe(map((data : any) => <Resource[]>data));
    }

    getTasks() : Observable<Task[]>{
        return this.httpClientService.get(this.api.getTasks)
            .pipe(map((data : any) => <Task[]>data));
    }

    getAlignedTasks(resourceRequest: ResourceRequest) : Observable<Task[]>{
        return this.httpClientService.put(this.api.alignedTask,resourceRequest)
            .pipe(map((data : any) => <Task[]>data));
    }


    getMachineStatus() : Observable<MachineStatus[]>{
        return this.httpClientService.get(this.api.getMachineStatus)
            .pipe(map((data : any) => <MachineStatus[]>data));
    }

    getGanttTasks(): Observable<Task[]>{
        //alert("coming in gantt task");
        return this.httpClientService.get(this.api.getGanttTasks)
            .pipe(map((data : any) => <Task[]>data));
    }
    
    insert(task: Task): Promise<void> {
		return this.httpClientService.post(this.api.singletaskUrl,[] ,task)
     
    }

    autoSchedule(): Promise<void>
    {
        const i =  this.httpClientService.post(this.api.autoSchedule);
        
        return i;
    }


    autoScheduleFlagReader():Observable<Params>
    {
       
         return this.httpClientService.get(this.api.autoScheduleFlag);
       // .pipe(map((data : any) =>this.autoflag = data.value));
    }

    


    
    



    cleanUp(): Promise<void>
    {
        return this.httpClientService.remove(this.api.cleanup)
    }


    
    update(task: Task): Promise<void> {   
        
		return this.httpClientService
			.update(`${this.api.tasks}/${task.id}`,[],task)
			;
	}
    

    remove(id: number):Promise<void> {
      //  console.log("reaching in delete and url  =>"+this.api.tasks);
		return this.httpClientService.remove(`${this.api.tasks}/${id}`);
		
	}
    

    



     insertAll(tasks: RawInput[],selectedStage:string): Promise<RawInput[]> {

	
        return this.httpClientService.post( `${this.api.loadPlan}/${selectedStage}`,[],tasks)
        .catch(err => {
            console.log(err.error.message);
            alert(err.error.message);
        })

    }



    insertSubscribeAll(tasks: RawInput[],selectedStage:string): Observable<RawInput[]> {

	
        return this.httpClientService.postSubscribe( `${this.api.loadPlan}/${selectedStage}`,[],tasks)
        
    }
    
     insertResourceLib(resourcelib:ResourceLib[]): Promise<ResourceLib[]>{
  
        
        return this.httpClientService.post( `${this.api.loadResourceLib}`,[],resourcelib)
     }




    startTask(starttedTask:Task):Observable<Task>{
        return this.httpClientService.put(`${this.api.start}/${starttedTask.id}`)
         .pipe(map((data : any) => <Task>data));       
    }

    holdTask(starttedTask:Task):Observable<Task>{

        return this.httpClientService.put(`${this.api.hold}/${starttedTask.id}`)
         .pipe(map((data : any) => <Task>data));       
    }

    finishTask(starttedTask:Task):Observable<Task[]>{
        return this.httpClientService.put(`${this.api.finish}/${starttedTask.id}`);
          
    }

}