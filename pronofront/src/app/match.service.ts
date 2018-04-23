import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {HttpClientHelper} from "../HttpClientHelper";

const HttpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
};

const baseURL = HttpClientHelper.baseURL;

@Injectable()
export class MatchService {
  constructor(private http: HttpClient) {}

  getMatches() {
    return this.http.get(`${baseURL}/api/matches`);
  }

  getMatch(id) {
    return this.http.get(`${baseURL}/api/matches/` + id);
  }

  createMatch(match) {
    let body = JSON.stringify(match);
    return this.http.post(`${baseURL}/api/matches`, body, HttpOptions);
  }

  deleteMatch(match) {
    return this.http.delete(`${baseURL}/api/matches/` + match.id);
  }

  updateMatch(match) {
    let body = JSON.stringify(match);
    return this.http.put(`${baseURL}/api/matches/` + match.id, body, HttpOptions);
  }


}
