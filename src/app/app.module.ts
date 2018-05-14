import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeComponent } from './homeComponent';
import { PageNotFoundComponent } from './pageNotFound';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employeesComponent';
import { EmployeeTitlePipe } from './customPipe';
import { EmployeeCountComponent } from './empCountComponent';
import { FormsModule } from '@angular/forms';
import { HiddenDirective } from './customDirective';
import { CpLoopDecorator } from './customForloop'
import { UnderlineDirective } from './customEventDirective'
import { DataFilterPipe } from "./pipe";
import { ConfirmComponent } from './confirm';
import { BootstrapModalModule, DialogService } from 'ng2-bootstrap-modal';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'employees', component: EmployeeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    ConfirmComponent,AppComponent, HomeComponent, EmployeeCountComponent,
    PageNotFoundComponent, EmployeeComponent, EmployeeTitlePipe,
    HiddenDirective, UnderlineDirective, CpLoopDecorator, DataFilterPipe
  ],
  imports: [
    BootstrapModalModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
   providers: [DialogService],

    
  exports: [UnderlineDirective, HiddenDirective, CpLoopDecorator],
    entryComponents: [ConfirmComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
