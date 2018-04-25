import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {FlightService}from './service'
import { HttpModule }     from '@angular/http';
import {FarePipe} from './flightPricePipe';



import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,FarePipe
  ],
  imports: [
    BrowserModule,NgbModule.forRoot(),FormsModule,HttpModule
  ],
  providers: [FlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
