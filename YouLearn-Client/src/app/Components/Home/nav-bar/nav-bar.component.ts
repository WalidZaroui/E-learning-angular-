import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AuthenticateComponent} from '../../sign/authenticate/authenticate.component';
import {SignUpComponent} from '../../sign/sign-up/sign-up.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialogAuthenticate() {
    const dialogRef = this.dialog.open(AuthenticateComponent, {
      width: 'auto',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialogRegister() {
    const dialogRef = this.dialog.open(SignUpComponent, {
      width: 'auto',
      maxHeight: '100%'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
