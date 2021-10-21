import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTodoComponent } from './new-todo/new-todo.component';



@NgModule({
  declarations: [
    NewTodoComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    NewTodoComponent
  ]
})
export class NewTodoModule { }
