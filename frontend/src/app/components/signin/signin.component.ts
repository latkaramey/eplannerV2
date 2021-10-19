import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { IpServiceService } from 'src/app/services/ip-service.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService,
     private tokenStorage: TokenStorageService,
     private router: Router
     ) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      const exactRole = this.roles[0];
      if (exactRole === 'ROLE_ADMIN') {
        this.authService.adminloggedIn = true;
        this.authService.userloggedIn = true;
        console.log(`coming inside if conditio ${exactRole}`);
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
            this.router.navigate(['/charts/view']));
        
         // this.router.navigate(['/charts/view'])
        }
       else if (exactRole === 'ROLE_USER') {
          this.authService.userloggedIn = true;
          this.router.navigate(['/operator'])
        }
        else{
          this.router.navigate(['/home'])
        }

    }
  }

  onSubmit() {
    this.authService.login(this.form).subscribe(
      data => {
        this.authService.loginStatus.next(true);
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
       // this.reloadPage();

       console.log("printing role=>",this.roles[0])

       const exactRole = this.roles[0];
       console.log(typeof(exactRole));
        if (exactRole === 'ROLE_ADMIN') {
              this.authService.adminloggedIn = true;
              this.authService.userloggedIn = true;
             
              console.log(`coming inside if conditio ${exactRole}`);
              
                //this.router.navigate(['/plan'])
            //    this.router.navigate(['/charts/view'])
            this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
            this.router.navigate(['/charts/view']));
              }
             else if (exactRole === 'ROLE_USER') {
                this.authService.userloggedIn = true;
                this.router.navigate(['/operator/update'])
              
              }
              else{
                this.router.navigate(['/home'])
              }



      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  // reloadPage() {
  //   window.location.reload();
  // }


}
