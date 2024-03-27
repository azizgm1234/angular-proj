import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContratEmployee, ContratEmployeeType } from 'src/app/core/models/contratEmployee.model';
import { ServiceContratEmplService } from 'src/app/core/services/service-contrat-empl.service';

@Component({
  selector: 'app-add-contrat-employe',
  templateUrl: './add-contrat-employe.component.html',
  styleUrls: ['./add-contrat-employe.component.css']
})
export class AddContratEmployeComponent implements OnInit {
  ContratEmployeeForm!: FormGroup;
  isEditMode: boolean = false;
  ContratId: number | null = null;
  employeeId: number | null = null;
  postes = Object.values(ContratEmployeeType)
    .filter((value) => typeof value === 'string')
    .sort();
  errorMessage: string = '';


  constructor(private fb: FormBuilder,
    private congeService: ServiceContratEmplService,
    private route: ActivatedRoute,
    private router: Router) {}

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
        this.ContratId = +id;
        this.fetchContratDetails();
      }
    });
  }
  private fetchContratDetails(): void {
    if (this.ContratId !== null) {
      this.congeService.getContratEmployee(this.ContratId).subscribe((conge) => {
        console.log('Conge object:', conge);

        console.log('Conge typeC:', conge.typeCE);

        const dateD = new Date(conge.date_debut);
        const dateF = new Date(conge.date_fin);

        this.ContratEmployeeForm.patchValue({
          date_debut: dateD.toISOString().split('T')[0],
          date_fin: dateF.toISOString().split('T')[0],
          duree_hebdomadaire: conge.duree_hebdomadaire,
          isArchive: conge.isArchive,
          numeroSecuriteSociale: conge.numeroSecuriteSociale,
          rib: conge.rib,
          typeCE: conge.typeCE,       
        });
      });
    }
  }

  initForm(): void {
    this.ContratEmployeeForm = this.fb.group({
      rib: ['', Validators.required],
      numeroSecuriteSociale: ['', Validators.required],
      date_debut: ['', Validators.required],
      date_fin: ['', Validators.required],
      typeCE: ['', Validators.required],
      duree_hebdomadaire: ['', Validators.required],
      isArchive: [false],
    });
  }

  onSubmit(): void {
    if (this.ContratEmployeeForm.valid) {
      const contratEmployeeData: ContratEmployee = this.ContratEmployeeForm.value;
      if (this.isEditMode && this.ContratId !== null) {
        this.congeService.updateContratEmployee(contratEmployeeData,this.ContratId ).subscribe(() => {
          console.log('Contract updated successfully');
          this.router.navigate(['admin/ListContratEmployee']);
        },
        (errorResponse) => {
          if (errorResponse.error && errorResponse.error.error) {
            this.errorMessage = errorResponse.error.error;
          } else {
            this.errorMessage = 'An unexpected error occurred.';
          }
        }
        );
      } else {
        if (this.employeeId !== null) {
          this.congeService.saveContratEmployee(contratEmployeeData, this.employeeId).subscribe(
            (clientId) => {
              console.log('Conge added successfully with ID:', clientId);
              this.router.navigate(['admin/ListContratEmployee']);
            },
            (errorResponse) => {
              if (errorResponse.error && errorResponse.error.error) {
                this.errorMessage = errorResponse.error.error;
              } else {
                this.errorMessage = 'An unexpected error occurred.';
              }
            }
          );
        }
      }
    }
  }

  onCancel(): void {
    if (this.isEditMode) {
      this.router.navigate(['admin/ListContratEmployee']);
    } else {
      this.router.navigate(['admin/homeb']);
    }
  }
}
