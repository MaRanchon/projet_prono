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

  public team_unique;

  public match_unique;
  public match_nomEquipe1;
  public match_nomEquipe2;

  public pronostic_unique;

  public pronostic_score1;
  public pronostic_score2;
  public pronostic_idMatch;


  constructor(private equipeService: EquipeService, private matchService: MatchService, private pronosticService: PronosticService) {}

  ngOnInit() {
    this.getTeams();
    this.getMatches();
    this.getPronostics();
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




  getMatches() {
    this.matchService.getMatches().subscribe(
      data => {this.matches = data},
      err => console.log(err),
      () => console.log('done loading matches')
    );
  }

  getMatch(id) {
    this.matchService.getMatch(id).subscribe(
      data => {this.match_unique = data},
      err => console.log(err),
      () => console.log(`done loading match : ${this.match_unique.nomEquipe1} vs ${this.match_unique.nomEquipe2}`)
    );
  }

  createMatch(nomEquipe1, nomEquipe2) {
    let match = {
      nomEquipe1 : nomEquipe1,
      nomEquipe2 : nomEquipe2
    };
    this.matchService.createMatch(match).subscribe(
      data => {
        this.getMatches();
        return true;
      },
      err => {
        console.log("Une erreur s'est produite");
        return Observable.throw(err)
      }
    );
  }

  deleteMatch(match) {
    if (confirm("Voulez-vous supprimer ce match ?")) {
      this.matchService.deleteMatch(match).subscribe(
        data => {
          this.getMatches();
          return true;
        },
        err => {
          console.log("Une erreur est survenue");
          return Observable.throw(err);
        }
      );
    }
  }

  updateMatch(match) {
    this.matchService.updateMatch(match).subscribe(
      data => {
        this.getMatches();
        return true;
      },
      err => {
        console.log("Une erreur s'est produite");
        return Observable.throw(err);
      }
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

  getPronostic(id) {
    this.pronosticService.getPronostic(id).subscribe(
      data => {this.pronostic_unique = data},
      err => console.log(err),
      () => console.log('done loading pronostic')
    );
  }

  createPronostic(idMatch, scoreEquipe1, scoreEquipe2) {
    let pronostic = {
      idMatch : idMatch,
      scoreEquipe1 : scoreEquipe1,
      scoreEquipe2 : scoreEquipe2
    };
    this.pronosticService.createPronostic(pronostic).subscribe(
      data => {
        this.getPronostics();
        return true;
      },
      err => {
        console.log("Une erreur est survenue");
        return Observable.throw(err);
      }

    );

  }

  updatePronostic(pronostic) {
    this.pronosticService.updatePronostic(pronostic).subscribe(
      data => {
        this.getPronostics();
        return true;
      },
      err => {
        console.log("une erreur est survenue");
        return Observable.throw(err);
      }
    );
  }





}

