import { Component, OnInit } from '@angular/core';
import {MatchService} from "../match.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-listes',
  templateUrl: './listes.component.html',
  styleUrls: ['./listes.component.css']
})
export class ListesComponent implements OnInit {

  public matches;

  constructor(private matchService : MatchService) { }

  ngOnInit() {
    this.getMatches();
  }

  getMatches() {
    this.matchService.getMatches().subscribe(
      data => this.matches = data,
      err => console.log(err),
      () => console.log('done loading matches')
    );
  }

}
