import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HomeComponent} from './homeComponent';
import {PageNotFoundComponent} from './pageNotFound';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import 
const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
{ path: 'employees', component: EmployeeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,HomeComponent,PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
            RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
