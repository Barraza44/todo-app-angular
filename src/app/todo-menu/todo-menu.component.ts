import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-menu',
  templateUrl: './todo-menu.component.html',
  styleUrls: ['./todo-menu.component.css']
})
export class TodoMenuComponent implements OnInit {
  isDropdownOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClickEdit() {}

  onClickDelete() {}

}
