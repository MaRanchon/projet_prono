import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {HttpClientHelper} from "../HttpClientHelper";


const HttpOptions = {
  headers: new HttpHeaders({'Content-type' : 'application/json'})
};

@Injectable()
export class PronosticService {
  constructor(private http: HttpClient) {}

  getPronostics() {
    return this.http.get(`${HttpClientHelper.baseURL}/api/pronostics`);
  }
}
