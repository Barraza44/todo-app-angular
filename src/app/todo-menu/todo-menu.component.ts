import { Component, OnInit, Input } from '@angular/core';
import {TuiDialogContext, TuiDialogService} from "@taiga-ui/core";
import {PolymorpheusContent} from "@tinkoff/ng-polymorpheus";
import {ToDo} from "../ToDo";

@Component({
  selector: 'app-todo-menu',
  templateUrl: './todo-menu.component.html',
  styleUrls: ['./todo-menu.component.css']
})
export class TodoMenuComponent implements OnInit {
  isDropdownOpen = false;

  @Input() todo!: ToDo;
  @Input() deleteTodo!: (todo: ToDo) => void;

  constructor(
    private readonly tuiDialogService: TuiDialogService,

  ) { }

  ngOnInit(): void {
  }

  showDeleteDialog(content: PolymorpheusContent<TuiDialogContext>) {
    this.tuiDialogService.open(content).subscribe();
  }

  onClickEdit() {}

  onClickDelete(observer: any) {
    this.deleteTodo(this.todo)
    observer.complete();
  }

}
