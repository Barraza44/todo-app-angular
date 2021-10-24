import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTodoComponent } from './new-todo/new-todo.component';
import {
  TuiDataListWrapperModule,
  TuiInputDateModule,
  TuiInputModule,
  TuiSelectModule,
  TuiTextAreaModule,
  TuiUnfinishedValidatorModule,
} from '@taiga-ui/kit';
import {
  TuiButtonModule,
  TuiDataListModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewTodoComponent],
  imports: [
    CommonModule,
    FormsModule,
    TuiButtonModule,
    TuiSelectModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    TuiTextAreaModule,
    TuiInputDateModule,
    TuiUnfinishedValidatorModule,
    ReactiveFormsModule,
  ],
  exports: [NewTodoComponent],
})
export class NewTodoModule {}
