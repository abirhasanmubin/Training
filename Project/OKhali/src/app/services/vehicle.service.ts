import { Injectable } from '@angular/core';
import { Vehicle } from '../models/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  vehicle: Vehicle;

  constructor(

  ) { }

  createVehicle(
    vehicleId: string,
    vehicleName: string,
    vehicleCompany: string,
    vehicleType: string,
    noOfSeats: number
  ) {
    this.vehicle = new
      Vehicle(vehicleId, vehicleName, vehicleCompany, vehicleType, noOfSeats);
  }

  getVehicle() {
    return { ...this.vehicle };
  }

}


