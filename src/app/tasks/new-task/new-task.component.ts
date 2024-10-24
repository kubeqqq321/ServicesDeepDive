import {Component, ElementRef, Inject, viewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TaskService} from '../task.service';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');


  // private taskService: TaskService;

  // constructor() {
  //   this.taskService = new TaskService();
  // }

  constructor(private taskService: TaskService) {
  }

  onAddTask(title: string, description: string) {
    this.taskService.addTask({title, description});
    this.formEl()?.nativeElement.reset();
  }

}
