import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthHttpInterceptorService implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
      console.log('token:' + sessionStorage.getItem('token'));
      req = req.clone({
        headers: req.headers.set('Authorization', sessionStorage.getItem('token'))
      });
    }

    return next.handle(req);
  }

}
