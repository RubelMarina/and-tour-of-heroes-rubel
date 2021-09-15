import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import {FormsModule} from "@angular/forms";
import { DetailComponent } from './detail/detail.component';
import { MassagesComponent } from './massages/massages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DetailComponent,
    MassagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
