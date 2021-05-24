import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { TripsComponent } from './trips/trips.component';
import { TripListComponent } from './trips/trip-list/trip-list.component';
import { TripDetailComponent } from './trips/trip-detail/trip-detail.component';
import { TripEditComponent } from './trips/trip-edit/trip-edit.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { ProfileVehicleComponent } from './profile/profile-vehicle/profile-vehicle.component';
import { VehicleEditComponent } from './profile/profile-vehicle/vehicle-edit/vehicle-edit.component';
import { SecondaryAuthComponent } from './auth/secondary-auth/secondary-auth.component';
import { HomeComponent } from './home/home.component';
import { TripItemComponent } from './trips/trip-list/trip-item/trip-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    TripsComponent,
    TripListComponent,
    TripDetailComponent,
    TripEditComponent,
    ProfileComponent,
    ProfileEditComponent,
    ProfileVehicleComponent,
    VehicleEditComponent,
    SecondaryAuthComponent,
    HomeComponent,
    TripItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
