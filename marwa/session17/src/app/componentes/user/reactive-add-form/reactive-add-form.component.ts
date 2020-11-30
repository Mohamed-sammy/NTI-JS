import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Country } from 'src/app/Models/country';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-reactive-add-form',
  templateUrl: './reactive-add-form.component.html',
  styleUrls: ['./reactive-add-form.component.css']
})
export class ReactiveAddFormComponent implements OnInit {
  countries: Country []= [
    {countryId:1, countryName:'Egypt'},
    {countryId:2, countryName:'USA'},
    {countryId:3, countryName:'Canda'},
    {countryId:4, countryName:'India'},
    {countryId:5, countryName:'Germany'}
  ];
  user: User
  addForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl(),
    gender: new FormControl(),
    martialStatus: new FormControl(),
    country: new FormControl(),
    address: new FormGroup({
      government:new FormControl(),
      street: new FormControl(),
      buildingNum:new FormControl()
    }),
    phone:new FormControl(),
    dob: new FormControl()
  })
  constructor() { }

  ngOnInit(): void {
  }
  onFormSubmit(){
console.log(this.addForm.value)
  }
}
