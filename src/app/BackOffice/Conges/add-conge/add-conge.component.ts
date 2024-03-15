import { StatutC } from './../../../core/models/conge.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { typeC } from 'src/app/core/models/conge.model';
import { ServiceCongeService } from 'src/app/core/services/service-conge.service';

@Component({
  selector: 'app-add-conge',
  templateUrl: './add-conge.component.html',
  styleUrls: ['./add-conge.component.css'],
})
export class AddCongeComponent implements OnInit {

  CongeForm!: FormGroup;
  isEditMode: boolean = false;
  congeId: number | null = null;
  employeeId: number | null = null;

  postes = Object.values(typeC)
    .filter((value) => typeof value === 'string')
    .sort();
  status = Object.values(StatutC)
    .filter((value) => typeof value === 'string')
    .sort();

  constructor(
    private fb: FormBuilder,
    private congeService: ServiceCongeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.checkEditMode();
    this.getEmployee();
  }

  private getEmployee(): void {
    this.route.params.subscribe((params) => {
      const id = params['p'];
      if (id) {
        this.employeeId = +id;
      }
    });
  }
  private checkEditMode(): void {
    this.route.params.subscribe((params) => {
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
      this.congeService.getConge(this.congeId).subscribe((conge) => {
        console.log('Conge object:', conge);

        console.log('Conge typeC:', conge.typeC);
        console.log('Conge StatutC:', conge.statutC);

        const dateD = new Date(conge.date_debut);
        const dateF = new Date(conge.date_fin);

        this.CongeForm.patchValue({
          date_debut: dateD.toISOString().split('T')[0],
          date_fin: dateF.toISOString().split('T')[0],
          typeC: conge.typeC,
          statutC: conge.statutC,
          commentaire: conge.commentaire,
          justification: conge.justification,
        });
      });
    }
  }

  private initForm(): void {
    this.CongeForm = this.fb.group({
      date_debut: ['', Validators.required],
      date_fin: ['', Validators.required],
      typeC: ['', Validators.required],
      statutC: [StatutC.PENDING, this.isEditMode ? Validators.required : null],
      commentaire: ['', Validators.required],
      justification: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.CongeForm.valid) {
      const CongeData = this.CongeForm.value;
      if (this.isEditMode && this.congeId !== null) {
        this.congeService.updateConge(this.congeId, CongeData).subscribe(() => {
          this.router.navigate(['admin/listConge']);
        },(error) => {
          console.error('Error updating conge:', error);
          console.log('Error details:', error.error); // Log the complete error response
          console.log('Request payload:', CongeData); // Log the request payload
        }
        );
      } else {
        if (this.employeeId !== null) {
          this.congeService.addConge(CongeData, this.employeeId).subscribe(
            (clientId) => {
              console.log('Conge added successfully with ID:', clientId);
              this.router.navigate(['admin/listConge']);
            },
            (error) => {
              console.error('Error adding conge:', error);
              console.log('Error details:', error.error); // Log the complete error response
              console.log('Request payload:', CongeData); // Log the request payload
              console.log('edit mode :', this.isEditMode); // Log the request payload

            }
          );
        }
      }
    }
  }

  onCancel(): void {
    if (this.isEditMode) {
      this.router.navigate(['admin/listConge']);
    } else {
      this.router.navigate(['admin/homeb']);
    }
  }
}
