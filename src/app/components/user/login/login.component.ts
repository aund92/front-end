import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../../service/user.service';
import {SessionStorageKey} from '../../../const/session-storage-key';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  invalidLogin = false;
  isLoginFailed = false;

  constructor(
    private router: Router,
    private userService: UserService) {

  }

  ngOnInit() {
    if (this.userService.isUserLoggerIn()) {
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

  checkLogin() {
    this.userService.authenticate(this.username, this.password).subscribe(
      data => {
        console.log('data');
        console.log(data);
        sessionStorage.setItem(SessionStorageKey.USERNAME, this.username);
        sessionStorage.setItem(SessionStorageKey.TOKEN, 'Bearer ' + data.token);
        this.invalidLogin = false;
        this.router.navigate(['home']);
      }, error => {
        console.log('error');
        console.log(error.error.message);
        this.invalidLogin = true;
        this.isLoginFailed = true;
        this.router.navigate(['login']);
      }
    );
  }
}
