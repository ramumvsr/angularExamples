import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
   styleUrls: ['./h.component.scss'],
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
                    <div class="navbar navbar-default navbar-fixed-top navBarBackground navBarHeight" role="navigation">
  <div class="container navBarWidth">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle navBarMarginSetting"  data-toggle="collapse" data-target=".navbar-ex1-collapse">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand navBarHeaderFontColor" [routerLink]="['./home']">MATRIX VE Tasks</a>
    </div>
    <div class="collapse navbar-collapse navbar-ex1-collapse" >
      <ul class="nav navbar-nav navbar-right">
        <li><a [routerLink]="['/home']"  class="navBarTextFontColor">Home</a></li>
        <li><a  class="navBarTextFontColor">About</a></li>
        <!--<li><a href="" class="navBarTextFontColor">Contact</a></li>-->
      </ul>
    </div><!--/.nav-collapse -->
  </div>
</div> 
                   `

})
export class AppComponent {
}