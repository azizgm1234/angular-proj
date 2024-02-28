import { Component, OnInit } from '@angular/core';
import { ServicerecrutementService } from '../servicerecrutement.service';
import { Recrutement } from '../recrutement.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recrutement',
  templateUrl: './recrutement.component.html',
  styleUrls: ['./recrutement.component.css'],
  providers: [ServicerecrutementService]
})


export class RecrutementComponent implements OnInit {
  recrutements: Recrutement[] = [];
  
  constructor(private router: Router, private recrutementService: ServicerecrutementService) {}

  ngOnInit(): void {
    this.recrutementService.getAll().subscribe((data: Recrutement[]) => {
      this.recrutements = data;
    });
  }

  removeRecrutement(id: number): void {
    this.recrutementService.removeRecrutement(id).subscribe(() => {
   
      this.recrutements = this.recrutements.filter(recrutement => recrutement.idRec !== id);
    });
  }

  editRecrutement(recrutement: Recrutement): void {
    this.router.navigate(['/modifier-recrutement', recrutement.idRec]); // Rediriger vers la page de modification avec l'ID du recrutement
  }

  
}

