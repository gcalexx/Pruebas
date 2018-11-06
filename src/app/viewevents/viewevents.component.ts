import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as $ from 'jquery';
import { EventsService } from '../services/events.service';
import { EventsView } from '../models/eventsView';

import { Global } from '../services/global';
import * as moment from 'moment';


@Component({
  selector: 'app-viewevents',
  templateUrl: './viewevents.component.html',
  styleUrls: ['./viewevents.component.css'],
  providers: [EventsService]
})
export class VieweventsComponent implements OnInit {

  public events: Array<EventsView>;

  public url = Global.url;

  public contador = 0;

  constructor(
    private _eventsService: EventsService,
    private router: Router
  ) {
    this.events = new Array();
   }

  ngOnInit() {
    this.getEvents();
    $(".text, .text-user").hide();
    $(".nav").hide();

    $("#esidenav").mouseenter(function () {
      $("#esidenav").css("width", "230px");
      setTimeout(function () {
        $(".text, .text-user").show();
      }, 185);

    });
    $("#esidenav").mouseleave(function () {
      $("#esidenav").css("width", "70px");
      $(".text, .text-user").hide();
    });

    $("#usuario").click(function () {
      $("#esidenav").css("width", "70px");
      $(".text, .text-user").hide();
    });

    $("#explorar").click(function () {
      $("#esidenav").css("width", "70px");
      $(".text, .text-user").hide();
    });

    $("#crear").click(function () {
      $("#esidenav").css("width", "70px");
      $(".text, .text-user").hide();
    });

    $("#buscar").click(function () {
      $("#esidenav").css("width", "70px");
      $(".text, .text-user").hide();
    });

    $("#configuracion").click(function () {
      $("#esidenav").css("width", "70px");
      $(".text, .text-user").hide();
    });

    $("#ver-mas").click(function () {
      $("html").animate({ scrollTop: $(document).height() }, 1000);
    });

    $("#menu-events").click(function () {
      $("#esidenav").removeClass("hidden-xs");
      $("#esidenav").css("width", "230px");
      setTimeout(function () {
        $(".text, .text-user").show();
      }, 185);
    });

    $("#close-events").click(function () {
      $("#esidenav").css("width", "0px");
      $(".text, .text-user").hide();
      setTimeout(function () {
        $("#esidenav").addClass("hidden-xs");
      }, 450);
    });

  }

  public getEvents() {
    this._eventsService.getEvents(this.contador).subscribe(
      result => {
        if (result) {
          if (result != 'Sesion no iniciada') {
              result.map(function (event){
                event.date_event = new Date(event.date_event);
                moment.locale('es');
                event.date_event = moment(event.date_event).format('LLLL');
              });
              Array.prototype.push.apply(this.events, result);
            this.contador++;
          } else {
            this.router.navigateByUrl('/');
          }
        }
      },
      error => {
        this.router.navigateByUrl('/');
        console.log(<any>error);
      }
    );
  }

}
