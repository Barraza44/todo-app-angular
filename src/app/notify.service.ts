import { Injectable } from '@angular/core';
import { TuiNotification, TuiNotificationsService } from '@taiga-ui/core';

@Injectable({
  providedIn: 'root',
})
export class NotifyService {
  constructor(private tuiNotificationsService: TuiNotificationsService) {}

  onTodoCreate(id: number) {
    this.tuiNotificationsService
      .show(`ToDo with id ${id} successfully created!`, {
        label: 'ToDo created',
        status: TuiNotification.Success,
        autoClose: true,
      })
      .subscribe();
  }

  onTodoDelete(id: number) {
    this.tuiNotificationsService
      .show(`ToDo with id ${id} successfully deleted`, {
        label: 'ToDo deleted',
        status: TuiNotification.Success,
        autoClose: true,
      })
      .subscribe();
  }

  onProjectCreate(name: string) {
    this.tuiNotificationsService.show(`Project ${name} successfully created`, {
      label: 'Project created',
      status: TuiNotification.Success,
      autoClose: true,
    })
      .subscribe();
  }

  onProjectChange(name: string) {
    this.tuiNotificationsService.show(`Switched to project: ${name}`, {
      label: 'Project switched',
      status: TuiNotification.Info,
      autoClose: true,
    })
      .subscribe();
  }
}
