import { ApiBaseService } from './api.base.service';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HandleError } from './service-helper';

@Injectable()
export class HttpClientService extends ApiBaseService{
    protected headers = new Headers( { 'Content-Type' : 'application/json'})

    constructor(private http : HttpClient){
        super();
    }

    public get(url : string, ...params: any[]): Observable<any>{
       
        url = params ? this.assignParams(url, params) : url;
        return this.http.get(url).pipe(catchError(this.handleError));
    }


    public put(url : string, body? : any,...params: any[]): Observable<any>{
        url = params ? this.assignParams(url, params) : url;
        return this.http.put(url,body).pipe(catchError(this.handleError));
    }

    public postSubscribe(url : string, body? : any,...params: any[]): Observable<any>{
        url = params ? this.assignParams(url, params) : url;
        return this.http.post(url,body).pipe(catchError(this.handleError));
    }


    public post(url : string, params?:any[], body? : any): Promise<any>{
        url = params ? this.assignParams(url, params) : url;
       // console.log(url+" <> "+body);
        return this.http.post(url,body).toPromise()
        .catch(HandleError);
    }


    public update(url : string, params?:any[],body? : any): Promise<void> {
		return this.http
			.put(url, body)
			.toPromise()
			.catch(HandleError);
	}

    public  remove(url : string): Promise<void>{

       // console.log("This url is going for delete ===> "+url);
        return this.http.delete(url).toPromise()
        .catch(HandleError);
   }


    public assignParams(url:string, params:any[]) : string{
        params.forEach((param,index) =>{
            url = url.replace('{'+ index+'}', param === null || param === undefined ? '':param);
        });
        return url;
    }

    private handleError(err : any){
        console.log("coming to error handler ???")
        let errorMsg : string;
        if(err.error instanceof ErrorEvent){
            errorMsg = `Error Occurred : ${err.error.message}`;
           window.alert(errorMsg);
        }else{
            window.alert(err);
            // errorMsg = `Server Error : ${err.status}`;
            // window.alert(errorMsg);
        }
        return errorMsg;
    }
}