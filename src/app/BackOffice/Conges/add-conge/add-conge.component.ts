import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceCongeService } from 'src/app/core/services/service-conge.service';

@Component({
  selector: 'app-add-conge',
  templateUrl: './add-conge.component.html',
  styleUrls: ['./add-conge.component.css']
})
export class AddCongeComponent implements OnInit  {
  CongeForm!: FormGroup;
  isEditMode: boolean = false;
  congeId: number | null = null;  
  constructor(private fb: FormBuilder,
    private congeService: ServiceCongeService,
    private route: ActivatedRoute,
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
          this.congeId = +id;
          this.fetchCongeDetails();
        }
      });
    }
    private fetchCongeDetails(): void {
      if (this.congeId !== null) {
        this.congeService.getConge(this.congeId).subscribe(conge => {
          const dateD = new Date(conge.date_debut);
          const dateF = new Date(conge.date_fin);
  
          this.CongeForm.patchValue({
            date_debut: dateD.toISOString().split('T')[0],
            date_fin: dateF.toISOString().split('T')[0],
            CongeType: conge.CongeType,
            CongeStatut: conge.CongeStatut,
            commentaire: conge.commentaire,
            justification: conge.justification
          });
        });
      }
    }
    private initForm(): void {  
      this.CongeForm = this.fb.group({
        date_debut: ['', Validators.required],
        date_fin: ['', Validators.required],
        CongeType: ['', Validators.required],
        CongeStatut: ['', Validators.required],
        commentaire: ['', Validators.required],
        justification: ['', Validators.required],
      });}

      onSubmit(): void {
        if (this.CongeForm.valid) {
          const CongeData = this.CongeForm.value; 
          if (this.isEditMode && this.congeId !== null) {
            this.congeService.updateConge(this.congeId,CongeData).subscribe(() => {
              console.log('Conge updated successfully');
            });
          }
          else{
          this.congeService.addConge(CongeData).subscribe(
            (clientId) => {
              console.log('Conge added successfully with ID:', clientId);
              window.location.reload();
            },
            (error) => {
              console.error('Error adding conge:', error);
            }
          );
        }
      }
      }

      onCancel(): void {
        if (this.isEditMode) {
          this.router.navigate(['admin/listConges']);
        } else {
          this.router.navigate(['admin/homeb']);
        }
      }
}
