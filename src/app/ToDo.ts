export class ToDo {
  id: number
  title: string;
  description: string;
  priority: string;
  dueDate: string;

  constructor(title: string, description: string, priority: string, dueDate: string) {
    this.id = 0;
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
  }
}
