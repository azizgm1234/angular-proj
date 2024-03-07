import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar-back',
  templateUrl: './sidebar-back.component.html',
  styleUrls: ['./sidebar-back.component.css']
})
export class SidebarBackComponent {
  constructor(private router: Router) {}
  isDashboardListExpanded = true;
  absences = false;
  listAbsences = false;
  user = false;
  wallet = false;
  conge = false;
  contrat=false;
  employe = false;
  departement = false;

  // Function to toggle the Dashboard list expansion
  toggleDashboardList() {
    this.isDashboardListExpanded = !this.isDashboardListExpanded;
  }
  toggleContratEmployeList() {
    this.contrat = !this.contrat;
  }
  toggleAbsences() {
    this.absences = !this.absences;
  }
  toggleConges() {
    this.conge = !this.conge;
  }
  toggleListAbsences() {
    this.listAbsences = !this.listAbsences;
  }
  toggleUserList() {
    this.user = !this.user;
  }
  togglewalletList(){
    this.wallet = !this.wallet;
  }

  toggleDepartementList() {
    this.departement = !this.departement;
  }
  toggleEmployeList(){
    this.employe = !this.employe;
  }
  isRouteActive(route: string): boolean {
    return this.router.isActive(route, true);
  }


}
