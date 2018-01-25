import { Component, OnInit }  from '@angular/core';
import { Router }             from '@angular/router';

import { DataService }        from '../../service/data/data.service';
import { OPTIONS }            from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  title = "Select the Action";

  constructor(private router: Router, private dataService: DataService) {
  }

  ngOnInit() {
  }

  navigate(type: string) {
    this.dataService.validateHome();
    switch(type)
    {
      case OPTIONS.new: 
      {
        this.router.navigate(['/employee']);
      } 
    }
  }
}
