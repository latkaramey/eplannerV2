import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

   //adminLoggedIn = true;

   loginStatus$ : Observable<boolean>;

   UserName$ : Observable<string>;

  constructor(private authService:AuthService,
    private tokenService:TokenStorageService,
    private router: Router) {

   }



 
  ngOnInit() {
    this.loginStatus$ = this.authService.isLoggedIn;
      
  }


  onLogOut()
  {
    console.log(window.location.host);
    if(confirm("Are you sure to logout")) {
   
      this.tokenService.signOut();
    this.loginStatus$ .subscribe((data)=> {data =false;
      window.location.replace(`http://${window.location.host}/login`);
    });
    }
  
   
    
  }
  

 
  
}
