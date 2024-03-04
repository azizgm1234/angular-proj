import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Absence } from 'src/app/core/models/absence.model';
import { ServiceAbsenceService } from 'src/app/core/services/service-absence.service';

@Component({
  selector: 'app-list-absence',
  templateUrl: './list-absence.component.html',
  styleUrls: ['./list-absence.component.css']
})
export class AbsenceListComponent implements OnInit {
  absences: any[] = [];

  constructor(private absenceService: ServiceAbsenceService) {}

  ngOnInit(): void {
    this.loadAbsences();
  }

  private loadAbsences(): void {
    this.absenceService.getall().subscribe((absences)=>{
      this.absences=absences as any[];
    })
  }

  removeAbsence(id: number): void {
    const confirmation = confirm("Are you sure you want to delete this absence?");

    if (confirmation) {
        this.absenceService.removeAbsence(id).subscribe(() => {  
            this.absenceService.getall().subscribe((datas) => {
                this.absences = datas as any[];
            }); 
        });
    }
}
}
