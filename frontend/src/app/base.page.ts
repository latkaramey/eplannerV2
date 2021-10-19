import { Title } from '@angular/platform-browser';

import { environment as environment} from '../environments/environment'

export abstract class BasePage{
    constructor(private baseTitle : Title){
        baseTitle.setTitle(environment.appTitle);
    }

    public setTitle(title: string){
        if(title){
            title += " | ";
            this.baseTitle.setTitle(title + environment.appTitle);
        }
    }
} 