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

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
{ path: 'employees', component: EmployeeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,HomeComponent,EmployeeCountComponent,PageNotFoundComponent,EmployeeComponent,EmployeeTitlePipe,HiddenDirective
  ],
  imports: [
    FormsModule,
    BrowserModule,
            RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
