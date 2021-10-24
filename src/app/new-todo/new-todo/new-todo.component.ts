import { Component, Inject, OnInit } from '@angular/core';
import { TuiDialogContext, TuiDialogService } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { ToDo } from '../../ToDo';
import { FormControl, FormGroup } from '@angular/forms';
import { TuiDay } from '@taiga-ui/cdk';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css'],
})
export class NewTodoComponent implements OnInit {
  priorityValues: string[] = ['Low', 'Medium', 'High'];

  constructor(
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<ToDo, ToDo>
  ) {}

  ngOnInit(): void {}

  get currentTodo(): ToDo | undefined {
    return this.context.data;
  }

  todoControl = new FormGroup({
    titleControl: new FormControl(this.currentTodo?.title ?? 'Title!'),
    descriptionControl: new FormControl(
      this.currentTodo?.description ?? 'Type your description'
    ),
    priorityControl: new FormControl(this.currentTodo?.priority ?? ''),
    dateControl: new FormControl(
      this.currentTodo?.dueDate ?? new TuiDay(2020, 6, 24)
    ),
  });

  getValuesFromForm() {
    let todoTitle = this.todoControl.get('titleControl')?.value;
    let todoDescription = this.todoControl.get('descriptionControl')?.value;
    let todoPriority = this.todoControl.get('priorityControl')?.value;
    let todoDueDate = this.todoControl.get('dateControl')?.value;

    const isEmpty =
      todoTitle === null ||
      todoDescription === null ||
      todoPriority === null ||
      todoDueDate === null;
    if (isEmpty) return;
    return new ToDo(todoTitle, todoDescription, todoPriority, todoDueDate);
  }

  editTodo() {
    const values = this.getValuesFromForm();
    if (!values) return;
    const { title, description, priority, dueDate } = values;
    this.currentTodo!.title = title;
    this.currentTodo!.description = description;
    this.currentTodo!.priority = priority;
    this.currentTodo!.dueDate = dueDate;
  }

  submit() {
    if (this.currentTodo) {
      this.editTodo();
      this.context.completeWith(this.currentTodo);
    }
    const newTodo = this.getValuesFromForm();
    if (!newTodo) return;
    this.context.completeWith(newTodo);
  }

  cancel() {
    // @ts-ignore
    this.context.completeWith(undefined);
  }
}
