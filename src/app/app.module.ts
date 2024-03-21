import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TemplateFComponent } from './FrontOffice/template-f/template-f.component';
import { NavbarFrontComponent } from './FrontOffice/navbar-front/navbar-front.component';
import { FooterFrontComponent } from './FrontOffice/footer-front/footer-front.component';
import { HomeFrontComponent } from './FrontOffice/home-front/home-front.component';
import { SidebarBackComponent } from './BackOffice/sidebar-back/sidebar-back.component';
import { NavbarBackComponent } from './BackOffice/navbar-back/navbar-back.component';
import { TemplateBComponent } from './BackOffice/template-b/template-b.component';
import { HomeBackComponent } from './BackOffice/home-back/home-back.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientsComponent } from './BackOffice/clients/clients.component';
import { AddclientComponent } from './BackOffice/addclient/addclient.component';
import { AddProjectComponent } from './BackOffice/add-project/add-project.component';
import { ProjectsComponent } from './BackOffice/projects/projects.component';
import { AddtaskComponent } from './BackOffice/addtask/addtask.component';
import { TasksComponent } from './BackOffice/tasks/tasks.component';
import { UpdateprojectComponent } from './BackOffice/updateproject/updateproject.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFComponent,
    NavbarFrontComponent,
    FooterFrontComponent,
    HomeFrontComponent,
    SidebarBackComponent,
    NavbarBackComponent,
    TemplateBComponent,
    HomeBackComponent,
    ClientsComponent,
    AddclientComponent,
    AddProjectComponent,
    ProjectsComponent,
    AddtaskComponent,
    TasksComponent,
    UpdateprojectComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
