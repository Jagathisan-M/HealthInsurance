import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ConfigurationService}  from "../Config/configuration.service"

@Injectable({
  providedIn: 'root'
})
export class InterceptorMiddleWareService implements HttpInterceptor {

  BaseUrl : string = "https://localhost:7225/";

  constructor(private config : ConfigurationService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let modifiedReq = req.clone({
        url : this.BaseUrl + req.url,
        setHeaders : {
          "Authorization" : "Bearer"+ this.config.userToken
        }
    });

    return next.handle(modifiedReq)
  }
}
