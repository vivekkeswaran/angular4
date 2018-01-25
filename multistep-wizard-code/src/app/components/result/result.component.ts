import { Component, OnInit } from '@angular/core';
import { Router }             from '@angular/router';

import { FormData }                   from '../../service/data/data.model';
import { DataService }            from '../../service/data/data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  title: string = '';
  skills: string = '';
  formData: FormData;
  isFormValid: boolean = false;
  
  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit() {
      this.formData = this.dataService.getFormData();
      this.title = 'Welcome, ' + this.formData.firstName + '!!';

      for(let index = 0; index < this.formData.skills.length; index++) {
        if(index != 0) {
          this.skills = this.skills + ', ';
        }
        
        this.skills = this.skills + this.formData.skills[index];
      }
  }

  submit() {
      this.formData = this.dataService.resetFormData();
      this.router.navigate(['/home']);
  }
}
