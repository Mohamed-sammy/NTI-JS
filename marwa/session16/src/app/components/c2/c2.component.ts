import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {
  @Input() a:number
  @Output() changeX: EventEmitter<number> = new EventEmitter();
  num =1
  msg : string = null;

  constructor() {
    console.log(this.a)
   }

  ngOnInit(): void {
  }

  isNumber(value){
    if(!value) console.log('bdhbhjd')
    if(Number.isNaN(value)) return false
    else return true
  }
  getResult(){
    //try{
      //if(typeof(this.num)=='string') throw new Error()
      this.a = this.a*this.num
      this.changeX.emit(this.a)
    //   console.log(this.num)
    
    // }catch(e){
    //   this.msg = 'try again'
    // }
  }
  
}
