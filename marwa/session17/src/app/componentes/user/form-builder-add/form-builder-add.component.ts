import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Country } from 'src/app/Models/country';

@Component({
  selector: 'app-form-builder-add',
  templateUrl: './form-builder-add.component.html',
  styleUrls: ['./form-builder-add.component.css']
})
export class FormBuilderAddComponent implements OnInit {
  addFbuilder
  countries: Country []= [
    {countryId:1, countryName:'Egypt'},
    {countryId:2, countryName:'USA'},
    {countryId:3, countryName:'Canda'},
    {countryId:4, countryName:'India'},
    {countryId:5, countryName:'Germany'}
  ];

  constructor(private fb: FormBuilder) { 
  this.addFbuilder = this.fb.group({
    name:[,[Validators.required, Validators.minLength(6)]],
    email: ['',[Validators.email]],
    gender: ['',[Validators.required]],
    martialStatus: [''],
    country: [],
    address: this.fb.group({
      government:[''],
      street: [''],
      buildingNum:['']
    }),
    phone:['',[Validators.minLength(11),Validators.maxLength(11)]],
    dob: ['']
 
  })
  } 
get phone(){
  return this.addFbuilder.get('phone')
}
get name(){
  return this.addFbuilder.get('name')
}
  ngOnInit(): void {
    console.log(this.phone)
  }
  onFormSubmit(){
    console.log(this.addFbuilder.value)
  }
}
