import { Injectable } from '@angular/core';

import { STEPS } from '../../model/workflow.model';

@Injectable()
export class WorkflowService {

  private workflow = [
    { step: STEPS.home, valid: false },
    { step: STEPS.employee, valid: false },
    { step: STEPS.work, valid: false },
    { step: STEPS.result, valid: false }
];

  constructor() { }

  validateStep(step: string) {
    var found = false;
    for (var i = 0; i < this.workflow.length && !found; i++) {
        if (this.workflow[i].step === step) {
            found = this.workflow[i].valid = true;
        }
    }
  }

  resetSteps() {
    this.workflow.forEach(step => {
        step.valid = false;
    });
  }

  getFirstInvalidStep(step: string) : string {
    let found = false;
    let valid = true;
    let redirectTo = '';
    
    for (let index = 0; index < this.workflow.length && !found && valid; index++) {
        let item = this.workflow[index];
        if (item.step === step) {
            found = true;
            redirectTo = '';
        }
        else {
            valid = item.valid;
            redirectTo = item.step
        }
    }
    
    return redirectTo;
  }
}
