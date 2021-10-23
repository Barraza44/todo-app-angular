import {Component, OnInit, Input, Injector, Inject} from '@angular/core';
import {TuiDialogContext, TuiDialogService} from "@taiga-ui/core";
import {PolymorpheusComponent, PolymorpheusContent} from "@tinkoff/ng-polymorpheus";
import {ToDo} from "../ToDo";
import {NewTodoComponent} from "../new-todo/new-todo/new-todo.component";
import {Observable} from "rxjs";

@Component({
  selector: 'app-todo-menu',
  templateUrl: './todo-menu.component.html',
  styleUrls: ['./todo-menu.component.css']
})
export class TodoMenuComponent implements OnInit {
  isDropdownOpen = false;

  @Input() todo!: ToDo;
  @Input() deleteTodo!: (todo: ToDo) => void;
  @Input() editTodo!: (todo: ToDo) => void;

  constructor(
    private readonly tuiDialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector
    ) { }


  // @ts-ignore
  private editDialog: Observable<ToDo>;

  ngOnInit(): void {
    console.log(this.todo)
    this.editDialog = this.tuiDialogService.open<ToDo>(
      new PolymorpheusComponent(NewTodoComponent, this.injector),
      {
        data: this.todo,
        dismissible: true,
        label: "Create a Todo"
      }
    );
  }

  //Opens delete dialog, if the todoItem is deleted runs onClickDelete
  showDeleteDialog(content: PolymorpheusContent<TuiDialogContext>) {
    this.tuiDialogService.open(content).subscribe();
  }

  showEditDialog() {
    this.editDialog.subscribe({
      next: data => {
        console.log(data)
        this.editTodo(data);
      },
      complete: () => {
        console.info("Closed")
      }
    })
  }

  onClickDelete(observer: any) {
    this.deleteTodo(this.todo)
    observer.complete();
  }

}
