import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {FlightService}from './service'
import { HttpModule }     from '@angular/http';

// import { routes } from './app.routes';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,NgbModule.forRoot(),FormsModule,HttpModule
  ],
  providers: [FlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
