import { Component } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  inputTodo: string = "";

  todos: Todo[] = [
    {
      content: 'eat a banana',
      completed: false,
    },
    {
      content: 'take the dog out',
      completed: false,
    }
  ]

  toggleDone(id:number) {
    this.todos.map((v,i) => {
      if(i == id) v.completed = !v.completed;

      return v;
    })
  }

  deleteTodo(id:number) {
    this.todos = this.todos.filter((v,i) => i !==id);
  }

  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
    })
    this.inputTodo = "";
  }
}
