import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles = [
    {artTitle:"t1", content:'c1'},
    {artTitle:"t2", content:'c1'},
    {artTitle:"t3", content:'c1'},
    {artTitle:"t4", content:'c1'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
