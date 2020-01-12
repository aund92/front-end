import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {SessionStorageKey} from '../const/session-storage-key';
import {environment} from '../../environments/environment';

export class User {
  constructor(
    public status: string,
  ) {
  }

}

export class JwtResponse {
  constructor(
    public jwttoken: string,
  ) {
  }

}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.baseBackEndUrl + '/authenticate';

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
  }

  authenticate(username, password) {
    return this.httpClient.post<any>(`${this.baseUrl}`, {username, password});
  }

  createUser(username, password) {
    return this.httpClient.post<any>(environment.baseBackEndUrl + '/register', {username, password});
  }

  isUserLoggerIn() {
    const user = sessionStorage.getItem('username');
    return user !== null;
  }

  logOut() {
    sessionStorage.removeItem('username');
  }
}
