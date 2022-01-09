import { Injectable } from '@angular/core';
import { Project } from './Project';
import { ToDo } from './ToDo';
import { RepositoryService } from './repository.service';
import {NotifyService} from "./notify.service";

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  public projectList: Project[] = this.loadProjectList() ?? this.initProjectList();
  public currentProject: Project = this.initDefaultProject() ?? this.addProject(new Project("Default", []));

  constructor(private repositoryService: RepositoryService, private notificationService: NotifyService) {}

  public addProject(project: Project) {
    this.projectList.push(project);
    this.repositoryService.saveProjectList(this.projectList);
    this.notificationService.onProjectCreate(project.name);
    return project;
  }

  public setCurrentProject(project: Project) {
    this.currentProject = project;
    this.notificationService.onProjectChange(project.name);
  }

  public getProjectTodos() {
    return this.currentProject.ToDos;
  }

  public setProjectTodos(Todo: ToDo[]) {
    // @ts-ignore
    this.currentProject.ToDos = [...Todo];
    this.saveTodos();
  }

  public saveTodos() {
    // @ts-ignore
    this.repositoryService.saveTodos(
      this.currentProject.ToDos,
      this.currentProject.name
    );
    this.repositoryService.saveProjectList(this.projectList);
  }

  private loadProjectList() {
    return this.repositoryService.loadProjectList();
  }

  private initProjectList() {
    this.repositoryService.saveProjectList([]);
    return [];
  }

  public initDefaultProject() {
    return this.projectList.find((p) => p.name === 'Default');
  }

  public getProjectList() {
    return this.projectList;
  }
}
