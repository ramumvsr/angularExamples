import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HomeComponent} from './homeComponent';
import {PageNotFoundComponent} from './eComponent';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,HomeComponent,PageNotFoundComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
