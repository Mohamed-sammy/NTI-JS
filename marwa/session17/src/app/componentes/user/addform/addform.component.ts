import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/Models/country';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent implements OnInit {
  countries: Country []= [
    {countryId:1, countryName:'Egypt'},
    {countryId:2, countryName:'USA'},
    {countryId:3, countryName:'Canda'},
    {countryId:4, countryName:'India'},
    {countryId:5, countryName:'Germany'}
  ];
  user: User
  constructor() { }

  ngOnInit(): void {
  }
  onAddUser(user:User){
    console.log(user)

  }
  resetme(user){
    user.resetForm()
  }
}
