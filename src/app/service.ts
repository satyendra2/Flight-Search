import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { FlightData } from './flightData';

@Injectable()
export class FlightService {

  private flightsUrl = './assets/flight.json';

  constructor(private http: Http) { }

  getFlights(): Observable<FlightData[]> {
    return this.http.get(this.flightsUrl)
      .map((response: Response) => <FlightData[]>response.json())
      // .do(data => console.log("All: " + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(error: any) {

    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}