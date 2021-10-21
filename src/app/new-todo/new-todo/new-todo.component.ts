import { Component, OnInit, ChangeDetectionStrategy, Inject, TemplateRef } from '@angular/core';
import { TuiDialogContext, TuiDialogService } from "@taiga-ui/core";
import { POLYMORPHEUS_CONTEXT } from "@tinkoff/ng-polymorpheus"
import {ToDo} from "../../ToDo";
import {isEmpty} from "rxjs/operators";

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {
  title: string = "";
  description: string = "";
  priority: string = "";
  dueDate: string = "";

  isEmpty: boolean = this.title === "" || this.description === "" || this.priority === "" || this.dueDate === "";
  priorityValues: string[] = ["Low", "Medium", "High"];


  constructor(
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(POLYMORPHEUS_CONTEXT) private readonly context: TuiDialogContext<ToDo>
  ) { }

  ngOnInit(): void {
  }

  submit() {
    if (!isEmpty) {
      let todo = new ToDo(this.title, this.description, this.priority, this.dueDate);
      this.context.completeWith(todo);
    }
  }

}
