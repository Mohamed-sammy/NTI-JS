import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent implements OnInit {
  @Input() product: any
  constructor(public _pro:ProductsService) { }

  ngOnInit(): void {
  }

  handelPrice(p){
    if(p.flash_price!=null) return p.flash_price
    else if (p.discount_price!=0) return p.discount_price
    else return (p.products_price*((100-p.product_price_discount)/100))
  }
  addToCart(id){
    let cart = JSON.parse(sessionStorage.getItem('cart')) || []
    let cartItem={product_id:id, quantity:1}
    cart.push(cartItem)
    sessionStorage.setItem('cart', JSON.stringify(cart))
  }
  addToWish(id){
    let wish = JSON.parse(sessionStorage.getItem('wish')) || []
    let wishItem={product_id:id, quantity:1}
    wish.push(wishItem)
    sessionStorage.setItem('wish', JSON.stringify(wish))
  }
}
