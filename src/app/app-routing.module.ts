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
import { AbsenceComponent } from './BackOffice/Absences/absence/absence.component';
import { AbsenceListComponent } from './BackOffice/Absences/list-absence/list-absence.component';
import { AddCongeComponent } from './BackOffice/Conges/add-conge/add-conge.component';
import { AddEmployeeComponent } from './BackOffice/Employees/add-employee/add-employee.component';
import { AddDepartementComponent } from './BackOffice/Departement/add-departement/add-departement.component';
import { ListEmployeesComponent } from './BackOffice/Employees/list-employees/list-employees.component';
import { ListDepartementComponent } from './BackOffice/Departement/list-departement/list-departement.component';
import { ListCongeComponent } from './BackOffice/Conges/list-conge/list-conge.component';
import { AddNoteComponent } from './BackOffice/Note/add-note/add-note.component';
import { AddContratEmployeComponent } from './BackOffice/contratEmploye/add-contrat-employe/add-contrat-employe.component';
import { ListContratEmployeeComponent } from './BackOffice/contratEmploye/list-contrat-employee/list-contrat-employee.component';

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
      { path: 'addemployees', component: AddEmployeeComponent },
      { path: 'editEmployees/:id', component: AddEmployeeComponent },
      { path: 'EditAbsence/:id', component: AbsenceComponent },
      { path: 'addAbsences/:p', component: AbsenceComponent },
      { path: 'listAbsences', component: AbsenceListComponent },
      { path: 'listEmployees', component: ListEmployeesComponent },
      { path: 'addConges/:p', component: AddCongeComponent },
      { path: 'EditConge/:id', component: AddCongeComponent },
      { path: 'listConge', component: ListCongeComponent },
      { path: 'addDepartments', component: AddDepartementComponent },
      { path: 'EditDepartement/:id', component: AddDepartementComponent },
      { path: 'listDepartments', component: ListDepartementComponent },
      { path: 'addNote/:p', component: AddNoteComponent },
      { path: 'addContratEmployee/:p', component: AddContratEmployeComponent },
      { path: 'editContratEmployee/:id', component: AddContratEmployeComponent },
      { path: 'ListContratEmployee', component: ListContratEmployeeComponent },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
