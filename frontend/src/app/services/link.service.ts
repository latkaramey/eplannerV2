import { Injectable } from "@angular/core";
import { ApiBaseService } from './api.base.service';
import { HttpClientService } from './http.client.service';
import { Link } from '../models/link.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class LinkService extends ApiBaseService{
    constructor(private httpClientService : HttpClientService){
        super()
    }

    getLinks():Observable<Link[]>{
		return this.httpClientService.get(this.api.getLinks)
			.pipe(map((data : any) => <Link[]>data));
    }

    insert(link: Link): Promise<Link> {
		return this.httpClientService.post(this.api.getLinks,[] ,link)
        
    }
    
     update(link: Link): Promise<void>{
		 return this.httpClientService
			.update(`${this.api.getLinks}/${link.id}`)
		;
    }
    

    remove(id: number): Promise<void>{
		return this.httpClientService.remove(`${this.api.getLinks}/${id}`);
		
	}

    


}