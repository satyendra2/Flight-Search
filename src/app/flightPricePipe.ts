import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
  name: 'FarePipe'
})
export class FarePipe implements PipeTransform {

 
  transform(priceVal: any, priceFil?: any):any {
    // ES6 array destructuring
    console.log('priceFil', priceFil);
    return priceFil
    ? priceVal.filter(filteredFlights => filteredFlights.flightRate >= priceFil) 
    : priceVal;
  }

}