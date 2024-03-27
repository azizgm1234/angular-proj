import { ServiceAbsenceService } from '../../../core/services/service-absence.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-absence',
  templateUrl: './absence.component.html',
  styleUrls: ['./absence.component.css']
})
export class AbsenceComponent implements OnInit {
  AbsenceForm!: FormGroup;
  isEditMode: boolean = false;
  absenceId: number | null = null; 
  employeeId: number | null = null; 
  selectedFile: File  | null = null;
  uploadProgress: number | null = null;

  // onFileSelected(event: any): void {
  //   const fileList: FileList = event.target.files;
  //   if (fileList && fileList.length > 0) {
  //     this.selectedFile = fileList[0];
  //   }
  // }

  // uploadFile(clientID:any): void {
  //   if (this.selectedFile) {
  //     this.absenceService.uploadFile(this.selectedFile,clientID)
  //       .subscribe(progress => {
  //         this.uploadProgress = progress;
  //         if (progress === 100) {
  //           alert("File upload completed")
  //           // File upload completed
  //           this.selectedFile = null;
  //         }
  //       });
  //   }
  // }
  
  constructor(private fb: FormBuilder,
    private absenceService: ServiceAbsenceService,
    private route: ActivatedRoute,  // Inject ActivatedRoute,
    private router: Router
    
    ) {}

  ngOnInit(): void {
    this.initForm(); 
    this.checkEditMode(); 
    this.getEmployee();
 
  }
  private getEmployee():void{
    this.route.params.subscribe(params => {
      const id = params['p'];
      if (id) {
        this.employeeId = +id;
      }
    });
  }
  private checkEditMode(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.isEditMode = true;
        this.absenceId = +id;
        this.fetchAbsenceDetails();
      }
    });
  }
  private fetchAbsenceDetails(): void {
    if (this.absenceId !== null) {
      this.absenceService.getAbsence(this.absenceId).subscribe(absence => {
        const date = new Date(absence.date);

        this.AbsenceForm.patchValue({
          motif: absence.motif,
          // justification: absence.justification,
          date: date.toISOString().split('T')[0], // Format as 'yyyy-MM-dd'
          validee: absence.validee,
        });
      });
    }
  }
  private initForm(): void {  
    this.AbsenceForm = this.fb.group({
      motif: ['', Validators.required],
      // justification: ['', Validators.required],
      date: ['', Validators.required],
      validee: [true, Validators.required],
   
    });}

    onSubmit(): void {
      if (this.AbsenceForm.valid) {
        const absenceData = this.AbsenceForm.value; 
        if (this.isEditMode && this.absenceId !== null) {
          this.absenceService.updateAbsence(this.absenceId,absenceData).subscribe(() => {
            console.log('Absence updated successfully');

            this.router.navigate(['admin/listAbsences']);

            
          });  
        }
        else{
          if(this.employeeId!== null){
        this.absenceService.addAbsence(absenceData,this.employeeId).subscribe(
          (clientId) => {
            console.log('Absence added successfully with ID:', clientId);
            // this.uploadFile(clientId); // Upload file after creating absence
          },
          (error) => {
            console.error('Error adding absence:', error);
          }
        );
      }
    }
    }
    }

    onCancel(): void {
      if (this.isEditMode) {
        this.router.navigate(['admin/listAbsences']);
      } else {
        this.router.navigate(['admin/homeb']);
      }
    }

}
