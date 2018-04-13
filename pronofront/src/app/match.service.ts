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


}
