import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { EventsService } from '../services/events.service';
import { UsersService } from '../services/users.service';
import { Event } from '../models/event';
import { EventUser } from '../models/eventUser';

import { Global } from '../services/global';

import * as $ from 'jquery';
import * as moment from 'moment';

@Component({
	selector: 'app-viewevent',
	templateUrl: './viewevent.component.html',
	styleUrls: ['./viewevent.component.css'],
  providers: [EventsService, UsersService]
})
export class VieweventComponent implements OnInit {

	public event: Event;
	public creator: EventUser;
	public id_event: String;
	public url = Global.url;

	public name_day: String;
	public day: String;
	public month: String;
	public year: String;
	public hour: String;
	public full_date: String;

	constructor(
		private _eventsService: EventsService,
		private _usersServie: UsersService,
		private route: ActivatedRoute,
		private router: Router
	) { 
		this.event = new Event('','','',null,'','',null, null, null);
		this.creator = new EventUser('','');
	}

	ngOnInit() {

		this.route.params.subscribe((params: Params) => {
			this.id_event = params.id;
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

				this.event.date_event = new Date(this.event.date_event);
				moment.locale('es');
				this.name_day = this.capitalizeFirstLetter(moment(this.event.date_event).format('dddd'));
				this.day = moment(this.event.date_event).format('DD');
				this.month = this.capitalizeFirstLetter(moment(this.event.date_event).format('MMMM'));
				this.year = moment(this.event.date_event).format('YYYY');
				this.hour = moment(this.event.date_event).format('LT');
				this.full_date = moment(this.event.date_event).format('LLL');
				
				console.log(result.creator );

				this._usersServie.getLimitedUser(result._id).subscribe(
					userResult => {
						console.log(userResult);
						this.creator = userResult;
					},
					userError => {
						this.router.navigateByUrl('/');
						console.log(<any>userError);
					}
				)
			},
			error => {
				this.router.navigateByUrl('/');
				console.log(<any>error);
			}
		);
	}

	capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	public assistant(action){
		var assitant = {
			id_event: this.id_event,
			action: action
		}
		this._eventsService.addAssistans(assitant).subscribe(
			result =>{
				console.log(result);
			},
			error => {
				console.log(<any>error);
			}
		)
	}

}
