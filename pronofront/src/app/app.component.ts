import {Component, OnInit} from '@angular/core';
import {EquipeService} from "./equipe.service";
import {Observable} from "rxjs/Rx";
import {MatchService} from "./match.service";
import {PronosticService} from "./pronostic.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Pronostic foot';

  public teams;
  public matches;
  public pronostics;

  public team_Nom;
  public team_pool;

  public team_unique;



  constructor(private equipeService: EquipeService, private matchService: MatchService, private pronosticService: PronosticService) {}

  ngOnInit() {
    this.getTeams();
    this.getMatches();
    this.getPronostics();
    /*this.getTeam(6);*/
  }

  getTeams() {
    this.equipeService.getTeams().subscribe(
      data => {this.teams = data},
      err => console.log(err),
      () => console.log('done loading teams')
    );
  }

  getTeam(id) {
    this.equipeService.getTeam(id).subscribe(
      data => {this.team_unique = data},
      err => console.log(err),
      () => console.log('done loading team : ' + this.team_unique.Nom)
    );
  }

  getMatches() {
    this.matchService.getMatches().subscribe(
      data => {this.matches = data},
      err => console.log(err),
      () => console.log('done loading matches')
    );
  }

  getPronostics() {
    this.pronosticService.getPronostics().subscribe(
      data => {
        this.pronostics = data
      },
      err => console.log(err),
      () => console.log('done loading pronostics')
    );
  }

  deleteTeam(team) {
    if (confirm("Voulez-vous vraiment supprimer cette équipe ?")) {
      this.equipeService.deleteTeam(team).subscribe(
        data => {
          this.getTeams();
          return true;
          },
        error => {
          console.error("Une erreur s'est produite");
          return Observable.throw(error);
         }
       );
     }
   }

   createTeam(Nom) {
    let team = {Nom : Nom};
    this.equipeService.createTeam(team).subscribe(
      data => {
        this.getTeams();
        return true;
      },
      error => {
        console.log("Une erreur s'est produite");
        return Observable.throw(error);
      }
    );
   }

   updateTeam(team) {
    this.equipeService.updateTeam(team).subscribe(
      data => {
        this.getTeams();
        return true;
      },
      error => {
        console.log("Une erreur s'est produite");
        return Observable.throw(error);
      }
    );
   }








}
