import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user.model';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
userModel
errRegister
msg
  constructor( 
    private fb: FormBuilder, 
    private _user:UserService,
    private router: Router
    ) { 
    this.userModel= this.fb.group({
      firstName: ['',[ Validators.required, Validators.maxLength(20)],],
      lastName: [,[ Validators.required, Validators.maxLength(20)],],
      phone: [,[ Validators.required, Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/),],],
      email: [, [ Validators.required, Validators.email],],
      password: [ ,[ Validators.required, Validators.minLength(6) , Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/),],],
      re_password: [,[Validators.required, ]],
      gender:[],
      type:[0]
    })
  }
  // public passwordMatchValidator(control: AbstractControl) {
  //   // debugger;
  //   const password: string = control.get("password").value; // get password from our password form control
  //   const confirmPassword: string = control.get("confirmPassword").value; // get password from our confirmPassword form control
  //   // compare is the password math
  //   if (password !== confirmPassword) {
  //     // if they don't match, set an error in our confirmPassword form control
  //     control.get("confirmPassword").setErrors({ NotMatchPassword: true });
  //     console.log('conf', control.get('confirmPassword'))
  //   }
  // }

  ngOnInit(): void {
  }
  //getters
  get firstName(){
    return this.userModel.get('firstName')
  }
  //Methods
  addUser(){
    let userData:User = this.userModel.value
    console.log(userData)
    this._user.signUp(userData).subscribe(res=>{
      console.log(res)
    if(res.result){
      this.msg = "Registered"
      this.router.navigate(['/'])
    }
    if(res.errors){
      if(typeof(res.errors)=='string') this.errRegister=res.errors
      else this.errRegister= res.errors.re_password
    }
  })}  
}
