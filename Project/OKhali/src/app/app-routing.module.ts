import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { SecondaryAuthComponent } from './auth/secondary-auth/secondary-auth.component';
import { HomeComponent } from './home/home.component';
import { TripDetailComponent } from './trips/trip-detail/trip-detail.component';
import { TripsComponent } from './trips/trips.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "trips", component: TripsComponent },
  { path: "trips/detail", component: TripDetailComponent },
  { path: 'user/new', component: AuthComponent },
  { path: 'user/new/OAuth', component: SecondaryAuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
