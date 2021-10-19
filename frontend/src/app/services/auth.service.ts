import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Candidate } from '../models/candidate';
import { ApiBaseService } from './api.base.service';
import { HttpClientService } from './http.client.service';

//const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService  extends ApiBaseService {

  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';

  public loginStatus = new BehaviorSubject<boolean>(this.checkLoginStatus());

  public username: String;
  public password: String;
  public basicAuth:string;
  public role:string;
  //baseUrl = environment.baseUrl;

  public candidate:Candidate;

  public adminloggedIn:boolean = false;
  public userloggedIn:boolean = false;

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor(private httpClientService : HttpClientService,private http : HttpClient){
    super()
}



login(credentials): Observable<any> {
  return this.http.post(this.api.login, {
    username: credentials.username,
    password: credentials.password
  }, httpOptions);
}

register(user): Observable<any> {
  return this.http.post(this.api.signup, {
    username: user.username,
    email: user.email,
    password: user.password,
    role: ['admin']
  }, httpOptions);
}

changeMessage(message: string) {
  this.messageSource.next(message)
}

checkLoginStatus()
{
  return false;
}

isAuth():Observable<any>{
  return  Observable.create(this.adminloggedIn);
}

get isLoggedIn()
{
  return this.loginStatus.asObservable();
}

  // authenticationService(username: String, password: String) {
    

  //   this.http.get<Candidate>(this.api.login, {
  //     headers: { authorization: this.createBasicAuthToken(username, password) }
  // }).subscribe(data => {
  
  //   this.candidate = data;   
  //   this.username = this.candidate.username;
  //   this.basicAuth = this.createBasicAuthToken(username, password);
  //   this.role = this.candidate.userRole;
 
  //   sessionStorage.setItem('username',this.candidate.username);
  //   sessionStorage.setItem('role',this.candidate.userRole);
  //   sessionStorage.setItem('basicAuth',this.basicAuth);
     

  //    if(this.candidate.userRole === 'ROLE_ADMIN')
  //    {
  //     this.adminloggedIn = true;
  //     this.userloggedIn = true;
  //    }
  //    if(this.candidate.userRole === 'ROLE_USER')
  //    {
  //     this.userloggedIn = true;
  //    }
      
  // });

    
  // }

  // createBasicAuthToken(username: String, password: String) {
  //   return 'Basic ' + window.btoa(username + ":" + password)
  // }

  // registerSuccessfulLogin(username, password) {
   
  //   sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username)
  // }

  // isUserLoggedIn() {
  //   let user = sessionStorage.getItem('username')
  //   console.log(!(user === null))
  //   return !(user === null)
  // }

  // logOut() {
  //   sessionStorage.removeItem('username')
  // }

}
