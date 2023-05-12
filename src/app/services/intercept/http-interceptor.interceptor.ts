import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.url== 'https://dev16.leasetrader.com/Logval'){
      let addheaders= request.clone({
        headers: new HttpHeaders({
          'Content-Type':  'application/x-www-form-urlencoded',
          'access-control-allow-origin':'*',
          'access-control-allow-methods': "DELETE, POST, GET, OPTIONS",
          'Access-Control-Allow-Headers': "Content-Type, Authorization, X-Requested-With,Origin,Accept",
          'Access-Control-Allow-Origin': '*'
        })
      })
      return next.handle(addheaders);
    } else {
      let addheaders= request.clone({
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Access-Control-Allow-Origin':'*',
  
        })
      })
      return next.handle(addheaders);
    }
    // console.log('addheaders',addheaders)
   
  }
}
