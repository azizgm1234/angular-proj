import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../task-service.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent  implements OnInit{
  tasks: any[] = [];
  tasksToDo: Task[] = [];
  tasksInProgress: Task[] = [];
  tasksDone: Task[] = [];
  constructor(private taskservice: TaskServiceService) {}

  ngOnInit(): void {
    console.log("onit.......................");
    this.taskservice.getAllTasks().subscribe((datas)=>{
      this.tasks=datas as any[];
      this.organizeTasksByStatus();
    })
  }
  organizeTasksByStatus(): void {
    this.tasksToDo = this.tasks.filter(task => task.status === 'To Do');
    this.tasksInProgress = this.tasks.filter(task => task.status === 'In Progress');
    this.tasksDone = this.tasks.filter(task => task.status === 'Done');
  }

 
  onDeleteTask(taskid: number): void {
    console.log('Task ID:', taskid);
    this.taskservice.removetask(taskid).subscribe(() => {  
      this.taskservice.getAllTasks().subscribe((datas) => {
        this.tasks = datas as any[];
      });
    });
  }
   
  }




