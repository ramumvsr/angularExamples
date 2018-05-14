import { Component, Input,O } from '@angular/core';

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


 @Output()
    countRadioButtonSelectionChanged: EventEmitter<string> =
                                        new EventEmitter<string>();
       onRadioButtonSelectionChange() {
        this.countRadioButtonSelectionChanged
            .emit(this.selectedRadioButtonValue);
    }
}
