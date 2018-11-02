import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';

import { UsersService } from './users.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class noAuth implements CanActivate {
    constructor(
        private router: Router,
        private _usersService: UsersService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        return this._usersService.checkSession().pipe(map(res => {
            if(res == 'Sesion iniciada'){
                this.router.navigateByUrl('/viewevents');
                return false;
            } else {
                return true;
            }
        }))
        
    }
}
