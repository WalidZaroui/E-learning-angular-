import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {User} from '../../../Models/user';
import {UserService} from '../../../Services/user/user.service';
import {AuthenticateService} from '../../../Services/Authenticate/authenticate.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: User;
  trainer: boolean;
  constructor(private dialogRef: MatDialogRef<SignUpComponent>, private userService: UserService, private router: Router) { }
  ngOnInit(): void {
    this.user = new User();
  }
  createUser() {
    if (this.trainer) {
      this.user.role = 'trainer';
      console.log(this.user);
    } else {
      this.user.role = 'student';
    }
    this.userService.createUser(this.user).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

}
