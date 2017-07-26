import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor() { }

  todos;
  text;
  ngOnInit() {
    this.todos = [
      {
        text:'todo 01'
      },
      {
        text:'todo 02'
      },
      {
        text:'todo 03'
      }
    ]
  }

  addTodo(){
    this.todos.push({
      text: this.text
    });
  }

}
