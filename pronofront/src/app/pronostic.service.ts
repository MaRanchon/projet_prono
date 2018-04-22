import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {HttpClientHelper} from "../HttpClientHelper";


const HttpOptions = {
  headers: new HttpHeaders({'Content-type' : 'application/json'})
};

const baseURL= HttpClientHelper.baseURL;

@Injectable()
export class PronosticService {
  constructor(private http: HttpClient) {}

  getPronostics() {
    return this.http.get(`${baseURL}/api/pronostics`);
  }

  getPronostic(id) {
    return this.http.get(`${baseURL}/api/pronostics/` + id);
  }

  createPronostic(pronostic) {
    let body = JSON.stringify(pronostic);
    return this.http.post(`${baseURL}/api/pronostics`, body, HttpOptions);
  }

  updatePronostic(pronostic) {
    let body = JSON.stringify(pronostic);
    return this.http.put(`${baseURL}/api/pronostics/` + pronostic.id, body, HttpOptions);

  }

  deletePronostic(pronostic) {
    return this.http.delete(`${baseURL}/api/pronostics/` + pronostic.id);
  }
}
