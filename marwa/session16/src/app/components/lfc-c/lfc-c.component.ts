import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lfc-c',
  templateUrl: './lfc-c.component.html',
  styleUrls: ['./lfc-c.component.css']
})
export class LfcCComponent implements OnInit {
@Input() x:any
  constructor() { 
    console.log('constructor', this.x)
  }

  ngOnInit(): void {
    console.log('ngoninit', this.x)
  }
  ngOnChanges(){console.log('ngOnChanges')}
  ngDoCheck(){console.log('ngDoCheck', this.x)}
  ngAfterContentInit(){console.log('ngAfterContentInit', this.x)}
  ngAfterContentChecked(){console.log('ngAfterContentChecked', this.x)}
  ngAfterViewInit(){console.log('ngAfterViewInit', this.x)}
  ngAfterViewChecked(){console.log('ngAfterViewChecked', this.x)}
  ngOnDestroy(){console.log('ngOnDestroy', this.x)}
addnew(){
  this.x.push({'a':7})
}
}
