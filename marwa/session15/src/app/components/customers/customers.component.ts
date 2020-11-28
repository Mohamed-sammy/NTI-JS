import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.interface'
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [
    {name:'c1', balance:1000, phone:'011111111',address:'giza'},
    {name:'c2', balance:1000, phone:'011111111',address:'giza'},
    {name:'c3', balance:1000, phone:'011111111',address:'giza'},
    {name:'c4', balance:1000, phone:'011111111',address:'giza'},
    {name:'c5', balance:1000, phone:'011111111',address:'giza'}
  ]
  
  constructor() { }

  ngOnInit(): void {
  }
  addCustomer($e){
    let name: Customer = {name:$e.target.value, balance:0,phone:'1',address:'giza'}
    this.customers.push(name)
    $e.target.value=''
  }
  trackFun(index,item){
    return item.name
  }
}
