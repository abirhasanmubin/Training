import { Trip } from "./trip.model";
import { Vehicle } from "./vehicle.model";

export class User {
  constructor(
    public userId: string,
    public userName: string,
    public contact: string,
    public review: number,
    public reviewedBy: number,
    public isDriver: boolean,
    public vehicle: Vehicle[],
    public trips: Trip[]
  ) { }
}
