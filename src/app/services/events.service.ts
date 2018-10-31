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
    var URL = Global.url;
    return new Promise(function(resolve, reject){
      var formData = new FormData();
      var xhr = new XMLHttpRequest();

      for(var i = 0;i<files.length;i++){
        formData.append('images', files[i]/*, files[1].name*/);
      }

      formData.append('name_event', event.name_event);
      formData.append('type_event', event.type_event);
      formData.append('category', event.category);
      formData.append('date_event', event.date_event);
      formData.append('hour_event', event.hour_event);
      formData.append('addres_event', event.address_event);
      formData.append('description', event.description);

      xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
          if(xhr.status == 200){
            console.log(xhr.response);
            resolve(xhr.response);
          } else {
            reject(xhr.response)
          }
        }
      }

      xhr.open('POST',Global.url + "/api/events", true);
      xhr.send(formData);

    });
  }
}
