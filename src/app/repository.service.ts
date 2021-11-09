import { Injectable } from '@angular/core';
import { StorageService } from '@ng-web-apis/storage';
import { ToDo, TodoString } from './ToDo';
import { TuiDay } from '@taiga-ui/cdk';
import {Project} from "./Project";

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  constructor(private readonly storageService: StorageService) {}

  loadToDos(projectName: string) {
    let todos = this.storageService.getItem(projectName);
    if (!todos) return;
    let items = JSON.parse(todos);
    return items.map(
      (i: TodoString) =>
        new ToDo(
          i.title,
          i.description,
          i.priority,
          TuiDay.jsonParse(i.dueDate)
        )
    );
  }

  saveTodos(todos: ToDo[], projectName: string) {
    let todoArray = JSON.stringify(todos);
    this.storageService.setItem(projectName, todoArray);
  }

  loadProjectList() {
    let projects = this.storageService.getItem("projects");
    if (!projects) return;
    return JSON.parse(projects);
  }

  saveProjectList(projects: Project[]) {
    let projectArray = JSON.stringify(projects);
    this.storageService.setItem("projects", projectArray);
  }
}
