import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {Observable} from "rxjs/Observable";



@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  public user;

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.getUser(1);
  }

  getUser(id) {
    this.userService.getUser(1).subscribe(
      data => {this.user = data},
      err => console.log(err),
      () => console.log('done loading user')
    );
  }

}
