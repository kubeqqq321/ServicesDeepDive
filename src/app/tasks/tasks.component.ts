import {Component} from '@angular/core';
import {NewTaskComponent} from './new-task/new-task.component';
import {TasksListComponent} from './tasks-list/tasks-list.component';
import {TaskService} from './task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    NewTaskComponent,
    TasksListComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  // providers: [TaskService]
})
export class TasksComponent {

}
