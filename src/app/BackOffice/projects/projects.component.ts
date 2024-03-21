import { Component, OnInit } from '@angular/core';
import { ProjectServiceService } from '../project-service.service';
import { Project } from '../project.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: any[] = []; 

  constructor( private projectService: ProjectServiceService,private router: Router ) {}
  
 
  ngOnInit(): void {
    console.log("mini.......................");
    this.projectService.getAllProjects().subscribe((datas)=>{
      this.projects=datas as any[];
    })
  }


 
  onDeleteProject(projectId: number): void {
    console.log('Project ID:', projectId);
    this.projectService.removeProject(projectId).subscribe(() => {  
      this.projectService.getAllProjects().subscribe((datas) => {
        this.projects = datas as any[];
      });
    });
  }

  

  onUpdateProject(projectId: number): void {
    this.router.navigate(['/admin/updateP'], { queryParams: { id: projectId } });
}
  
  


}
