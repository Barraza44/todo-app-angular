import {Injectable} from '@angular/core';
import {ToDo} from "./ToDo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() {
  }

  todos: ToDo[] = [
    {
      id: 0,
      title: "Test",
      priority: "High",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras orci leo, imperdiet dignissim lacus sed, elementum posuere elit. Nunc luctus posuere ligula, vitae blandit ante aliquam a. Nunc lobortis tempus aliquet. Etiam pellentesque, elit quis aliquet mattis, leo odio rutrum libero, quis tempor massa ante sit amet massa. ",
      dueDate: "2021-10-20"
    },
    {
      id: 1,
      title: "Test",
      priority: "High",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras orci leo, imperdiet dignissim lacus sed, elementum posuere elit. Nunc luctus posuere ligula, vitae blandit ante aliquam a. Nunc lobortis tempus aliquet. Etiam pellentesque, elit quis aliquet mattis, leo odio rutrum libero, quis tempor massa ante sit amet massa. ",
      dueDate: "2021-10-20"
    },
    {
      id: 2,
      title: "Test",
      priority: "High",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras orci leo, imperdiet dignissim lacus sed, elementum posuere elit. Nunc luctus posuere ligula, vitae blandit ante aliquam a. Nunc lobortis tempus aliquet. Etiam pellentesque, elit quis aliquet mattis, leo odio rutrum libero, quis tempor massa ante sit amet massa. ",
      dueDate: "2021-10-20"
    },
    {
      id: 3,
      title: "Test",
      priority: "High",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras orci leo, imperdiet dignissim lacus sed, elementum posuere elit. Nunc luctus posuere ligula, vitae blandit ante aliquam a. Nunc lobortis tempus aliquet. Etiam pellentesque, elit quis aliquet mattis, leo odio rutrum libero, quis tempor massa ante sit amet massa. ",
      dueDate: "2021-10-20"
    },
    {
      id: 4,
      title: "Test",
      priority: "High",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras orci leo, imperdiet dignissim lacus sed, elementum posuere elit. Nunc luctus posuere ligula, vitae blandit ante aliquam a. Nunc lobortis tempus aliquet. Etiam pellentesque, elit quis aliquet mattis, leo odio rutrum libero, quis tempor massa ante sit amet massa. ",
      dueDate: "2021-10-20"
    }];

  getTodos(): ToDo[] {
    return this.todos;
  }
}
