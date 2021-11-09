import { Injectable } from '@angular/core';
import { StorageService } from '@ng-web-apis/storage';
import { ToDo, TodoString } from './ToDo';
import { TuiDay } from '@taiga-ui/cdk';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  constructor(private readonly storageService: StorageService) {}

  loadToDos(projectName: string): ToDo[] | undefined {
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
}
