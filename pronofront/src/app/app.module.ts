import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {EquipeService} from "./equipe.service";
import {MatchService} from "./match.service";
import {PronosticService} from "./pronostic.service";
import { FormsModule }    from '@angular/forms';
import {UserService} from "./user.service";


import { AppComponent } from './app.component';
import { ConnectionComponent } from './connection/connection.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ClassementComponent } from './classement/classement.component';
import { ProfilComponent } from './profil/profil.component';
import { MatchComponent } from './match/match.component';
import { ListesComponent } from './listes/listes.component';
import { AdminComponent } from './admin/admin.component';
import { NewComponent } from './new/new.component';
import { ResultatsComponent } from './resultats/resultats.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    InscriptionComponent,
    ClassementComponent,
    ProfilComponent,
    MatchComponent,
    ListesComponent,
    AdminComponent,
    NewComponent,
    ResultatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    EquipeService,
    MatchService,
    PronosticService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
