import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { ToDo } from '../ToDo';

@Component({
  selector: 'app-app-view',
  templateUrl: './app-view.component.html',
  styleUrls: ['./app-view.component.less'],
})
export class AppViewComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  todos: ToDo[] = [];

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todos = this.todoService.getTodos();
  }

  getTodoById(id: number) {
    return this.todoService.getTodoById(id);
  }

  deleteTodo = (todo: ToDo): void => {
    if (!todo) return;
    this.todos = this.todoService.deleteTodo(todo);
  };

  editTodo = (todo: ToDo): void => {
    if (!todo) return;
    this.todos = this.todoService.editTodo(todo);
  };
}
