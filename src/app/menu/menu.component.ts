import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../project.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  projectList = this.projectService.getProjectList();

  readonly groups = [
    {
      label: `Projects`,
      items:
        this.projectList.map(p =>
        {
          return {label: `${p.name}`, onClick: () => this.projectService.setCurrentProject(p)}
        }),
    },
    {
      label: '',
      items: [
        {
          label: `Add a project`,
          onClick: () => "Hello World",
        },
      ],
    },
    {
      label: "Settings",
      items: [
        {
          label: "Change theme",
          onClick: () => ""
        }
      ]
    }
  ];

  ngOnInit(): void {
  }

}
