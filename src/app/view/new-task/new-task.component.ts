import { Component, OnInit } from '@angular/core';
import { TaskProviderService } from '../../service/task-provider.service';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  constructor(private taskProviderService: TaskProviderService, private router: Router) { }

  ngOnInit() {
  }

  createTask(data) {
    const task = {
      name: data.name,
      description: data.description,
      totalSeconds: this.getTotalSeconds(data.hours, data.minutes, data.seconds),
      active: false
    };
    this.taskProviderService.createNewTask(task).subscribe(
      res => {
        this.router.navigate(['']);
      }, 
      err => {
        confirm('Task could not be created')
      }
    )
  }

  getTotalSeconds(hours: number, minutes: number, seconds: number): number {
    const s = seconds? seconds: 0;
    const m = minutes? minutes:0;
    const h = hours? hours:0;
    return s + m*60 + h*3600;
  }

}
