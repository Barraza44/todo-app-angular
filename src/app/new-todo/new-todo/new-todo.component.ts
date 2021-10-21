import { Component, OnInit, ChangeDetectionStrategy, Inject, TemplateRef } from '@angular/core';
import { TuiDialogContext, TuiDialogService } from "@taiga-ui/core";
import { POLYMORPHEUS_CONTEXT } from "@tinkoff/ng-polymorpheus"
import {ToDo} from "../../ToDo";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {
  todoControl = new FormGroup(
    {
      titleControl: new FormControl("Title!"),
      descriptionControl: new FormControl("Type your description"),
      priorityControl: new FormControl(),
      dateControl: new FormControl()
    }
  )

  priorityValues: string[] = ["Low", "Medium", "High"];


  constructor(
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(POLYMORPHEUS_CONTEXT) private readonly context: TuiDialogContext<ToDo>
  ) { }

  ngOnInit(): void {
  }

  submit() {
    let todoTitle = this.todoControl.get("titleControl")?.value;
    let todoDescription = this.todoControl.get("descriptionControl")?.value;
    let todoPriority = this.todoControl.get("priorityControl")?.value;
    let todoDueDate = this.todoControl.get("dateControl")?.value;

    const isEmpty = todoTitle === null || todoDescription === null || todoPriority === null || todoDueDate === null

    if (!isEmpty) {
      let todo = new ToDo(todoTitle, todoDescription, todoPriority, todoDueDate);
      this.context.completeWith(todo);
    }
  }

  cancel() {
    // @ts-ignore
    this.context.completeWith(undefined)
  }

}
