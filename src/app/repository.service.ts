import { Injectable } from '@angular/core';
import {StorageService} from "@ng-web-apis/storage";
import {ToDo} from "./ToDo";

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private readonly storageService: StorageService) { }

  loadToDos() {
    let todos = this.storageService.getItem("todos");
    if (!todos) return;
    return JSON.parse(todos);
  }

  saveTodos(todos: ToDo[]) {
    let todoArray = JSON.stringify(todos);
    this.storageService.setItem("todos", todoArray);
  }
}
