import {Component} from '@angular/core';
import {ProjectService} from "./project.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-app';

  constructor(private _projectService: ProjectService) {
  }

}
