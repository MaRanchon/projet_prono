import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classement',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.css']
})
export class ClassementComponent implements OnInit {
  public profils = [
    "toto1",
    "marc4",
    "elise18",
    "admin84",
    "visojzojezo",
    "dzdsdsf",
    "Mcve",
    "kronenbourg2500",
    "lili80",


  ]

  constructor() { }

  ngOnInit() {
  }

}
