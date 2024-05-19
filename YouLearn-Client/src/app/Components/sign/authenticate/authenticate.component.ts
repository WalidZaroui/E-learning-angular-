import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {AuthenticateService} from '../../../Services/Authenticate/authenticate.service';
import {Login} from '../../../Models/login';
import {getToken} from 'codelyzer/angular/styles/cssLexer';
import {Router} from '@angular/router';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {
  login: Login;
  constructor(private dialogRef: MatDialogRef<AuthenticateComponent>, private authenticateService: AuthenticateService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.login = new Login();
  }
  authenticate() {
    this.authenticateService.authenticate(this.login).subscribe(data => {
      // @ts-ignore
      if (!data.error) {
        console.log(data);
        // @ts-ignore
        localStorage.setItem('token', data.token);
        // @ts-ignore
        localStorage.setItem('userId', data.userId);
        this.router.navigateByUrl('/main');
        this.dialogRef.close();
      } else {
        console.log(data);
      }
    });
  }
}
