import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trip } from 'src/app/models/trip.model';

@Component({
  selector: 'app-trip-item',
  templateUrl: './trip-item.component.html',
  styleUrls: ['./trip-item.component.css']
})
export class TripItemComponent implements OnInit {

  @Input() trip: Trip;
  @Input() index: number;

  constructor(
    
  ) { }

  ngOnInit(): void {
  }

}
