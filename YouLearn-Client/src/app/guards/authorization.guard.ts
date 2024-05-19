import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if ((localStorage.getItem('token') == null || localStorage.getItem('token') === undefined) &&
      (localStorage.getItem('userId') == null || localStorage.getItem('userId') === undefined)) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
