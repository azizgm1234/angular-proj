import { Departement } from './../../../core/models/departement.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/core/models/employee.model';
import { SericeEmployeeService } from 'src/app/core/services/serice-employee.service';
import { ServiceDepartementService } from 'src/app/core/services/service-departement.service';

@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrls: ['./add-departement.component.css']
})
export class AddDepartementComponent implements OnInit{
  DepartementForm!: FormGroup;
  isEditMode: boolean = false;
  departementId: number | null = null;  
  employees: any[] =[];
  selectedEmployees: Employee[] = [];

  

  constructor(private fb: FormBuilder,
    private departementService: ServiceDepartementService,
    private employeeService: SericeEmployeeService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

    ngOnInit(): void {
      this.initForm(); 
      this.checkEditMode();
      this.employeeService.getall().subscribe(
        (data: Employee[]) => {
          this.employees = data;
        },
        (error) => {
          console.error('Error fetching employees:', error);
        }
      );
    }

    onCheckboxChange(employee: Employee): void {
      if (this.isSelected(employee)) {
        this.selectedEmployees = this.selectedEmployees.filter((emp) => emp.id_employe !== employee.id_employe);
      } else {
        this.selectedEmployees.push(employee);
      }
    }
  
    isSelected(employee: Employee): boolean {
      return this.selectedEmployees.some((emp) => emp.id_employe === employee.id_employe);
    }

    private checkEditMode(): void {
      this.route.params.subscribe(params => {
        const id = params['id'];
        if (id) {
          this.isEditMode = true;
          this.departementId = +id;
          this.fetchDepartementDetails();
        }
      });
    }
    private fetchDepartementDetails(): void {
      if (this.departementId !== null) {
        this.departementService.getDepartement(this.departementId).subscribe((conge) => {
          this.DepartementForm.patchValue({
            libelle: conge.libelle,
            maxSaturation: conge.maxSaturation,
          });
    
          // Assuming conge.employees is an array of Employee objects
          if (conge.employees && Array.isArray(conge.employees)) {
            // Clear the existing selectedEmployees array
            this.selectedEmployees = [];
    
            // Iterate through each employee and add it to selectedEmployees
            conge.employees.forEach((employee: Employee) => {
              this.selectedEmployees.push(employee);
            });
          }
        });
      }
    }
    
    private initForm(): void {  
      this.DepartementForm = this.fb.group({
        libelle: ['', Validators.required],
        maxSaturation: ['', Validators.required],
         employees: [[]] // Assuming 
      });}

      onSubmit(): void {
        if (this.DepartementForm.valid) {
          const CongeData = this.DepartementForm.value; 
          if (this.isEditMode && this.departementId !== null) {
            this.departementService.updateDepartement(this.departementId,CongeData).subscribe(() => {
              console.log('departement updated successfully');
            });
          }
          else{
            this.departementService.addDepartement(CongeData).subscribe(
              (id_departement: number) => {
       
            
                console.log('departement added successfully with ID:', id_departement);
                  if (id_departement !== null) {
                  console.log('this isssssss');
                  this.departementService.affecterEmplADep(id_departement, this.selectedEmployees).subscribe(
                    () => {
                      console.log('Employees associated with the department successfully');
                      window.location.reload();
                    },
                    (error) => {
                      console.error('Error associating employees with the department:', error);
                    }
                    
                  );
                } else {
                  console.error('Received null clientId from the server');
                }
              } ,
              (error) => {
                console.error('Error adding departement:', error);
              }
            );
            
      }
    }
  }

      onCancel(): void {
        if (this.isEditMode) {
          this.router.navigate(['admin/listdepartements']);
        } else {
          this.router.navigate(['admin/homeb']);
        }
      }
}
