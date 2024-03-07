import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidat } from 'src/app/FrontOffice/Candidat/candidat.model';

import { ServicecandidatService } from 'src/app/FrontOffice/servicecandidat.service';
@Component({
  selector: 'app-allcandidat',
  templateUrl: './allcandidat.component.html',
  styleUrls: ['./allcandidat.component.css'],
  providers: [ServicecandidatService]
})
export class AllcandidatComponent implements OnInit {

  candidats: Candidat[] = [];
  selectedCandidat: Candidat | null = null;
  constructor(private router: Router, private servicecandidat: ServicecandidatService) {}

  ngOnInit(): void {
    this.servicecandidat.getAllCandidats().subscribe((data: Candidat[]) => {
      this.candidats = data;
    });
  }
    
  removeCandidat(id: number): void {
    this.servicecandidat.removeCandidat(id).subscribe(() => {
      this.candidats = this.candidats.filter(candidat => candidat.idCandidat !== id);
      
    })
  }

  openPopup(candidat: Candidat): void {
    this.selectedCandidat = candidat;
  }

}
