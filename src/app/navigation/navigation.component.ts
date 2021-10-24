import { Component, Inject, Injector, OnInit } from '@angular/core';
import { TuiDialogService } from '@taiga-ui/core';
import { TodoService } from '../todo.service';
import { ToDo } from '../ToDo';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { NewTodoComponent } from '../new-todo/new-todo/new-todo.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  private readonly dialog = this.dialogService.open<ToDo>(
    new PolymorpheusComponent(NewTodoComponent, this.injector),
    {
      dismissible: true,
      label: 'Create a Todo',
    }
  );

  constructor(
    @Inject(TodoService) private readonly todoService: TodoService,
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector
  ) {}

  showDialog() {
    this.dialog.subscribe({
      next: (data) => {
        this.todoService.addTodo(data);
      },
      complete: () => {
        console.info('Closed!');
      },
    });
  }

  ngOnInit(): void {}
}
