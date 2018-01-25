import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';

import {HomeComponent} from './components/home/home.component';
import {EmployeeComponent} from './components/employee/employee.component';
import {ResultComponent} from './components/result/result.component';
import {WorkComponent} from './components/work/work.component';

import {AppRoutingModule} from './app-routing.module';

import {DataService} from './service/data/data.service';
import {WorkflowService} from './service/workflow/workflow.service';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, NavbarComponent, 
    EmployeeComponent, ResultComponent, WorkComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule
  ],
  providers: [{provide: DataService, useClass: DataService},
              {provide: WorkflowService, useClass: WorkflowService}],
  bootstrap: [AppComponent]
})
export class AppModule {}