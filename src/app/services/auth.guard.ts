import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';

import { UsersService } from './users.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class Auth implements CanActivate {
    constructor(
        private router: Router,
        private _usersService: UsersService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
/*
        this._usersService.checkSession().subscribe(
            result => {
                if(result == 'Sesion iniciada'){
                    return true;
                }else{
                    this.router.navigateByUrl('/');
                    return false;
                }
            }
        );
*/
        return this._usersService.checkSession().pipe(map(res => {
            if(res == 'Sesion iniciada'){
                return true;
            } else {
                this.router.navigateByUrl('/');
                return false;
            }
        }))
        
    }
}
