import { Component, Inject, OnInit } from '@angular/core';
import { TuiDialogContext, TuiDialogService } from "@taiga-ui/core";
import { POLYMORPHEUS_CONTEXT } from "@tinkoff/ng-polymorpheus";
import {FormControl, FormGroup} from "@angular/forms";
import {Project} from "../../Project";

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  constructor(
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<Project, Project>
  ) { }

  ngOnInit(): void {
  }

  projectControl = new FormGroup({
    titleControl: new FormControl("Type a title")
  });

  getValuesFromForm() {
    let title = this.projectControl.get("titleControl")?.value;
    if (title === null) return;
    return new Project(title, []);
  }

  submit() {
    const newProject = this.getValuesFromForm();
    if (!newProject) return;
    this.context.completeWith(newProject);
  }

  cancel() {
    // @ts-ignore
    this.context.completeWith(undefined);
  }

}
