import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PassengerDashboardComponent } from './components/passenger/passenger-dashboard/passenger-dashboard.component';
import { CurrentRideComponent } from './components/passenger/current-ride/current-ride.component';
import { DriverDashboardComponent } from './components/driver/driver-dashboard/driver-dashboard.component';
import { AssignedRideComponent } from './components/driver/assigned-ride/assigned-ride.component';
import { VehicleListComponent } from './components/vehicle/vehicle-list/vehicle-list.component';
import { VehicleDetailsComponent } from './components/vehicle/vehicle-details/vehicle-details.component';
import { PaymentListComponent } from './components/payment/payment-list/payment-list.component';
import { PaymentDetailsComponent } from './components/payment/payment-details/payment-details.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'passenger-dashboard', component: PassengerDashboardComponent },
  { path: 'current-ride', component: CurrentRideComponent },
  { path: 'driver-dashboard', component: DriverDashboardComponent },
  { path: 'assigned-ride', component: AssignedRideComponent },
  { path: 'vehicle-list', component: VehicleListComponent },
  { path: 'vehicle-details/:id', component: VehicleDetailsComponent },
  { path: 'payment-list', component: PaymentListComponent },
  { path: 'payment-details/:id', component: PaymentDetailsComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];
