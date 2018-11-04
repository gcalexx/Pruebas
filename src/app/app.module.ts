import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VieweventsComponent } from './viewevents/viewevents.component';
import { NeweventComponent } from './newevent/newevent.component';
import { LogoutComponent } from './logout/logout.component';
import { VieweventComponent } from './viewevent/viewevent.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VieweventsComponent,
    NeweventComponent,
    LogoutComponent,
    VieweventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
