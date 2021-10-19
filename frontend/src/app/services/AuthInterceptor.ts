import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { TokenStorageService } from './token-storage.service';



const TOKEN_HEADER_KEY = 'Authorization';



@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private token: TokenStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authReq = req;
    const token = this.token.getToken();
    if (token != null) {
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
    }
    return next.handle(authReq);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];

  // constructor(private authService:AuthService) { }

  // intercept(req: HttpRequest<any>, next: HttpHandler) {
  //   if (this.authService.username && this.authService.basicAuth) {
  
  //     req = req.clone({
  //       setHeaders: {
  //         Authorization:this.authService.basicAuth
  //       }
  //     })
  //   }

  //   return next.handle(req);

  // }
