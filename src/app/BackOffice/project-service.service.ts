import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {
 
  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:8089/coconsult'; 

  // Méthode pour ajouter un projet
  addProject(project: Project) {
    return this.http.post<number>(`${this.baseUrl}/addProject`, project);
  }
  updateProject(projectId: number,project: Project) {
    return this.http.put<Project>(`${this.baseUrl}/updateproject/`+projectId, project);
  }
 
 
 getAllProjects(): Observable<any[]> {
  return this.http.get<any[]>(this.baseUrl + "/getAll");
}

  removeProject(projectId: number): Observable<any> {
  
    return this.http.delete(this.baseUrl + "/removeProject/" +projectId );
  }
  getProjectById(projectId: number) {
   return this.http.get<Project>(`${this.baseUrl}/project/${projectId}`);
  }
  
 

 
 
}
