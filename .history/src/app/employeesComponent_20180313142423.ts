import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'my-employee',
    templateUrl: 'employees.html',
   styleUrls: ['app.component.css']
})
export class EmployeeComponent implements OnInit {
  
    statusMessage: string = 'Loading data. Please wait...';


    constructor(private _activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        let empCode: string = this._activatedRoute.snapshot.params['code'];
      
    
    }
      getTotalEmployeesCount(): number {
        return this.employees.length;
    }

    getMaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === 'Male').length;
    }

    getFemaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === 'Female').length;
    }
}