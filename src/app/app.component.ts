import { Component, OnInit } from '@angular/core';
import { FlightService } from './service';
import { Flight } from './flight';
import { FlightData } from './flightData';
import { NgForm } from '@angular/forms';
import {FarePipe} from './flightPricePipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  sliderValue:number = 1500;

  compareStatus: boolean = false;

  sourceList = ["Delhi", "Mumbai", "Dubai", "Goa", "Chennai", "Hyderabad", "Thailand", "Bangkok"];
  destinationList = ["Dubai", "Delhi", "Mumbai", "Goa", "Chennai", "Hyderabad", "Thailand", "Bangkok"];

  // Form validation
  flight = new Flight(this.sourceList[0], this.destinationList[0]);
  sourceValue: string = "Delhi";
  destinationValue: string = "Dubai";
  loadingStatus: boolean = true;
  updateStatus:boolean = true;
  flights: FlightData[];
  errorMessage: string;

  source: string;
  destination: string;
  departureDate: Date;
  returnDate: Date;
  passanger: number;
  filteredFlights: any[];
  filteredFlights1: any[];
  filteredFlights2: any[];
  filteredFlights3: any[];

  fullImagePath: string;
  fullImagePath1: string;
  fullImagePath2: string;
  fullImagePath3: string;

  constructor(private flightService: FlightService) {
    this.fullImagePath = './assets/images/images1.jpeg',
      this.fullImagePath1 = './assets/images/images2.jpeg',
      this.fullImagePath2 = './assets/images/images3.jpeg',
      this.fullImagePath3 = './assets/images/images4.jpeg'
  }




  ngOnInit() {
    this.getFlights();
  }

  getFlights() {
    this.flightService.getFlights().subscribe(
      flights => this.flights = flights,
      error => this.errorMessage = <any>error);
  }

  // One-Way form submission
  onSubmit(SearchPara: any) {
    this.loadingStatus = false;
    this.updateStatus = true;
    this.source = SearchPara.source;
    this.destination = SearchPara.destination;
    this.departureDate = SearchPara.departureDate;
    this.returnDate = SearchPara.returnDate;
    this.passanger = SearchPara.passanger;
    console.log("sr: " + this.source + " dest: " + this.destination + " startDate: " + this.departureDate + " Pass: " + this.passanger);

    if (this.departureDate) {
      this.filteredFlights = this.flights.filter((x) => {
        return (x.from == this.source) &&
          (x.to == this.destination) &&
          (x.startDate == this.departureDate) 
      });
     } 
     else{
      this.filteredFlights = this.flights.filter((x) => {
        return (x.from == this.source) &&
          (x.to == this.destination) 
      });
     }
   }

  //  Roundtrip form submission
  returnFun(SearchPara: any) {
    this.filteredFlights = [];
    this.loadingStatus = false;
    this.updateStatus = false;
    this.source = SearchPara.source;
    this.destination = SearchPara.destination;
    this.departureDate = SearchPara.departureDate;
    this.returnDate = SearchPara.returnDate;
    this.passanger = SearchPara.passanger;
    console.log("src: " + this.source + " dest: " + this.destination + " startDate: " + this.departureDate + " endDate: " + this.returnDate + " Pass: " + this.passanger);


    if (this.departureDate && this.returnDate) {
      this.filteredFlights1 = this.flights.filter((x) => {
        return (x.from == this.source) &&
          (x.to == this.destination) &&
          (x.startDate == this.departureDate) 
      }); 
      this.filteredFlights2 = this.flights.filter((x) => {
        return (x.from == this.destination) &&
          (x.to == this.source) &&
          (x.startDate == this.returnDate) 
      });
     } 
  }


  // Form-Value change validation
  onChangeSource(newValue) {
    this.source = newValue;
    console.log("source: " + this.source);
    this.compareValues();
  }

  onChangedestination(newValue) {
    this.destination = newValue;
    console.log("dest: " + this.destination);
    this.compareValues();
  }


  compareValues() {

    if (this.source == this.destination || this.destination  == this.source  || this.sourceValue == this.destinationValue || this.destinationValue == this.sourceValue) {
      this.compareStatus = true;
    } 
    else {
      this.compareStatus = false;
    }
  }

}
