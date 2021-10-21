import {Injectable} from '@angular/core';
import {ToDo} from "./ToDo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() {
  }

  todos: ToDo[] = [];

  getTodos(): ToDo[] {
    return this.todos;
  }


  addTodo(todo: ToDo) {
    if(todo === undefined) return;
    this.todos.push(todo);
    todo.id = this.todos.length === 0 ? 1 : this.todos.length;
    console.log(this.todos)
  }
}
