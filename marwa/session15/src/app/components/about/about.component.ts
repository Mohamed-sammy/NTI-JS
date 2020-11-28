import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  monNum=5
  months =[
    {monthNum:1, monthName:'jan'},
    {monthNum:2, monthName:'feb'},
    {monthNum:3, monthName:'mar'},
    {monthNum:4, monthName:'apr'},
  ]
  monthNum:number
  constructor() { }

  ngOnInit(): void {
  }

}
