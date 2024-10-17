import {Component, signal} from '@angular/core';
import {filter} from 'rxjs';
import {TaskItemComponent} from './task-item/task-item.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [
    TaskItemComponent,
    NgForOf
  ],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css'
})
export class TasksListComponent {

  selectedFilter = signal<string>('all');
  tasks = [];

  onChangeTasksFilter(value: string) {
    this.selectedFilter.set(value);
  }
}
