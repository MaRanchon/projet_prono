import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {EquipeService} from "./equipe.service";
import {MatchService} from "./match.service";
import {PronosticService} from "./pronostic.service";
import { FormsModule }    from '@angular/forms';


import { AppComponent } from './app.component';
import { ConnectionComponent } from './connection/connection.component';
import { InscriptionComponent } from './inscription/inscription.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    EquipeService,
    MatchService,
    PronosticService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
