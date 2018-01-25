import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';
 
import { Employee }             from '../../model/data.model';
import { DataService }          from '../../service/data/data.service';

@Component({
  selector: 'app-personal',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {

    title = 'Enter Employee Details';
    employee: Employee;
    form: any;
    
    constructor(private router: Router, private dataService: DataService) {
    }
 
    ngOnInit() {
        this.employee = this.dataService.getEmployeeDetails();
    }
 
    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }
            
        this.dataService.setEmployeeDetails(this.employee);
        
        return true;
    }

    goToPrevious(form: any) {
        this.router.navigate(['/home']);
    }
 
    goToNext(form: any) {
        if (this.save(form)) {
            this.router.navigate(['/work']);
        }
    }
}
