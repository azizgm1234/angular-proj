import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Absence } from 'src/app/core/models/absence.model';
import { FileAnis } from 'src/app/core/models/fileAnis.model';
import { ServiceAbsenceService } from 'src/app/core/services/service-absence.service';

@Component({
  selector: 'app-list-absence',
  templateUrl: './list-absence.component.html',
  styleUrls: ['./list-absence.component.css']
})
export class AbsenceListComponent implements OnInit {
  absences: any[] = [];
  files: any[] = [];

  constructor(private absenceService: ServiceAbsenceService) {}

  ngOnInit(): void {
    this.loadAbsences();
    // this.loadFiles();
  }

  private loadAbsences(): void {
    this.absenceService.getall().subscribe((absences)=>{
      this.absences = absences as any[];
    });
  }

  // private loadFiles(): void {
  //   this.absenceService.getFiles().subscribe((files)=>{
  //     this.files = files as any[];
  //   });
  // }

//   getJustificationFile(absenceId: number): FileAnis | undefined {
//     const justificationFile = this.files.find(file => file.absence && file.absence.id_absence === absenceId);
//     console.log('Justification File:', justificationFile);
//     return justificationFile;
// }

//   getJustificationImageSrc(absenceId: number): string | undefined {
  
//     this.absenceService.getFile(absenceId).subscribe(() => {  
//       this.absenceService.getall().subscribe((datas) => {
//           this.absences = datas as any[];
//       }); 
//   });
//   }
// getJustificationFile(absenceId:number): void {
//   this.absenceService.getJustificationFile(absenceId).subscribe(
//     response => {
//       // Handle the file data here, e.g., display it in the browser
//       const file = new Blob([response], { type: 'application/pdf' }); // Adjust the MIME type as per your file type
//       const fileURL = URL.createObjectURL(file);
//       window.open(fileURL); // Open the file in a new tab
//     },
//     error => {
//       console.error('Error fetching justification file:', error);
//     }
//   );
// }
  

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
