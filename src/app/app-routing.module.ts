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

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
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
    component: UserDashboardComponent
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
   path: '**',
   redirectTo: ''
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
