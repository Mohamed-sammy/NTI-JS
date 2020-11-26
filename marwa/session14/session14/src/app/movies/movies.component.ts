import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  searchKey
  movies =[
    {name:'movie 1', director: 'director 1'},
    {name:'movie 2', director: 'director 1'},
    {name:'movie 3', director: 'director 1'},
    {name:'movie 22', director: 'director 1'},
    {name:'movie 33', director: 'director 1'},
    {name:'movie 11', director: 'director 1'},
  ]
  //this.searchKey=3
  filteredMovies
  constructor() {
    this.filteredMovies=this.movies
    this.searchKey="a"
    this.searchKey=6
  }

  ngOnInit(): void {
  }

  handelInput(e){
    console.log(e.target.value)
    this.searchKey = e.target.value
    this.filteredMovies = this.movies.filter(movie=>{
      return movie.name.includes(this.searchKey)
    })
  }
}
