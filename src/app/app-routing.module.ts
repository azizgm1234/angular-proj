import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFComponent } from './FrontOffice/template-f/template-f.component';
import { NavbarFrontComponent } from './FrontOffice/navbar-front/navbar-front.component';
import { FooterFrontComponent } from './FrontOffice/footer-front/footer-front.component';
import { HomeFrontComponent } from './FrontOffice/home-front/home-front.component';
import { SidebarBackComponent } from './BackOffice/sidebar-back/sidebar-back.component';
import { NavbarBackComponent } from './BackOffice/navbar-back/navbar-back.component';
import { TemplateBComponent } from './BackOffice/template-b/template-b.component';
import { HomeBackComponent } from './BackOffice/home-back/home-back.component';
import { AddclientComponent } from './BackOffice/addclient/addclient.component';
import { ClientsComponent } from './BackOffice/clients/clients.component';
import { AddProjectComponent } from './BackOffice/add-project/add-project.component';
import { ProjectsComponent } from './BackOffice/projects/projects.component';
import { AddtaskComponent } from './BackOffice/addtask/addtask.component';
import { TasksComponent } from './BackOffice/tasks/tasks.component';
import { UpdateprojectComponent } from './BackOffice/updateproject/updateproject.component';

const routes: Routes = [
  {
    path:"",
    component:TemplateFComponent,
    children: [
      { path: 'home', component: HomeFrontComponent }]
  },
  {
    path:"admin",
    component:TemplateBComponent,
    children: [
      { path: 'homeb', component: HomeBackComponent },
      { path: 'clients', component: ClientsComponent },
      { path: 'addclient', component: AddclientComponent },
      { path: 'addProject', component: AddProjectComponent  } ,
      { path: 'projects', component: ProjectsComponent  } ,
      { path: 'addtask', component: AddtaskComponent  } ,
      { path: 'tasks', component: TasksComponent  } ,
      { path: 'updateP', component: UpdateprojectComponent  } ,
      
      ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
