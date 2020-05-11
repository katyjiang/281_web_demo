import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SideNavBarComponent} from './side-nav-bar/side-nav-bar.component';
import {DashBoardComponent} from './dash-board/dash-board.component';
import { BillingComponent } from './billing/billing.component';
import {CarCatalogComponent} from './car-catalog/car-catalog.component';
import { SimulationsComponent } from './simulations/simulations.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_helpers/auth.guard';
import {BillingDetailComponent} from './billing/billing-detail/billing-detail.component';
import {PaymentComponent} from './billing/payment/payment.component';
import { AddCarsComponent } from './add-cars/add-cars.component';
import { AddSimulationsComponent } from './add-simulations/add-simulations.component';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [
  { path: '', loadChildren: usersModule, canActivate: [AuthGuard] },
  {
    path: 'users',
    loadChildren: usersModule,
    canActivate: [AuthGuard]
  },
  { path: 'account',
    loadChildren: accountModule
  },
  {
    path: 'home',
    loadChildren: usersModule
    // 	data: {title: 'User Dashboard'}
  },
  {
    path: 'dashboard',
    component: DashBoardComponent
  },
  {
    path: 'billing',
    component: BillingComponent
  },
  {
    path: 'carcatalog',
    component: CarCatalogComponent //  data: {title: 'List of cars'}
  },
  {
    path: 'simulations',
    component: SimulationsComponent//  data: {title: 'List of simulations'}
  },
  {
    path: 'billingdetail',
    component: BillingDetailComponent//  data: {title: 'List of simulations'}
  },
  {
    path: 'checkout',
    component: PaymentComponent//  data: {title: 'List of simulations'}
  },
  {
	  path: 'add-cars',
	  component: AddCarsComponent 
  },
  {
	  path: 'add-simulation',
	  component: AddSimulationsComponent
  },
 {
   path: '**',
   redirectTo: ''
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
