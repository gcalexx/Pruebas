import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { EventsService } from '../services/events.service';
import { Event } from '../models/event';

import { Global } from '../services/global';

import * as $ from 'jquery';

@Component({
	selector: 'app-viewevent',
	templateUrl: './viewevent.component.html',
	styleUrls: ['./viewevent.component.css'],
  providers: [EventsService]
})
export class VieweventComponent implements OnInit {

	public event: Event;

	public url = Global.url;

	constructor(
		private _eventsService: EventsService,
		private route: ActivatedRoute,
		private router: Router
	) { 
		this.event = new Event('','','','','','','', null, null);
	}

	ngOnInit() {

		this.route.params.subscribe((params: Params) => {
			this.getEvent(params.id);
		});

		$(".text, .text-user").hide();
		$(".nav").hide();
		$("#popup_shadow").hide();
		$('#popup').hide();

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

		$("#mas").click(function () {
			$("#popup_shadow").fadeIn(500);
			$('#popup').fadeIn(500);
		});

		$("#close").click(function () {
			$("#popup_shadow").fadeOut(500);
			$('#popup').fadeOut(500);
		});
	}

	getEvent(id_event: String){
		this._eventsService.getEvent(id_event).subscribe(
			result => {
				this.event = result;
				console.log(this.event);
			},
			error => {
				console.log(<any>error);
			}
		);
	}

}
