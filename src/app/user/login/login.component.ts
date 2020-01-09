import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  invalidLogin = false;

  constructor(private router: Router, private userService: AuthenticationService) {

  }

  ngOnInit() {
    if (this.userService.isUserLoggerIn()) {
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

  checkLogin() {
    if (this.userService.authenticate(this.username, this.password)) {
      this.invalidLogin = false;
      this.router.navigate(['home']);
    } else {
      this.invalidLogin = true;
    }
  }
}
