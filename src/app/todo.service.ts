import {Injectable} from '@angular/core';
import { NotifyService } from "./notify.service";
import {ToDo} from "./ToDo";
import {StorageService} from "@ng-web-apis/storage";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private notifyService: NotifyService,
    private storageService: StorageService
  ) {}

  todos: ToDo[] = this.loadToDos() ?? [];

  getTodos(): ToDo[] {
    return this.todos;
  }

  getTodoById(id: number): ToDo | undefined {
    let found = this.todos.find(t => t.id === id);
    if (!found) return;
    return found;
  }

  addTodo(todo: ToDo) {
    if(todo === undefined) return;
    this.todos.push(todo);
    todo.id = this.todos.length === 0 ? 1 : this.todos.length;
    this.notifyService.onTodoCreate(todo.id);
    this.saveToDos();
  }

  deleteTodo(ToDo: ToDo) {
    let filtered = this.todos.filter(todo => todo.id !== ToDo.id)
    this.todos = filtered;
    this.saveToDos();
    return filtered
  }

  //Loads ToDos from local storage
  loadToDos() {
    let todos = this.storageService.getItem("todos");
    if (!todos) return;
    return JSON.parse(todos)
  }

  //Save ToDos to local storage
  saveToDos() {
    let todos = JSON.stringify(this.todos);
    this.storageService.setItem("todos", todos);
  }
}
