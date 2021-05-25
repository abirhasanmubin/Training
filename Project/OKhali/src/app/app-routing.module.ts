import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { SecondaryAuthComponent } from './auth/secondary-auth/secondary-auth.component';
import { HomeComponent } from './home/home.component';
import { ProfileDetailComponent } from './profile/profile-detail/profile-detail.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { ProfileVehicleComponent } from './profile/profile-vehicle/profile-vehicle.component';
import { VehicleEditComponent } from './profile/profile-vehicle/vehicle-edit/vehicle-edit.component';
import { ProfileComponent } from './profile/profile.component';
import { TripDetailComponent } from './trips/trip-detail/trip-detail.component';
import { TripEditComponent } from './trips/trip-edit/trip-edit.component';
import { TripsComponent } from './trips/trips.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  {
    path: "trips", component: TripsComponent, children: [
      { path: "new", component: TripEditComponent },
      { path: ":id", component: TripDetailComponent },
      { path: ":id/edit", component: TripEditComponent },
    ]
  },
  { path: "user/new", component: AuthComponent },
  { path: "user/new/OAuth", component: SecondaryAuthComponent },
  {
    path: "profile", component: ProfileComponent, children: [
      { path: "", component: ProfileDetailComponent },
      { path: "edit", component: ProfileEditComponent },
      { path: "vehicle", component: ProfileVehicleComponent },
      { path: "vehicle/edit", component: VehicleEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
