import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classement',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.css']
})
export class ClassementComponent implements OnInit {
  public equipes = [
    "Serdaigle",
    "Serpentard",
    "Gryffondor",
    "Poufsouffle",
    "Wakanda",
    "France",
    "Moswick",
    "Psg",
    "OM",
    "Barcelone"

  ]

  constructor() { }

  ngOnInit() {
  }

}
