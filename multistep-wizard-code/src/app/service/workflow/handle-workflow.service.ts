import { Injectable } from '@angular/core';

import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { WorkflowService } from './workflow.service';

@Injectable()
export class HandleWorkflowService implements CanActivate {

  constructor(private workflowService: WorkflowService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let path: string = route.routeConfig.path;
    return this.verifyWorkFlow(path);
  }

  verifyWorkFlow(path) : boolean {
    let firstPath = this.workflowService.getFirstInvalidStep(path);
    if (firstPath.length > 0) {
        let url = `/${firstPath}`;
        this.router.navigate([url]);
        return false;
    };

    return true;
  }
}
