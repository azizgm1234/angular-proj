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
import { ContratComponent } from './BackOffice/contrat/contrat.component';
import { AddcontratComponent } from './BackOffice/addcontrat/addcontrat.component';
import { EditclientComponent } from './BackOffice/editclient/editclient.component';
import { EditcontratComponent } from './BackOffice/editcontrat/editcontrat.component';
import { FactureComponent } from './BackOffice/facture/facture.component';
import { AddpaimentComponent } from './BackOffice/addpaiment/addpaiment.component';

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
      {path: 'editclient', component: EditclientComponent},
      {path: 'contrat', component: ContratComponent},
      {path: 'addcontrat', component: AddcontratComponent},
      {path: 'editcontrat', component: EditcontratComponent},
      {path: 'facture', component: FactureComponent},
      {path: 'addpaiment', component: AddpaimentComponent}
       ]
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
