import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public url: string;

  constructor(
    public _http: HttpClient
  ) {
    this.url = 'http://localhost:3000/api/users';
  }
  
  getUser(user): Observable<any>{
    return this._http.get(this.url + "?ticket=" + user.ticket + "&password=" + user.password, {withCredentials: true});
  }

  addUser(user): Observable<any>{
    return this._http.post(this.url, user);
  }
}
