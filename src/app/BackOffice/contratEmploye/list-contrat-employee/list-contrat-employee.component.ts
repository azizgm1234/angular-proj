import { Component, OnInit } from '@angular/core';
import { ServiceContratEmplService } from 'src/app/core/services/service-contrat-empl.service';

@Component({
  selector: 'app-list-contrat-employee',
  templateUrl: './list-contrat-employee.component.html',
  styleUrls: ['./list-contrat-employee.component.css']
})
export class ListContratEmployeeComponent implements OnInit {
  absences: any[] = [];
  constructor(private congeService: ServiceContratEmplService) {}

  ngOnInit(): void {
    this.loadAbsences();  
  }

  private loadAbsences(): void {
    this.congeService.getall().subscribe((absences)=>{
      this.absences=absences as any[];
    })
  }

  removeAbsence(id: number): void {
    const confirmation = confirm("Are you sure you want to delete this Contrat?");

    if (confirmation) {
        this.congeService.deleteContratEmployee(id).subscribe(() => {  
            this.congeService.getall().subscribe((datas) => {
                this.absences = datas as any[];
            }); 
        });
    }  
}
}
