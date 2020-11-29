import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos = []
  title=""
  content=""
  status=false
  constructor() { }

  ngOnInit(): void {
  }
  handelFormSubmit(add){
    console.log(add.value)
    this.todos.push(add.value)
    console.log(this.todos)
  }
  deleteTask(ind){
    this.todos.splice(ind,1)
  }
  loc=0
  editTask(ind){
    this.loc=ind
    this.title = this.todos[ind].title
    this.content = this.todos[ind].content
    this.status=true
  }

  handelFormEdit(edit,ind){
    this.todos[ind] = edit.value
    this.status = false
  }
}
