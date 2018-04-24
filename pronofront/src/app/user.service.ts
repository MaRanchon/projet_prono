import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {HttpClientHelper} from "../HttpClientHelper"; // Le fichier où l'url de base est stockée

const HttpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'}) //Sera utilisée par les requetes qui envoient du json
};

const baseURL = HttpClientHelper.baseURL;

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(`${baseURL}/api/users`);
  }

  getUser(id) {
    return this.http.get(`${baseURL}/api/users/` + id);
  }

  deleteUser(user) {
    return this.http.delete(`${baseURL}/api/users/` + user.id);
  }

  createUser(user) {
    let body= JSON.stringify(user);
    return this.http.post(`${baseURL}/api/users`, body, HttpOptions);
  }

  updateUser(user) {
    let body = JSON.stringify(user);
    return this.http.put(`${baseURL}/api/users/` + user.id, body, HttpOptions);
  }
}
