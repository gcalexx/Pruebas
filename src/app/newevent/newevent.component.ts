import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as $ from 'jquery';
import { EventsService } from '../services/events.service';
import { Event } from '../models/event';

@Component({
  selector: 'app-newevent',
  templateUrl: './newevent.component.html',
  styleUrls: ['./newevent.component.css'],
  providers: [EventsService]
})
export class NeweventComponent implements OnInit {

  public event: Event;
  public filesToUpload: Array<File>;

  constructor(
    private _eventsService: EventsService,
    private router: Router
  ) {
    this.event = new Event('', '', '', '', '', '', '');
  }

  ngOnInit() {
    $(document).ready(function () {
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
        $(".a-event").clone().appendTo("#row");
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

    });

  }

  onSubmitaddEvent(form) {
    this._eventsService.addEvent(this.event, this.filesToUpload).subscribe(
      result => {
        if (result != 'Sesion no iniciada') {
          console.log(result);
        } else {
          this.router.navigateByUrl('/');
        }
      },
      error => {
        console.log(<any>error);
      }
    );
    form.reset();
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}
