import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { Land3Component } from './land3/land3.component';
import { LandingPage4Component } from './landing-page4/landing-page4.component';
import { Land5Component } from './land5/land5.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    Land3Component,
    LandingPage4Component,
    Land5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
