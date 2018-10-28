import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  public url: String

  constructor(
    public _http: HttpClient
  ) {
    this.url = Global.url;
  }

  getEvents(): Observable<any>{
    return this._http.get(this.url + "/api/events?page=1", {withCredentials: true});
  }

  getImage(nameImage: String): Observable<any>{
    return this._http.get(this.url + "/api/events/uploads/events/" + nameImage, {withCredentials: true});
  }
}
