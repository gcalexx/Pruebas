import { Component, OnInit } from '@angular/core';

import { Login } from '../models/login';
import { Register } from '../models/register'

import * as $ from 'jquery';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UsersService]
})
export class HomeComponent implements OnInit {

  public login: Login;
  public register: Register;

  constructor(
    private _usersService: UsersService
  ) {
    this.login = new Login('','');
    this.register = new Register('','','','','');
  }

  ngOnInit() {

    this._usersService.checkSession().subscribe(
      result => {
        if(result == 'Sesion iniciada'){
          console.log("Redirigir a view");
        }
      }
    )

      $(".text, .text-user").hide();
      $(".nav").hide();
    
      $("#menu, #menub").click(function(){
          $("#mySidenav").css("width", "305px");
          setTimeout(
            function() 
            {
              $(".nav").show();
            }, 300);
          $("#menu, #menub").fadeOut(400);    
      });
      $("#cerrar").click(function(){
          $("#mySidenav").css("width", "0px");
          $(".nav").hide();
          $("#menu, #menub").fadeIn(400);
      });
      
      $("#menu-events").click(function(){
          $("#esidenav").removeClass("hidden-xs");
          $("#esidenav").css("width", "230px");
        setTimeout( function(){
          $(".text, .text-user").show();
        }, 185);
      });
    
      $("#close-events").click(function(){
        $("#esidenav").css("width", "70px");
          $("#esidenav").addClass("hidden-xs");
      });
    
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
    
      $("#explorar").click(function(){
        $("#content").load("./explorar.html");
        $("#esidenav").css("width", "70px");
        $(".text, .text-user").hide();
      });
    
      $("#crear").click(function(){
        $("#content").load("./explorar.html");
        $("#esidenav").css("width", "70px");
        $(".text, .text-user").hide();
      });
  }

  onSubmitLogin(form){
    console.log(this.login);
    this._usersService.getUser(this.login).subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log(<any>error);
      }
    );
    form.reset();
  }

  onSubmitRegister(form){
    //console.log(this.register);
    this._usersService.addUser(this.register).subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log(<any>error);
      }
    );
    form.reset();
  }

}
