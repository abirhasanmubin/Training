import { Injectable } from '@angular/core';
import { Trip } from '../models/trip.model';

@Injectable({
  providedIn: 'root'
})
export class TripService {



  trips: Trip[] = [
    new Trip("Sylhet", "Dhaka", new Date(2021, 5, 28),
      "created", false, null, null, null),
    new Trip("Dhaka", "Sylhet", new Date(2021, 6, 14),
      "created", false, null, null, null),
    new Trip("Dhaka", "Sylhet", new Date(2021, 6, 14),
      "created", true, null, null, [
      new Trip("Dhaka", "Sylhet", new Date(2021, 6, 14), "created", false, null, null, null)
    ]),
    new Trip("Sylhet", "Dhaka", new Date(2021, 6, 28),
      "created", false, null, null, null),
    new Trip("Sylhet", "Dhaka", new Date(2021, 6, 28),
      "created", false, null, null, null),
  ]

  constructor(

  ) { }

  getTrips() {
    return this.trips.slice();
  }
  getTrip(id) {
    return this.trips.slice()[id];
  }
}
