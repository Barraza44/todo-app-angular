import {TuiDay} from "@taiga-ui/cdk";

export class ToDo {
  id: number
  title: string;
  description: string;
  priority: string;
  dueDate: TuiDay;

  constructor(title: string, description: string, priority: string, dueDate: TuiDay) {
    this.id = 0;
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
  }
}
