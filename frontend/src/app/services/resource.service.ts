import { Injectable } from "@angular/core";
import { ApiBaseService } from './api.base.service';
import { HttpClientService } from './http.client.service';
import { Observable } from 'rxjs';
import { Staff } from '../models/staff.model';
import { map } from 'rxjs/operators';
import { Department } from '../models/department.model';
import { ResourceRequest } from '../models/rsourcerequest.model';

@Injectable()
export class ResourceService extends ApiBaseService{
    constructor(private httpClientService : HttpClientService){
        super();
    }

    getStaff(): Observable<Staff[]>{
        return this.httpClientService.get(this.api.getStaff)
            .pipe(map((data : any)=> <Staff[]>data));
    }

    getDepartments() : Observable<Department[]>{

        return this.httpClientService.get(this.api.getDepartments)
            .pipe(map((data :any) =>    <Department[]>data));
    }

    updateResourceGroup(resourceRequest: ResourceRequest): Promise<void> {    
		return this.httpClientService
			.update(this.api.department,[],resourceRequest)
			;
	}


    

}