import { Component, Input } from '@angular/core';

@Component({
    selector: 'employee-count',
    templateUrl: 'empCountComponent.html',
    styleUrls: ['app.component.css']
})
export class EmployeeCountComponent {
    @Input()
    all: number;

    @Input()
    male: number;

    @Input()
    female: number;
}
