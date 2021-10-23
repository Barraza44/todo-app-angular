import { Injectable } from '@angular/core';
import {StorageService} from "@ng-web-apis/storage";
import {ToDo, TodoString} from "./ToDo";
import {TuiDay} from "@taiga-ui/cdk";

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private readonly storageService: StorageService) { }

  loadToDos(): ToDo[] | undefined {
    let todos = this.storageService.getItem("todos");
    if (!todos) return;
    let items = JSON.parse(todos)
    return items.map((i: TodoString) => new ToDo(i.title, i.description, i.priority, TuiDay.jsonParse(i.dueDate)));
  }

  saveTodos(todos: ToDo[]) {
    let todoArray = JSON.stringify(todos);
    console.log(todoArray)
    this.storageService.setItem("todos", todoArray);
  }
}
