import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
allProducts =[]
isload:boolean = true
err=null
  constructor( private _product:ProductsService) {
    this.getAllProducts()
   }

  ngOnInit(): void {
  }

  getAllProducts(){
    this._product.getProducts().subscribe(data=>{
      console.log(data)
      this.allProducts=data.result.product_data
    },
    (err)=>{
      this.err="an error accured"
    },
    ()=>{
      this.isload=false
    }
    
    )
  }

}
