import { Injectable }                        from '@angular/core';
import { FormData, Employee, Address }       from '../../model/data.model';

import { WorkflowService }                   from '../workflow/workflow.service';
import { STEPS }                             from '../../model/workflow.model';

@Injectable()
export class DataService {

  private formData: FormData = new FormData();
    private isEmployeeFormValid: boolean = false;
    private isSkillsFormValid: boolean = false;
    private isAddressFormValid: boolean = false;

    constructor(private workflowService: WorkflowService){
    }

    validateHome() {
        this.workflowService.validateStep(STEPS.home);
    }

    getEmployeeDetails(): Employee {
        var employee: Employee = {
            firstName: this.formData.firstName,
            lastName: this.formData.lastName,
            email: this.formData.email,
            address: this.getAddress()
        };
        return employee;
    }
 
    setEmployeeDetails(data: Employee) {
        this.isEmployeeFormValid = true;
        this.formData.firstName = data.firstName;
        this.formData.lastName = data.lastName;
        this.formData.email = data.email;
        this.setAddress(data.address);
        this.workflowService.validateStep(STEPS.employee);
    }
 
    getSkills() : Array<string> {
        return this.formData.skills;
    }
    
    setSkills(data: Array<string>) {
        this.isSkillsFormValid = true;
        this.formData.skills = data;
        this.workflowService.validateStep(STEPS.work);
    }
 
    getAddress() : Address {
        var address: Address = {
            street: this.formData.street,
            city: this.formData.city,
            state: this.formData.state,
            zip: this.formData.zip
        };
        return address;
    }
 
    setAddress(data: Address) {
        this.isAddressFormValid = true;
        this.formData.street = data.street;
        this.formData.city = data.city;
        this.formData.state = data.state;
        this.formData.zip = data.zip;
    }
 
    getFormData(): FormData {
        return this.formData;
    }
 
    resetFormData(): FormData {
        this.workflowService.resetSteps();
        this.formData.clear();
        this.isEmployeeFormValid = this.isSkillsFormValid = this.isAddressFormValid = false;
        
        return this.formData;
    }
 
    isFormValid() {
        return this.isEmployeeFormValid &&
                this.isSkillsFormValid && 
                this.isAddressFormValid;
    }

}
