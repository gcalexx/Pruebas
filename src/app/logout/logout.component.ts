import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
  providers: [UsersService]
})
export class LogoutComponent implements OnInit {

  constructor(
    private _usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    this._usersService.logout().subscribe(
      result => {
        if(result == 'Sesion cerrada'){
          this.router.navigateByUrl('/');
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }



}
