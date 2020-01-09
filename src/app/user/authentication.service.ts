import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

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
export class AuthenticationService {
  private baseUrl = 'http://localhost:8080/springboot-crud-rest/authenticate';

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
  }

  authenticate(username, password) {
    return this.httpClient.post<any>(`${this.baseUrl}`, {username, password})
      .subscribe(
        data => {
          console.log(data);
          sessionStorage.setItem('username', username);
          sessionStorage.setItem('token', 'Bearer ' + data.token);
        }, error => console.log(error)
      );
  }

  isUserLoggerIn() {
    const user = sessionStorage.getItem('username');
    return user !== null;
  }

  logOut() {
    sessionStorage.removeItem('username');
  }
}
