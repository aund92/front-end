import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  @Input() username: string;

  constructor(
    private userService: UserService) {
  }

  ngOnInit() {
    this.username = sessionStorage.getItem('username');
  }


}
