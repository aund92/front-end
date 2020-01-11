import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from './user/authentication.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular8 + Spring boot 2 CRUD Tutorial';
  username = '';
  constructor(
    private router: Router,
    private userService: AuthenticationService
  ) {
  }

  ngOnInit(): void {
    // $('#sidebarCollapse').on('click', function () {
    //   $('#sidebar').toggleClass('active');
    // });
    if (this.userService.isUserLoggerIn()) {
      this.username = sessionStorage.getItem('username')
    }
  }

}
