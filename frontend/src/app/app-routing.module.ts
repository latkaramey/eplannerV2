import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
//import { LoginComponent } from './components/login/login.component';
//import { UploadPlanComponent } from './modules/upload-plan/upload-plan/upload-plan.component';
import {UpdateTaskComponent} from './modules/tasks/update-task/update-task.component'
import { AuthGuard } from './services/auth-guard.service';
import { AuthGuardUser } from './services/auth-guard-user.service';
import { IndexComponent } from './components/index/index.component';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  

  {
    path:'signin',
    component : SigninComponent
  },
  {
    path:'signup',
    component : RegisterComponent
  },
  {
    path:'index',
    component : IndexComponent
  },
  {
    path : 'contact-us',
    loadChildren : './modules/contact-us/contact-us.module#ContactUsModule'
  },

  {
     path : 'charts',canActivate:[AuthGuard],
     loadChildren : './modules/gantt-charts/gantt-chart.module#GanttChartModule'
  },
  {
    path:'operator',canActivate:[AuthGuardUser],
    loadChildren : './modules/tasks/tasks.module#TaskModule'
  },

  {
    path : 'contact-us',
    loadChildren : './modules/contact-us/contact-us.module#ContactUsModule'
  },
  {
    path:"",
    redirectTo: '/signin',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
