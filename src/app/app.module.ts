import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  TuiRootModule,
  TuiDialogModule,
  TuiNotificationsModule,
  TUI_SANITIZER,
  TuiGroupModule,
  TuiButtonModule, TuiTooltipModule, TuiHintModule, TuiHostedDropdownModule, TuiDataListModule
} from "@taiga-ui/core";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppViewComponent } from './app-view/app-view.component';
import {TuiIslandModule, TuiTagModule} from "@taiga-ui/kit";
import { NavigationComponent } from './navigation/navigation.component';
import {NewTodoModule} from "./new-todo/new-todo.module";
import { TodoMenuComponent } from './todo-menu/todo-menu.component';
import {TuiActiveZoneModule} from "@taiga-ui/cdk";


@NgModule({
  declarations: [
    AppComponent,
    AppViewComponent,
    NavigationComponent,
    TodoMenuComponent,
  ],
  imports: [
    BrowserModule,
    TuiRootModule,
    BrowserAnimationsModule,
    TuiDialogModule,
    TuiNotificationsModule,
    TuiGroupModule,
    TuiButtonModule,
    TuiIslandModule,
    TuiTooltipModule,
    TuiHintModule,
    TuiTagModule,
    NewTodoModule,
    TuiHostedDropdownModule,
    TuiDataListModule,
    TuiActiveZoneModule
  ],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
