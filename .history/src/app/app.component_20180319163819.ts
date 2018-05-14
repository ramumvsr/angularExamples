import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
   styleUrls: ['./app.component.scss'],
  template: `<div style="padding:5px">
                        <ul class="navbar navbar-expand-lg navbar-light bg-light">
                            <li routerLinkActive="active">
                                <a routerLink="home">Home</a>
                            </li>
                            <li routerLinkActive="active">
                                <a routerLink="employees">Employees</a>
                            </li>
                        </ul>
                        <br/>
                        <router-outlet></router-outlet>
                    </div>
           
                   `

})
export class AppComponent {
} 