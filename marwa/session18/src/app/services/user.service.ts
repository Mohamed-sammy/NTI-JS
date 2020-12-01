import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { User } from '../Models/user.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  commonUrl= `http://backtest.achilleseg.com/api/`;
  constructor(private _http:HttpClient) { }
  //sign up new user
  signUp(userData:User):Observable<any>{
    return this._http.post(`${this.commonUrl}auth/signup`, userData)
  }
  //auth/loginApi =>post
  login(){
    
  }
  //auth/logout_api =>get
  logout(){

  }
  //auth/me => post => ***
  authMe(){

  }
}
