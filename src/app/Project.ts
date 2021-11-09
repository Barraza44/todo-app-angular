import {ToDo} from "./ToDo";

export class Project {
  name: string;
  ToDos: ToDo[];

  constructor(name: string, todos: ToDo[]) {
    this.name = name;
    this.ToDos = todos;
  }
}
