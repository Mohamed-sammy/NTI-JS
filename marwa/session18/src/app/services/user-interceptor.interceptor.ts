import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem('token')
    if(token){
    request = request.clone({headers:request.headers.set('Authorization',token)})
    sessionStorage.setItem('userStatus','auth')
  sessionStorage.removeItem(token)  
  }
    else sessionStorage.setItem('userStatus','unauth')
    return next.handle(request);
  }
}
