import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmployeeListComponent} from './components/employee/employee-list/employee-list.component';
import {CreateEmployeeComponent} from './components/employee/create-employee/create-employee.component';
import {UpdateEmployeeComponent} from './components/employee/update-employee/update-employee.component';
import {EmployeeDetailsComponent} from './components/employee/employee-details/employee-details.component';
import {AuthGuardService} from './service/auth-guard.service';
import {LoginComponent} from './components/user/login/login.component';
import {LogoutComponent} from './components/user/logout/logout.component';
import {HomeComponent} from './components/user/home/home.component';
import {CreateUserComponent} from './components/user/create-user/create-user.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'employee', children: [
      {path: 'list', component: EmployeeListComponent},
      {path: 'add', component: CreateEmployeeComponent},
      {path: 'update/:id', component: UpdateEmployeeComponent},
      {path: 'details/:id', component: EmployeeDetailsComponent},
    ],
    canActivate: [AuthGuardService]
  },
  {
    path: 'user', children:
      [
        {path: 'create-user', component: CreateUserComponent}
      ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [AuthGuardService]},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
