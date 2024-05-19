import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {User} from '../../Models/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api = environment.webservice.baseUrl;
  private headers: HttpHeaders;
  constructor(private http: HttpClient) { }

  createUser(user: User) {
    return this.http.post(this.api + 'user', user);
  }
  getUserByToken(): Observable<any> {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
    // @ts-ignore
    return this.http.get(this.api + 'user', {
      headers: this.headers
    });
  }

  findAll(): Observable<any> {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
    // @ts-ignore
    return this.http.get(this.api + 'users', {
      headers: this.headers
    });
  }

  save(user: User): Observable<any> {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
    // @ts-ignore
    return this.http.post(this.api + 'user', user, {
      headers: this.headers
    });
  }

  update(user: User): Observable<any> {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
    // @ts-ignore
    return this.http.put(this.api + 'user', user, {
      headers: this.headers
    });
  }

  delete(id: string): Observable<any> {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
    // @ts-ignore
    return this.http.delete(this.api + 'user/' + id, {
      headers: this.headers
    });
  }
}
