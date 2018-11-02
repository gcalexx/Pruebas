import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public url: string;

  constructor(
    public _http: HttpClient
  ) {
    this.url = Global.url;
  }

  getUser(user): Observable<any> {
    return this._http.get(this.url + "/api/users?ticket=" + user.ticket + "&password=" + user.password, { withCredentials: true });
  }

  addUser(user): Observable<any> {
    return this._http.post(this.url + "/api/users", user);
  }

  checkSession(): Observable<any> {
    return this._http.get(this.url + "/api/users/session", { withCredentials: true })
  }

  logout(): Observable<any> {
    return this._http.get(this.url + "/api/users/session/logout", {withCredentials: true})
  }
}
