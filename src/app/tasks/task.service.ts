import {inject, Injectable, signal} from '@angular/core';
import {Task, TaskStatus} from './task.model';
import {LoggingService} from '../logging.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [];
  private loggingService = inject(LoggingService);

  // private tasks = signal<Task[]>([]);
  // allTasks = this.tasks.asReadonly()

  get allTasks() {
    return [...this.tasks];
  }

  addTask(taskData: { title: string, description: string }) {
    const newTask: Task = {
      ...taskData, id: Math.random().toString(),
      status: 'OPEN'
    };
    // this.tasks.update((oldTasks) => [...oldTasks, newTask]);
    this.tasks = [...this.tasks, newTask];
    this.loggingService.log('Task added: ' + newTask.title);

  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    // this.tasks.update((oldTasks) =>
    //   oldTasks.map((task) =>
    //     task.id === taskId ? {...task, status: newStatus} : task
    //   )
    // );
    this.tasks = this.tasks.map((task) =>
      task.id === taskId ? {...task, status: newStatus} : task
    );
    this.loggingService.log('Task status updated: ' + taskId + ' ' + newStatus);
  }

}
