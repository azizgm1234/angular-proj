import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AbsenceComponent } from './BackOffice/Absences/absence/absence.component';
import { AddEmployeeComponent } from './BackOffice/Employees/add-employee/add-employee.component';
import { AbsenceListComponent } from './BackOffice/Absences/list-absence/list-absence.component';
import { AddCongeComponent } from './BackOffice/Conges/add-conge/add-conge.component';
import { AddDepartementComponent } from './BackOffice/Departement/add-departement/add-departement.component';
import { ListEmployeesComponent } from './BackOffice/Employees/list-employees/list-employees.component';
import { ListDepartementComponent } from './BackOffice/Departement/list-departement/list-departement.component';
import { ListCongeComponent } from './BackOffice/Conges/list-conge/list-conge.component';
import { AddNoteComponent } from './BackOffice/Note/add-note/add-note.component';
import { AddContratEmployeComponent } from './BackOffice/contratEmploye/add-contrat-employe/add-contrat-employe.component';
import { ListContratEmployeeComponent } from './BackOffice/contratEmploye/list-contrat-employee/list-contrat-employee.component';

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
    AddEmployeeComponent,
    AbsenceComponent,
    AbsenceListComponent,
    AddCongeComponent,
    AddDepartementComponent,
    ListEmployeesComponent,
    ListDepartementComponent,
    ListCongeComponent,
    AddNoteComponent,
    AddContratEmployeComponent,
    ListContratEmployeeComponent
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
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
