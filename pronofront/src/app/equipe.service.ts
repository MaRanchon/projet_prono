import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {HttpClientHelper} from "../HttpClientHelper"; // Le fichier où l'url de base est stockée

const HttpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'}) //Sera utilisée par les requetes qui envoient du json
};

@Injectable()
export class EquipeService {

  constructor(private http: HttpClient) {}

  getTeams() {
    return this.http.get(`${HttpClientHelper.baseURL}/api/equipes`);
  }

  getTeam(id) {
    return this.http.get(`${HttpClientHelper.baseURL}/api/equipes/` + id);
  }

  deleteTeam(team) {
    return this.http.delete(`${HttpClientHelper.baseURL}/api/equipes/` + team.id);
  }

  createTeam(team) {
    let body= JSON.stringify(team);
    return this.http.post(`${HttpClientHelper.baseURL}/api/equipes`, body, HttpOptions);
  }

  updateTeam(team) {
    let body = JSON.stringify(team);
    return this.http.put(`${HttpClientHelper.baseURL}/api/equipes/` + team.id, body, HttpOptions);
  }
}
