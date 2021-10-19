import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { UpdateTaskComponent } from './modules/tasks/update-task/update-task.component';
import { TaskService } from './services/task.service';
import { HttpClientService } from './services/http.client.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LinkService } from './services/link.service';
import { ResourceService } from './services/resource.service';
//import { UploadPlanComponent } from './modules/upload-plan/upload-plan/upload-plan.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './services/AuthInterceptor';
import { IndexComponent } from './components/index/index.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './components/signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
  //  UploadPlanComponent,
    IndexComponent,
    RegisterComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

    FormsModule ,
    ReactiveFormsModule    
  ],
  providers: [HttpClientService,TaskService, LinkService, ResourceService, {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
