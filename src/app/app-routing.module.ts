import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmployeeListComponent} from './employee/employee-list/employee-list.component';
import {CreateEmployeeComponent} from './employee/create-employee/create-employee.component';
import {UpdateEmployeeComponent} from './employee/update-employee/update-employee.component';
import {EmployeeDetailsComponent} from './employee/employee-details/employee-details.component';


const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
