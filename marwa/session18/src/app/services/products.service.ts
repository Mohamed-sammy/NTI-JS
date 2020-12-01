import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
defaultUrl = "https://backtest.achilleseg.com/api/"
public imgUrl ="https://backtest.achilleseg.com/"
constructor(private _http:HttpClient) { }
//get product
getProducts():Observable<any>{
  //ProductsUpdated?lang_id=1&page=0&limit=12
  return this._http.get(`${this.defaultUrl}ProductsUpdated?lang_id=1&page=0&limit=12`)
}

//get single
getSingle(id):Observable<any>{
  return this._http.get(`${this.defaultUrl}ProductsUpdated?lang_id=1&page=0&limit=12&product_id=${id}`)
 
}
}
