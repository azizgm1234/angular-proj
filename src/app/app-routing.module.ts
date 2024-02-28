
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
import { AddrecrutementComponent } from './BackOffice/addrecrutement/addrecrutement.component'; 
import { RecrutementComponent } from './BackOffice/recrutement/recrutement.component';
import { ModifierRecrutementComponent } from './BackOffice/modifier-recrutement/modifier-recrutement.component';
import { AllrecrutementComponent } from './FrontOffice/allrecrutement/allrecrutement.component';
import { CandidatComponent } from './FrontOffice/Candidat/candidat.component';

const routes: Routes = [
  {
    path:"",
    component:TemplateFComponent,
    children: [
      { path: 'home', component: HomeFrontComponent },
      { path: 'allrecrutement.html', component: AllrecrutementComponent },
      { path: 'candidat', component: CandidatComponent },
      { path: 'updateRecrutement/:id', component: ModifierRecrutementComponent }
   
    
    ]
      

  },
  {
    path:"admin",
    component:TemplateBComponent,
    children: [
      { path: 'homeb', component: HomeBackComponent },
      { path: 'clients', component: ClientsComponent },
      { path: 'addclient', component: AddclientComponent },
      { path: 'addrecrutement', component: AddrecrutementComponent},
      { path: 'recrutement', component: RecrutementComponent},
      { path: 'modifier-recrutement/:id', component:  ModifierRecrutementComponent },
   //   { path: 'modifier-recrutement/:id', component: ModifierRecrutementComponent }
   //{ path: '', redirectTo: '/recrutement', pathMatch: 'full' },

    ]

  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
