import { Injectable } from '@angular/core';
import { Trip } from '../models/trip.model';

@Injectable({
  providedIn: 'root'
})
export class TripService {



  trips: Trip[] = [];

  constructor(

  ) { }

  getTrips() {
    return this.trips.slice();
  }
  getTrip(id) {
    return this.trips.slice()[id];
  }
}
