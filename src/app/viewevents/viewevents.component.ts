import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
import { EventsService } from '../services/events.service';
import { EventsView } from '../models/eventsView';

import { Global } from '../services/global';

@Component({
  selector: 'app-viewevents',
  templateUrl: './viewevents.component.html',
  styleUrls: ['./viewevents.component.css'],
  providers: [EventsService]
})
export class VieweventsComponent implements OnInit {

  public events: EventsView;

  public url = Global.url;

  constructor(
    private _eventsService: EventsService
  ) { }

  ngOnInit() {

    this.getEvents();

    $(document).ready(function(){
      $(".text, .text-user").hide();
      $(".nav").hide();

      $("#esidenav").mouseenter(function(){
        $("#esidenav").css("width", "230px");
        setTimeout( function(){
          $(".text, .text-user").show();
        }, 185);
        
      });
      $("#esidenav").mouseleave(function(){
        $("#esidenav").css("width", "70px");
        $(".text, .text-user").hide();
      });

      $("#usuario").click(function(){
        $("#esidenav").css("width", "70px");
        $(".text, .text-user").hide();
      });

      $("#explorar").click(function(){
        $("#esidenav").css("width", "70px");
        $(".text, .text-user").hide();
      });

      $("#crear").click(function(){
        $("#esidenav").css("width", "70px");
        $(".text, .text-user").hide();
      });

      $("#buscar").click(function(){
        $("#esidenav").css("width", "70px");
        $(".text, .text-user").hide();
      });

      $("#configuracion").click(function(){
        $("#esidenav").css("width", "70px");
        $(".text, .text-user").hide();
      });

      $("#ver-mas").click(function(){
        $(".a-event").clone().appendTo("#row");
        $("html").animate({ scrollTop: $(document).height() }, 1000);
      });

    });
  }

  getEvents(){
    this._eventsService.getEvents().subscribe(
      result => {
        if(result){
          this.events = result;
          console.log(this.events);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}

//{{url + '/api/events/images/' + event.images[0].image}}