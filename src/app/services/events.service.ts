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

  getEvents(contador): Observable<any> {
    return this._http.get(this.url + "/api/events?page=" + contador, { withCredentials: true });
  }

  getEvent(event): Observable<any> {
    return this._http.get(this.url + "/api/events/" + event, { withCredentials: true });
  }
  /*
    getImage(nameImage: String): Observable<any> {
      return this._http.get(this.url + "/api/events/image/" + nameImage, { withCredentials: true });
    }*/

  addEvent(event, files: Array<File>): Observable<any> {

    var formData = new FormData();
    if (files) {
      for (var i = 0; i < files.length; i++) {
        formData.append('images', files[i]);
      }
    }

    formData.append('name_event', event.name_event);
    formData.append('type_event', event.type_event);
    formData.append('category', event.category);
    formData.append('date_event', event.date_event);
    formData.append('hour_event', event.hour_event);
    formData.append('address_event', event.address_event);
    formData.append('description', event.description);


    return this._http.post(this.url + "/api/events", formData, { withCredentials: true });
  }
}
