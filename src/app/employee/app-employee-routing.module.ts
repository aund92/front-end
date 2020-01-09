import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {CreateEmployeeComponent} from './create-employee/create-employee.component';
import {UpdateEmployeeComponent} from './update-employee/update-employee.component';
import {EmployeeDetailsComponent} from './employee-details/employee-details.component';
import {AuthGuardService} from '../service/auth-guard.service';

const routes: Routes = [
  {path: '', redirectTo: '/employee/list', pathMatch: 'full'},
  {path: 'employee/list', component: EmployeeListComponent, canActivate: [AuthGuardService]},
  {path: 'employee/add', component: CreateEmployeeComponent, canActivate: [AuthGuardService]},
  {path: 'employee/update/:id', component: UpdateEmployeeComponent, canActivate: [AuthGuardService]},
  {path: 'employee/details/:id', component: EmployeeDetailsComponent, canActivate: [AuthGuardService]},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppEmployeeRoutingModule {
}
