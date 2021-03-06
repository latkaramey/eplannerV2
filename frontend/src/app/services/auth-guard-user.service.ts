import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';



@Injectable({
    providedIn: 'root'
  })
  export class AuthGuardUser  implements  CanActivate{


    constructor(private authService:AuthService,private router:Router)
    {

    }

      canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):
      Observable<boolean>|Promise<boolean>|boolean
      {
             if (this.authService.userloggedIn)
             {
                    return true;
             }
             else{
                return false;
             }

      }

  }