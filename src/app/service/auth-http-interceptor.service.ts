import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SessionStorageKey} from '../const/session-storage-key';

@Injectable({
  providedIn: 'root'
})
export class AuthHttpInterceptorService implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (sessionStorage.getItem(SessionStorageKey.USERNAME) && sessionStorage.getItem(SessionStorageKey.TOKEN)) {
      console.log('token:' + sessionStorage.getItem(SessionStorageKey.TOKEN));
      req = req.clone({
        headers: req.headers.set('Authorization', sessionStorage.getItem('token'))
      });
    }

    return next.handle(req);
  }

}
