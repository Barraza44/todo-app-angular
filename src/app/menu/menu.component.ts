import {Component, Inject, Injector, OnInit} from '@angular/core';
import { ProjectService } from "../project.service";
import { TuiDialogService } from "@taiga-ui/core";
import {Project} from "../Project";
import {PolymorpheusComponent} from "@tinkoff/ng-polymorpheus";
import {NewProjectComponent} from "../new-project/new-project/new-project.component";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    @Inject(ProjectService) private readonly projectService: ProjectService,
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector
  ) { }

  projectList = this.projectService.getProjectList();
  private readonly dialog = this.dialogService.open<Project>(
    new PolymorpheusComponent(NewProjectComponent, this.injector),
    {
      dismissible: true,
      label: "Create a project!",
    }
  )

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
          onClick: () => this.showCreateProjectDialog(),
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

  showCreateProjectDialog() {
    this.dialog.subscribe({
      next: (data) => {
        this.projectService.setCurrentProject(this.projectService.addProject(data));
      },
      complete: () => {
        console.info("Closed!")
      }
    })
  }

}
