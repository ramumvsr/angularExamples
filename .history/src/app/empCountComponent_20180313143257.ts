import { Component, Input } from '@angular/core';

@Component({
    selector: 'employee-count',
    templateUrl: 'employeeCount.html',
    styleUrls: ['app.component.css']
})
export class EmployeeCountComponent {
    @Input()
    all: number;

    @Input()
    male: number;

    @Input()
    female: number;



       onRadioButtonSelectionChange() {
        this.countRadioButtonSelectionChanged
            .emit(this.selectedRadioButtonValue);
    }
}
