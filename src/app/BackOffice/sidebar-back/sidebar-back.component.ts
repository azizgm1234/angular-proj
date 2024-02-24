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
  user = false;
  wallet = false;

  // Function to toggle the Dashboard list expansion
  toggleDashboardList() {
    this.isDashboardListExpanded = !this.isDashboardListExpanded;
  }
  toggleUserList() {
    this.user = !this.user;
  }
  togglewalletList(){
    this.wallet = !this.wallet;
  }

  isRouteActive(route: string): boolean {
    return this.router.isActive(route, true);
  }


}
