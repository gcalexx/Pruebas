import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { VieweventsComponent } from './viewevents/viewevents.component';
import { NeweventComponent } from './newevent/newevent.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'viewevents', component: VieweventsComponent},
  {path: 'newevent', component: NeweventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
