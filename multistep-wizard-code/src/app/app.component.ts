import { Component, OnInit, Input }   from '@angular/core';
import { DataService }            from './service/data/data.service';
 
@Component ({
    selector: 'multi-step-wizard-app',
    templateUrl: './app.component.html'
})
 
export class AppComponent implements OnInit {
    title = 'Multi-Step Wizard';
    @Input() formData;
    
    constructor(private dataService: DataService) {
    }
 
    ngOnInit() {
        this.formData = this.dataService.getFormData();
    }
}