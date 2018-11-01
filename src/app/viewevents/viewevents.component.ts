import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as $ from 'jquery';
import { EventsService } from '../services/events.service';
import { EventsView } from '../models/eventsView';

import { Global } from '../services/global';
import { Auth } from '../services/auth.guard';

@Component({
  selector: 'app-viewevents',
  templateUrl: './viewevents.component.html',
  styleUrls: ['./viewevents.component.css'],
  providers: [EventsService]
})
export class VieweventsComponent implements OnInit {

  public events: EventsView;

  public url = Global.url;

  public contador = 0;

  constructor(
    private _eventsService: EventsService,
    private auth: Auth,
    private router: Router
  ) { }

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

  }

  public getEvents() {
    this._eventsService.getEvents(this.contador).subscribe(
      result => {
        if (result) {
          if (result != 'Sesion no iniciada') {
            if (this.contador != 0) {
              Array.prototype.push.apply(this.events, result);
            } else {
              this.events = result;
            }
            this.contador++;
          } else {
            this.auth.setLogged(false);
            this.router.navigateByUrl('/');
            //console.log("Poner no session");
          }
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
