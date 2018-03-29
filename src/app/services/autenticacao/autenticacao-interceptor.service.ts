import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';


@Injectable()
export class AutenticacaoInterceptorService implements HttpInterceptor{


  intercept(request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    console.log("INTERCEPTOR");
    
    let currentUser = JSON.parse(localStorage.getItem('currrentUser'));
    if (currentUser && currentUser.token){
      request = request.clone({
        setHeaders:{
          Autorization: 'Bearer' + currentUser.token
        }
      });  
    }
    return next.handle(request);
  }

}
