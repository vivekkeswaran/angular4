import { Component, OnInit } from '@angular/core';
import { Router }              from '@angular/router';

import { DataService } from '../../service/data/data.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

    title = 'What are your skills?';
    selectedItem: string;
    addSelectSkill: string;
    rmvSelectSkill: string;
    skills_all: Array<string>;
    skills_selected: Array<string>;
    form: any;
    
    constructor(private router: Router, private dataService: DataService) {
        this.skills_all = ["Java", "HTML", "CSS", "Angular", "React",
                            "XML", "C", "C++", "JavaScript", "SQL",
                            "UML", "JBuilder", "Dreamweaver", "Rational Rose", 
                            "UltraEdit", "Borland C++Builder", "Oracle SQL* Plus",
                            "Windows XP", "Linux", "Mac OS X"];
        this.addSelectSkill = "";
        this.rmvSelectSkill = "";
    }
 
    ngOnInit() {
        this.skills_selected = this.dataService.getSkills();
    }

    onchange(item: any, type: string) {
        if(type = "add")
            this.addSelectSkill = item.target.value;
        else if(type = "remove")
            this.rmvSelectSkill = item.target.value;
    }

    addSkill() {
        const isFound = this.skills_selected.find(s => s == this.addSelectSkill);
        if(isFound || this.addSelectSkill == "")
            return;

        this.skills_selected.push(this.addSelectSkill);
        this.addSelectSkill = "";
    }

    removeSkill() {
        const index = this.skills_selected.findIndex(s => s == this.rmvSelectSkill);

        this.skills_selected.splice(index, 1);
        this.rmvSelectSkill = "";
    }
 
    save(form: any): boolean {
        this.dataService.setSkills(this.skills_selected);
        return true;
    }
 
    goToPrevious(form: any) {
        if (this.save(form)) {
            this.router.navigate(['/employee']);
        }
    }
 
    goToNext(form: any) {
        if (this.save(form)) {
            this.router.navigate(['/result']);
        }
    }
}
