import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Auth } from './services/auth.guard';
import { noAuth } from './services/noAuth.guard';

import { HomeComponent } from './home/home.component';
import { VieweventsComponent } from './viewevents/viewevents.component';
import { VieweventComponent } from './viewevent/viewevent.component';
import { NeweventComponent } from './newevent/newevent.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [noAuth]},
  {path: 'viewevents', component: VieweventsComponent, canActivate: [Auth]},
  {path: 'viewevent', component: VieweventComponent, canActivate: [Auth]},
  {path: 'newevent', component: NeweventComponent, canActivate: [Auth]},
  {path: 'logout', component: LogoutComponent, canActivate: [Auth]},
  {path: '**', component: HomeComponent, canActivate: [noAuth]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [Auth, noAuth]
})
export class AppRoutingModule { }
