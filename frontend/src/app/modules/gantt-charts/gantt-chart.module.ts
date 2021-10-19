import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ViewGanttChartsComponent } from './view-gantt-charts/view-gantt-charts.component';
import { Routes, RouterModule } from '@angular/router';


export const ganttChartRoutes : Routes = [
    {
        path : 'view',
        component : ViewGanttChartsComponent
    }
]

@NgModule({
    imports : [CommonModule, RouterModule.forChild(ganttChartRoutes)],
    declarations : [ViewGanttChartsComponent]
})
export class GanttChartModule{}