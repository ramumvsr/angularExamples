import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DialogService } from "ng2-bootstrap-modal";
import { ConfirmComponent } from './confirm';

@Component({
    selector: 'my-employee',
    templateUrl: 'employees.html',
    styleUrls: ['app.component.scss']
})
export class EmployeeComponent implements OnInit {
    public data: any[];
    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "email";
    public sortOrder = "asc";
    confirmResult = null;

    statusMessage: string = 'Loading data. Please wait...';
    employees: any[];
    selectedEmployeeCountRadioButton: string = 'All';

    constructor(private _activatedRoute: ActivatedRoute, private readonly dialogService: DialogService) {
        this.employees = [
            {
                code: 'emp101', name: 'Tom', gender: 'Male',
                annualSalary: 5500, dateOfBirth: '6/25/1988'
            },
            {
                code: 'emp102', name: 'Alex', gender: 'Male',
                annualSalary: 5700.95, dateOfBirth: '9/6/1982'
            },
            {
                code: 'emp103', name: 'Mike', gender: 'Male',
                annualSalary: 5900, dateOfBirth: '12/8/1979'
            },
            {
                code: 'emp104', name: 'Mary', gender: 'Female',
                annualSalary: 6500.826, dateOfBirth: '10/14/1980'
            },
            {
                code: 'emp105', name: 'Nancy', gender: 'Female',
                annualSalary: 6700.826, dateOfBirth: '12/15/1982'
            },
        ];
    }

    ngOnInit() {
        //    let empCode: string = this._activatedRoute.snapshot.params['code'];


    }

    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.city.length;
    }

    public remove(item) {
        let index = this.data.indexOf(item);
        if (index > -1) {
            this.data.splice(index, 1);
        }
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
    }
    confirmFunc(code) {

        this.dialogService.addDialog(ConfirmComponent, {
            title: 'Confirmation',
            message: 'Are you sure,Do you want to delete this record?'
        })
            .subscribe((isConfirmed) => {
                this.confirmResult = isConfirmed;
                if (isConfirmed) {
                    for (let i = 0; i <= this.employees.length; i++) {
                        if (code === this.employees[i].code) {
                            this.employees.splice(i, 1);
                        }
                    }
                }
            });
    }
}