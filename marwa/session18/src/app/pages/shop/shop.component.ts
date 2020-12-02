import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor( private _product:ProductsService, private route:ActivatedRoute) {
    this.getAllProducts()
   }

  ngOnInit(): void {
console.log(this.route.queryParams.subscribe(p=>console.log(p['id'])))
// console.log(this.route.queryParams['id']
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
