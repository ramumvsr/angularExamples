import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HomeComponent} from 'h'

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
