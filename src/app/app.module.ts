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
import { RecrutementComponent } from './BackOffice/recrutement/recrutement.component';
import { AddrecrutementComponent } from './BackOffice/addrecrutement/addrecrutement.component';
import { CommonModule } from '@angular/common';
import { ModifierRecrutementComponent } from './BackOffice/modifier-recrutement/modifier-recrutement.component';
import { FormsModule } from '@angular/forms';
import { AllrecrutementComponent } from './FrontOffice/allrecrutement/allrecrutement.component';
import { CandidatComponent } from './FrontOffice/Candidat/candidat.component';
import { ResourceComponent } from './BackOffice/Resources/resource/resource.component';
import { EditResourceComponent } from './BackOffice/Resources/edit-resource/edit-resource.component';
import { AddResourceComponent } from './BackOffice/Resources/add-resource/add-resource.component';
import { AfficherStockComponent } from './BackOffice/Stock/afficher-stock/afficher-stock.component';
import { EditStockComponent } from './BackOffice/Stock/edit-stock/edit-stock.component';
import { AddStockComponent } from './BackOffice/Stock/add-stock/add-stock.component';
import { AfficherFournisseurComponent } from './BackOffice/Fournisseur/afficher-fournisseur/afficher-fournisseur.component';
import { EditFournisseurComponent } from './BackOffice/Fournisseur/edit-fournisseur/edit-fournisseur.component';
import { AddFournisseurComponent } from './BackOffice/Fournisseur/add-fournisseur/add-fournisseur.component';




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
    RecrutementComponent,
    AddrecrutementComponent,
    ModifierRecrutementComponent,
    AllrecrutementComponent,
    CandidatComponent,
    ResourceComponent,
    EditResourceComponent,
    AddResourceComponent,
    AfficherStockComponent,
    EditStockComponent,
    AddStockComponent,
    AfficherFournisseurComponent,
    EditFournisseurComponent,
    AddFournisseurComponent,
 


   

    
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
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
