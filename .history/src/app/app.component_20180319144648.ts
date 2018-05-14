import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div style="padding:5px">
                        <ul class="nav nav-tabs">
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
                     <div class="collapse navbar-collapse navbar-ex1-collapse" >
      <ul class="nav navbar-nav navbar-right">
        <li><a [routerLink]="['/home']"  class="navBarTextFontColor">Home</a></li>
        <li><a  class="navBarTextFontColor">About</a></li>
        <!--<li><a href="" class="navBarTextFontColor">Contact</a></li>-->
      </ul>
    </div>
                   `

})
export class AppComponent {
}