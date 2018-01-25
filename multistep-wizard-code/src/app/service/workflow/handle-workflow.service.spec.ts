import { TestBed, inject } from '@angular/core/testing';

import { HandleWorkflowService } from './handle-workflow.service';

describe('HandleWorkflowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HandleWorkflowService]
    });
  });

  it('should be created', inject([HandleWorkflowService], (service: HandleWorkflowService) => {
    expect(service).toBeTruthy();
  }));
});
