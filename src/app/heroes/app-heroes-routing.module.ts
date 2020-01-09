import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeListComponent} from '../employee/employee-list/employee-list.component';
import {CreateEmployeeComponent} from '../employee/create-employee/create-employee.component';
import {UpdateEmployeeComponent} from '../employee/update-employee/update-employee.component';
import {EmployeeDetailsComponent} from '../employee/employee-details/employee-details.component';
import {HeroesComponent} from './heroes.component';
import {HeroesHomeComponent} from './heroes-home/heroes-home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {AuthGuardService} from '../service/auth-guard.service';


const routes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent,
    children: [
      {
        path: 'heroesHome',
        component: HeroesHomeComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      },
    ],
    canActivate: [AuthGuardService]
  },


];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppHeroesRoutingModule {
}
