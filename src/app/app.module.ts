import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CreateEmployeeComponent} from './components/employee/create-employee/create-employee.component';
import {EmployeeListComponent} from './components/employee/employee-list/employee-list.component';
import {EmployeeDetailsComponent} from './components/employee/employee-details/employee-details.component';
import {UpdateEmployeeComponent} from './components/employee/update-employee/update-employee.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SideBarComponent} from './components/side-bar/side-bar.component';
import {AuthHttpInterceptorService} from './service/auth-http-interceptor.service';
import {LoginComponent} from './components/user/login/login.component';
import {LogoutComponent} from './components/user/logout/logout.component';
import {HomeComponent} from './components/user/home/home.component';
import { CreateUserComponent } from './components/user/create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    UpdateEmployeeComponent,
    SideBarComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptorService, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
