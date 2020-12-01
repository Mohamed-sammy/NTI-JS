import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css']
})
export class SingleproductComponent implements OnInit {
product:any
  constructor( private route:ActivatedRoute, public _pro:ProductsService) { 
    this.getSingle(this.route.snapshot.params['id'])
  }

  ngOnInit(): void {
  }

  getSingle(id){
    this._pro.getSingle(id).subscribe(data=>{
      this.product= data.result.product_data
      console.log(data.result.product_data)
    })
  }

}
