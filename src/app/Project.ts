import {ToDo} from "./ToDo";

export class Project {
  name: string;
  ToDos: ToDo[] = [];

  constructor(name: string) {
    this.name = name;
  }
}
