import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us.component';
import { CommonModule } from '@angular/common';


const contactUsRoutes : Routes = [
    {
        path : 'contact-details',
        component : ContactUsComponent
    }
]

@NgModule({
    imports : [CommonModule, RouterModule.forChild(contactUsRoutes)],
    declarations : [ContactUsComponent]
})
export class ContactUsModule{}