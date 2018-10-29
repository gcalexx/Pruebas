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

  getEvents(contador): Observable<any>{
    return this._http.get(this.url + "/api/events?page=" + contador, {withCredentials: true});
  }

  getImage(nameImage: String): Observable<any>{
    return this._http.get(this.url + "/api/events/uploads/events/" + nameImage, {withCredentials: true});
  }

  addEvent(event, files: Array<File>){
    return new Promise(function(resolve, reject){
      
    });
  }
}
