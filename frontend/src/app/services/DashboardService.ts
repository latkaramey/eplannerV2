import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { flatMap, map } from "rxjs/operators";
import { ApiBaseService } from "./api.base.service";
import { HttpClientService } from "./http.client.service";

@Injectable(
    {
        providedIn: 'root'
      }
)
export class DashboardService extends ApiBaseService{
    constructor(private httpClientService : HttpClientService){
        super()
    }

    getPriorityAndEfforts() : Observable<any[]>{
        return this.httpClientService.get(this.api.getPriorityAndEffortsStat)
        .pipe(flatMap(data => data),
                map((data : any)=> {
                    console.log(data);
                    return data;
        }));;
    }

    getMachineLoadingStat() : Observable<any[]>{
        return this.httpClientService.get(this.api.getMachineLoadingStat)
        .pipe(flatMap(data => data),
                map((data : any)=> {
                    console.log(data);
                    return data;
        }));;
    }

    getWorkOrdersCountStat() : Observable<any[]>{
        return this.httpClientService.get(this.api.getWorkOrdersCountStat)
        .pipe(flatMap(data => data),
                map((data : any)=> {
                    console.log(data);
                    return data;
        }));;
    }

    getWorkOrdersEffortsStat() : Observable<any[]>{
        return this.httpClientService.get(this.api.getWorkOrdersEffortsStat)
        .pipe(flatMap(data => data),
                map((data : any)=> {
                    console.log(data);
                    return data;
        }));;
    }

    getScheduleAdhrenceStat() : Observable<any[]>{
        return this.httpClientService.get(this.api.getScheduleAdhrenceStat)
        .pipe(flatMap(data => data),
                map((data : any)=> {
                    console.log(data);
                    return data;
        }));;
    }
}