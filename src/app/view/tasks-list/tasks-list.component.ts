import { Component, OnInit, ViewChild } from '@angular/core';
import { TaskProviderService } from '../../service/task-provider.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  term: string;
  recordedTime = 0;
  interval;
  activatedTask;
  timerActivated = false;

  elements: any = [];
  previous: any = [];
  headElements = ['NAME', 'DESCRIPTION', 'TIME SPENT', 'COMPLETED', 'DELETE', 'TIMER'];
  editField: string;

  tasks = [
    {
      id: 1,
      name: 'Sprint Meeting',
      description: '....',
      active: false, 
      completed: '',
      totalSeconds: 0
    },
    {
      id: 2,
      name: 'TICKET-1234',
      description: '....',
      active: false, 
      completed: new Date(),
      totalSeconds: 1234
    },
    {
      id: 3,
      name: 'Deployment',
      description: '....',
      active: false, 
      completed: new Date(),
      totalSeconds: 1477
    }
  ];

  constructor(private taskProviderService: TaskProviderService) { }

  ngOnInit() {
    //this.displayAllTasks()
  }

  displayAllTasks() {
    this.taskProviderService.getAllTasks().subscribe(
      res => {
        this.tasks.push(res.data)
      }, 
      err => {
        confirm("Tasks could not be loaded for some reasons!")
      }
    )
  }

  deleteTask(id: number) {
    let c = confirm("are you sure ?");
    if(!c) {
      return
    }
    this.taskProviderService.deleteTask(id).subscribe(
      res => {
        confirm("Task Deleted");
        this.ngOnInit();
      }, 
      err => {
        confirm("It can be deletd for some reasons!")
      }
    )
  }

  updateTask(data) {
    this.taskProviderService.updateTask(data.id, data).subscribe(
      res => {
        this.ngOnInit();
      }, 
      err => {
        confirm("Task couled not be updated!")
      }
    )
  }

  startTimer(id) {
    this.activatedTask = id;
    this.timerActivated = true;
    this.interval = setInterval(() => {
        this.recordedTime++;
    },1000)
  }
  pauseTimer() {
    clearInterval(this.interval);
  }
  stopTimer(task) {
    this.recordedTime = 0;
    this.timerActivated = false;
    clearInterval(this.interval);
    task.totalSeconds += this.recordedTime;
    task.completed = new Date();
    this.updateTask(task);
   }

   disableButton(id: number): boolean {
     return this.timerActivated && id !== this.activatedTask
   }
}
