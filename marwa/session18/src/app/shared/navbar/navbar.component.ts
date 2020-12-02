import { Component, OnInit } from '@angular/core';
import { LoginUser, User } from 'src/app/Models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  errAlert : boolean =false
  passwordStatus = true
  loginModel: LoginUser ={
    type:0,
    email:"",
    password:""
  }
  constructor(private _user:UserService) { }

  ngOnInit(): void {
  }
  LoginSubmit(){
    this._user.login(this.loginModel).subscribe(data=>{
      console.log(data)
      sessionStorage.setItem('token',`${data.token_type} ${data.access_token}`)
    })
  }

}
