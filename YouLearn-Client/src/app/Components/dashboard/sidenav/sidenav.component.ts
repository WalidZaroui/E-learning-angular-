import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../Models/user';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {UserService} from '../../../Services/user/user.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  user: User;
  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private userService: UserService) {
    this.user = new User();
  }

  ngOnInit(): void {
    this.getUserById();
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.router.navigateByUrl('/');
  }
  getUserById() {
    this.userService.getUserByToken().subscribe(data => {
      this.user = data.user;
      // console.log(this.user);
    }, error => {
      console.log(error);
    });
  }

}
