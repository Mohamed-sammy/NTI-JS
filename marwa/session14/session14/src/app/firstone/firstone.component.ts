import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstone',
  templateUrl: './firstone.component.html',
  styleUrls: ['./firstone.component.css']
})
export class FirstoneComponent implements OnInit {
  name :string = 'marwa'
  ifDisabled : boolean = false
  bindName :string ='<h3>Interpolletion</h3>'
  cols = 2
  col ='green'
  cl = 'a'
  x = [1,2,3]
  data = "hello there"
  clickCount = 0
  constructor() { }

  ngOnInit(): void {
  }

  getStatus(){
    return false;
  }
  clickHandel(){
    this.data="this para is clicked"
   this.ifDisabled = !this.ifDisabled
  }
  addNewClick(){this.clickCount++}
}
