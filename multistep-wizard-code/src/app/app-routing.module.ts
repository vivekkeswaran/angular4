import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {EmployeeComponent} from './components/employee/employee.component';
import {WorkComponent} from './components/work/work.component';
import {ResultComponent} from './components/result/result.component';
import {HomeComponent} from './components/home/home.component';

import { HandleWorkflowService }  from './service/workflow/handle-workflow.service';
import { WorkflowService }      from './service/workflow/workflow.service';

export const appRoutes : Routes = [
  {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'employee',
    component: EmployeeComponent,
    canActivate: [HandleWorkflowService]
  }, {
    path: 'work',
    component: WorkComponent,
    canActivate: [HandleWorkflowService]
  }, {
    path: 'result',
    component: ResultComponent,
    canActivate: [HandleWorkflowService]
  }, {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }, {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule],
  providers: [HandleWorkflowService]
})

export class AppRoutingModule {}