import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../user/authentication.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  username: string;

  constructor(
    private userService: AuthenticationService) {
  }

  ngOnInit() {
    this.username = sessionStorage.getItem('username');
  }

}
