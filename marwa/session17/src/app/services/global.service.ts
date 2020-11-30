import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public globalImages
  constructor(private _http: HttpClient) { }
  //https://jsonplaceholder.typicode.com/posts
  getPosts(){
    return this._http.get(`https://jsonplaceholder.typicode.com/posts`)
  }

  getImages(){
    return this._http.get(`http://backtest.achilleseg.com/api/SiteImage`)
  }
}
