import {bootstrapApplication} from '@angular/platform-browser';
import {appConfig} from './app/app.config';
import {AppComponent} from './app/app.component';
import {TaskService} from './app/tasks/task.service';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


//
// bootstrapApplication(AppComponent, {
//   providers: [TaskService]
// }).catch((err) => console.error(err));
