import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { FormsModule } from '@angular/forms';


export const taskRoutes = [
    { path:'update', component : UpdateTaskComponent }
]

@NgModule({
    imports : [ CommonModule,FormsModule, RouterModule.forChild(taskRoutes)],
    declarations : [UpdateTaskComponent]
})
export class TaskModule{}