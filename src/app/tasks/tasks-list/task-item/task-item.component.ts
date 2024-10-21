import {Component, computed, inject, input, Input, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Task, TASK_STATUS_OPTIONS, TaskStatus, taskStatusOptionsProvider} from '../../task.model';
import {TaskService} from '../../task.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
  providers: [taskStatusOptionsProvider]
})
export class TaskItemComponent {
  private taskService = inject(TaskService);
  tasksStatusOptions = inject(TASK_STATUS_OPTIONS);

  task = input.required<Task>();
  taskStatus = computed(() => {
    switch (this.task().status) {
      case 'OPEN':
        return 'Open';
      case 'IN_PROGRESS':
        return 'Working on it';
      case 'DONE':
        return 'Completed';
      default:
        return 'Open';
    }
  });

  onChangeTaskStatus(id: string, status: string) {
    let newStatus: TaskStatus = 'OPEN';

    switch (status) {
      case 'open':
        newStatus = 'OPEN';
        break;
      case 'in-progress':
        newStatus = 'IN_PROGRESS';
        break;
      case 'done':
        newStatus = 'DONE';
        break;
      default:
        break;
    }

    this.taskService.updateTaskStatus(id, newStatus);
  }
}
