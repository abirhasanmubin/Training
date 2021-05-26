import { User } from "./user.model";

export class Trip {
  constructor(
    public user: User,
    public fromLocation: string,
    public toDestination: string,
    public journeyDate: Date,
    public tripStatus: string,
    public isIssuedByDriver?: boolean,
    public startTime?: Date,
    public endTime?: Date,
    public userTrips?: Trip[],
  ) { }
}
