import { Component, OnInit } from '@angular/core';
import {PronosticService} from "../pronostic.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  public count1 = 0;
  public count2 = 0;
  constructor(private pronosticService : PronosticService) { }

  ngOnInit() {
  }

  augm1(){
    this.count1+=1;
  }

  augm2(){
    this.count2+=1;
  }
  


}

