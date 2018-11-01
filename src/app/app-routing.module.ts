import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Auth } from './services/auth.guard';

import { HomeComponent } from './home/home.component';
import { VieweventsComponent } from './viewevents/viewevents.component';
import { NeweventComponent } from './newevent/newevent.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'viewevents', component: VieweventsComponent, canActivate: [Auth]},
  {path: 'newevent', component: NeweventComponent, canActivate: [Auth]},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [Auth]
})
export class AppRoutingModule { }
