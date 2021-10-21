import {Injectable} from '@angular/core';
import {TuiNotification, TuiNotificationsService} from "@taiga-ui/core";

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(private tuiNotificationsService: TuiNotificationsService) { }

  onTodoCreate(id: number) {
    this.tuiNotificationsService
      .show(`ToDo with id ${id} successfully created!`, {
        label: "ToDo created",
        status: TuiNotification.Success,
        autoClose: true
    }).subscribe()
  }

  //TODO add notifications for loading and deleting
}
