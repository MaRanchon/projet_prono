import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ConnectionComponent } from './connection/connection.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ClassementComponent } from './classement/classement.component';
import { ProfilComponent } from './profil/profil.component';
import { MatchComponent } from './match/match.component';
import { ListesComponent } from './listes/listes.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    InscriptionComponent,
    ClassementComponent,
    ProfilComponent,
    MatchComponent,
    ListesComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
