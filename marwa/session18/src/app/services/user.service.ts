import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { User, LoginUser } from '../Models/user.model';

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
  login(user:LoginUser):Observable<any>{
    return this._http.post(`${this.commonUrl}auth/loginApi`,user)
  }
  //auth/logout_api =>get
  logout(){
    return this._http.get(`${this.commonUrl}auth/logout_api`)
  }
  //auth/me => post => ***
  authMe(){

  }
}
