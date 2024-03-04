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
  
  constructor(private fb: FormBuilder,
    private absenceService: ServiceAbsenceService,
    private route: ActivatedRoute,  // Inject ActivatedRoute,
    private router: Router
    
    ) {}

  ngOnInit(): void {
    this.initForm(); 
    this.checkEditMode();
 
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
          justification: absence.justification,
          date: date.toISOString().split('T')[0], // Format as 'yyyy-MM-dd'
          validee: absence.validee,
        });
      });
    }
  }
  private initForm(): void {  
    this.AbsenceForm = this.fb.group({
      motif: ['', Validators.required],
      justification: ['', Validators.required],
      date: ['', Validators.required],
      validee: [true, Validators.required],
   
    });}

    onSubmit(): void {
      if (this.AbsenceForm.valid) {
        const absenceData = this.AbsenceForm.value; 
        if (this.isEditMode && this.absenceId !== null) {
          this.absenceService.updateAbsence(this.absenceId,absenceData).subscribe(() => {
            console.log('Absence updated successfully');
            window.location.reload();
          });  
        }
        else{
        this.absenceService.addAbsence(absenceData).subscribe(
          (clientId) => {
            console.log('Absence added successfully with ID:', clientId);
            window.location.reload();
          },
          (error) => {
            console.error('Error adding absence:', error);
          }
        );
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
