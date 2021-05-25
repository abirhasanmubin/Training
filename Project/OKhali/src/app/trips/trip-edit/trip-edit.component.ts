import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-trip-edit',
  templateUrl: './trip-edit.component.html',
  styleUrls: ['./trip-edit.component.css']
})
export class TripEditComponent implements OnInit {

  tripForm = new FormGroup({
    from: new FormControl("", Validators.required),
    to: new FormControl("", Validators.required),
    date: new FormControl("", Validators.required),
  })

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit() {
    console.log(this.tripForm.value['from']);

  }

}
