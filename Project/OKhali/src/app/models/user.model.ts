import { Trip } from "./trip.model";
import { Vehicle } from "./vehicle.model";

export class User {
  constructor(
    public userId: string,
    public userName: string,
    public userEmail: string,
    private _token: string,
    private _tokenExpirationDate: Date,
    public contact: string,
    public review: number,
    public reviewedBy: number,
    public isDriver: boolean,
    public vehicle: Vehicle[],
    public trips: Trip[]
  ) { }

  get Token() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }
}
