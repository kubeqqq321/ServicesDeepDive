import {Component, computed, inject, signal} from '@angular/core';
import {filter} from 'rxjs';
import {TaskItemComponent} from './task-item/task-item.component';
import {NgForOf} from '@angular/common';
import {TaskService} from '../task.service';
import {TASK_STATUS_OPTIONS, taskStatusOptionsProvider} from '../task.model';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [
    TaskItemComponent,
    NgForOf
  ],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  providers: [taskStatusOptionsProvider],
})
export class TasksListComponent {

  private taskService = inject(TaskService);
  tasksStatusOptions = inject(TASK_STATUS_OPTIONS);
  private selectedFilter = 'all';

  get tasks() {
    switch (this.selectedFilter) {
      case'open':
        return this.taskService.allTasks.filter(task => task.status === 'OPEN');
      case 'in-progress':
        return this.taskService.allTasks.filter(task => task.status === 'IN_PROGRESS');
      case 'done':
        return this.taskService.allTasks.filter(task => task.status === 'DONE');
      default:
        return this.taskService.allTasks;
    }
  }

  // private selectedFilter = signal<string>('all');
  // tasks = computed(() => {
  //   switch (this.selectedFilter()) {
  //     case 'open':
  //       return this.taskService.allTasks().filter(task => task.status === 'OPEN');
  //     case 'in-progress':
  //       return this.taskService.allTasks().filter(task => task.status === 'IN_PROGRESS');
  //     case 'done':
  //       return this.taskService.allTasks().filter(task => task.status === 'DONE');
  //     default:
  //       return this.taskService.allTasks();
  //   }
  // });

  onChangeTasksFilter(value: string) {
    // this.selectedFilter.set(value);
    this.selectedFilter = value;
  }
}
