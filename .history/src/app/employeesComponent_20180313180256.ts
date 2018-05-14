import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'my-employee',
    templateUrl: 'employees.html',
    styleUrls: ['app.component.css']
})
export class EmployeeComponent implements OnInit {

    statusMessage: string = 'Loading data. Please wait...';
 employees: any[];
  employeess: any[];

    selectedEmployeeCountRadioButton: string = 'All';

    constructor(private _activatedRoute: ActivatedRoute) {
       this.employeess = [
            {
                code: 'emp101', name: 'Tom', gender: 'Male',
                annualSalary: 5500, dateOfBirth: '12/06/1988'
            },
            {
                code: 'emp102', name: 'Alex', gender: 'Male',
                annualSalary: 5700.95, dateOfBirth: '09/06/1982'
            },
            {
                code: 'emp103', name: 'Mike', gender: 'Male',
                annualSalary: 5900, dateOfBirth: '12/08/1979'
            },
            {
                code: 'emp104', name: 'Mary', gender: 'Female',
                annualSalary: 6500.826, dateOfBirth: '12/08/1979'
            },
        ];
    }

    ngOnInit() {
    //    let empCode: string = this._activatedRoute.snapshot.params['code'];


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
      onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
        console.log(selectedRadioButtonValue)
    }
}