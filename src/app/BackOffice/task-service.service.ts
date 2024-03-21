import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:8089/coconsult';
   
 
  addTaskAndAssignToProject(projectId: number, task: Task) {
    // Appeler l'API pour ajouter la tâche et l'associer au projet
    return this.http.post<Task>(`${this.baseUrl}/add-task/${projectId}`, task);
  }
  getAllTasks() {
    return this.http.get<any[]>(this.baseUrl + "/getAllT");
  }
  
    removetask(taskid: number) {
    
      return this.http.delete(this.baseUrl + "/removetask/" +taskid );
    }
 
}
