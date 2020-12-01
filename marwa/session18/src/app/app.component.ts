import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'session18';
  // o =new Observable((observer)=>{
  //   setTimeout(()=>{observer.next('a')},1000)
  //   setTimeout(()=>{observer.next('b')},2000)
  //   setTimeout(()=>{observer.error('hi from error')},3000)
  //   setTimeout(()=>{observer.next('d')},4000)
  //   setTimeout(()=>{observer.next('e')},5000)
  // })
  // ngOnInit(){
  //   this.o.subscribe( 
  //     single => console.log(single),
  //     err    =>  console.log(err),
  //     ()    => console.log('done')

  //     )
      
  // }


}
