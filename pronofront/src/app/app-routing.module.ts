import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AdminComponent} from "./admin/admin.component";
import {ClassementComponent} from "./classement/classement.component";
import {ConnectionComponent} from "./connection/connection.component";
import {InscriptionComponent} from "./inscription/inscription.component";
import {ListesComponent} from "./listes/listes.component";
import {MatchComponent} from "./match/match.component";
import {NewComponent} from "./new/new.component";
import {ProfilComponent} from "./profil/profil.component";
import {ResultatsComponent} from "./resultats/resultats.component";

const routes: Routes = [
    { path : 'admin', component : AdminComponent},
    { path : 'classement', component : ClassementComponent},
    { path : 'connection', component : ConnectionComponent},
    { path : 'inscription', component : InscriptionComponent},
    { path : 'liste', component : ListesComponent},
    { path : 'match', component : MatchComponent},
    { path : 'new', component : NewComponent},
    { path : 'profil', component : ProfilComponent},
    { path : 'resultats', component : ResultatsComponent},
    { path : '', redirectTo : '/connection', pathMatch : 'full'}
];

@NgModule({
  exports : [
      RouterModule
  ],
    imports : [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
