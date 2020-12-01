import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-data-handel',
  templateUrl: './data-handel.component.html',
  styleUrls: ['./data-handel.component.css']
})
export class DataHandelComponent implements OnInit {

  posts
  images
  img1=[]
  img2=[]
  img3=[]
  constructor(public gSer:GlobalService) {
    this.gSer.getPosts().subscribe(
      data=>{
    //  console.log(data)
      this.posts=data
    }
    ,
    ()=>{
      //if error 
      
    },
    ()=>{
      //next
      console.log(this.posts)
    })
    this.gSer.getImages().subscribe(data=>{
      console.log(data)
gSer.globalImages=data
      this.images=data
    },()=>{

    },()=>{
    // this.images.forEach(img => {
    //   if(img.type=='menu') this.img1.push(img)
    //   else if(img.type=='shop') this.img2.push(img)
    //   else this.img3.push(img)
    // });
    this.img1 = this.images.filter(img=>{
      return img.type=='menu'
    })
    })
   }

  ngOnInit(): void {
  }

}
