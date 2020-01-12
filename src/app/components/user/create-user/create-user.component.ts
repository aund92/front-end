import {Component, OnInit} from '@angular/core';
import {UserModel} from '../../../models/user-model';
import {User, UserService} from '../../../service/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  userModel: UserModel = new UserModel();
  errorMessage = '';
  isSuccessful = true;

  constructor(
    private userService: UserService,
  ) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.createUser(this.userModel.username, this.userModel.password).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
      }, err => {
        this.errorMessage = err.error.message;
        this.isSuccessful = false;
      }
    );
  }
}
