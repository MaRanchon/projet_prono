import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {HttpClientHelper} from "../HttpClientHelper";

const HttpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
};

@Injectable()
export class MatchService {
  constructor(private http: HttpClient) {}

  getMatches() {
    return this.http.get(`${HttpClientHelper.baseURL}/api/matches`);
  }
}
