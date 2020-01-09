import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [LoginComponent, LogoutComponent, HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class UserModule {
}
