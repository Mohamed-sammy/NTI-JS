import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
  x :number= 5
  num:number = 1
msg:string=null
  constructor() { }

  ngOnInit(): void {
  }
  changemyData(event){
    this.x=event
  }
}
