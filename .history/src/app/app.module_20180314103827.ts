import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HomeComponent} from './homeComponent';
import {PageNotFoundComponent} from './pageNotFound';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeComponent} from './employeesComponent';
import{EmployeeTitlePipe} from './customPipe';
import {EmployeeCountComponent} from  './empCountComponent';
import { FormsModule } from '@angular/forms';
import{HiddenDirective,CpLoopDecorator} from './customDirective';
import {UnderlineDirective} from './customEventDirective'
const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
{ path: 'employees', component: EmployeeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,HomeComponent,EmployeeCountComponent,
    PageNotFoundComponent,EmployeeComponent,EmployeeTitlePipe,
    HiddenDirective,UnderlineDirective,CpLoopDecorator
  ],
  imports: [
    FormsModule,
    BrowserModule,
   RouterModule.forRoot(appRoutes)

  ],
  exports:[UnderlineDirective,HiddenDirective],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
