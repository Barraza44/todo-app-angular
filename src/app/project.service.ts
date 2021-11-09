import { Injectable } from '@angular/core';
import {Project} from "./Project";
import {ToDo} from "./ToDo";
import {RepositoryService} from "./repository.service";

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  public projectList: Project[] = [];
  public currentProject: Project | undefined;

  constructor(private repositoryService: RepositoryService) {}

  public addProject(project: Project) {
    this.projectList.push(project);
  }

  public setCurrentProject(project: Project) {
    this.currentProject = project;
  }

  public getProjectTodos() {
    return this.currentProject?.ToDos;
  }

  public setProjectTodos(Todo: ToDo[]) {
    // @ts-ignore
    this.currentProject.ToDos = [...Todo];
  }

  public saveTodos() {
    // @ts-ignore
    this.repositoryService.saveTodos(this.currentProject?.ToDos, this.currentProject?.name)
  }
}
