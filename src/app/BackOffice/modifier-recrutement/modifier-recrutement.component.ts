import { Component, OnInit } from '@angular/core';
import { ServicerecrutementService } from '../servicerecrutement.service';
import { Recrutement } from '../recrutement.model';



@Component({
  selector: 'app-modifier-recrutement',
  templateUrl: './modifier-recrutement.component.html',
  styleUrls: ['./modifier-recrutement.component.css']
})
export class ModifierRecrutementComponent implements OnInit {
  recrutements: Recrutement[] = [];
  selectedRecrutement: Recrutement | null = null;

  constructor(private recrutementService: ServicerecrutementService) { }

  ngOnInit(): void {
    this.fetchRecrutements();
  }
  fetchRecrutements(): void {
    this.recrutementService.getAll().subscribe((data: Recrutement[]) => {
      this.recrutements = data;
    });
  }

  editRecrutement(recrutement: Recrutement): void {
    this.recrutementService.updateRecrutement(recrutement.idRec, recrutement).subscribe(updatedRecrutement => {
    
      const index = this.recrutements.findIndex(r => r.idRec === updatedRecrutement.idRec);
      if (index !== -1) {
        this.recrutements[index] = updatedRecrutement;
      }
    });
  }

  onSubmit(): void {
    if (this.selectedRecrutement) {
      this.recrutementService.updateRecrutement(this.selectedRecrutement.idRec, this.selectedRecrutement)
        .subscribe(updatedRecrutement => {
          const index = this.recrutements.findIndex(r => r.idRec === updatedRecrutement.idRec);
          if (index !== -1) {
            this.recrutements[index] = updatedRecrutement;
          }
        });
  }
}
}