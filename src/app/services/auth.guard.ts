import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';

@Injectable()
export class Auth implements CanActivate {

    private logged: boolean;

    constructor(private router: Router) {
        this.logged = false;
    }

    setLogged(logged) {
        if(logged == true){
            localStorage.setItem('session', 'true');
        } else {
            localStorage.removeItem('session');
        }
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        console.log(this.logged);

        const redirectUrl = route['_routerState']['url'];

        if(localStorage.getItem('session') == undefined || localStorage.getItem('session') == null || localStorage.getItem('session') == ""){
            this.router.navigateByUrl('/');
            return false
        } else {
            return true;
        }
    }
}