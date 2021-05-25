export class Trip {
  constructor(
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
