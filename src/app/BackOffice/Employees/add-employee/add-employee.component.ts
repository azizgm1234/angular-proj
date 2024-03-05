import { Departement } from './../../../core/models/departement.model';
import { Employee, PosteEmployee } from './../../../core/models/employee.model';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SericeEmployeeService } from '../../../core/services/serice-employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceDepartementService } from 'src/app/core/services/service-departement.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  
  EmployeeForm!: FormGroup;
  isEditMode: boolean = false;
  employeeId: number | null = null;
  Departements: Departement[] = [];
  selectedDepartement:any;
  


  constructor(
    private fb: FormBuilder,
    private employeeService: SericeEmployeeService,
    private departmentService: ServiceDepartementService,
    private route: ActivatedRoute,
    private router: Router,
    
    
    
  ) {
    
  }
  ngOnInit(): void {
    
    this.initForm();
    this.checkEditMode();
    this.departmentService.getall().subscribe((data: Departement[])=>{
      this.Departements=data;
    },
    (error)=>{
      console.error('Erreur fetching')
    }
    )
    
  }
  changeDepartments(event: any): void {
    this.selectedDepartement = event.target.value;
  }
  

  
  postes  = Object.values(PosteEmployee).filter(value => typeof value === 'string').sort();
  
  
  private checkEditMode(): void {
    
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.isEditMode = true;
        this.employeeId = +id;
        this.fetchEmployeeDetails();
      }
    });
  }

  private fetchEmployeeDetails(): void {
    if (this.employeeId !== null) {
      this.employeeService.getEmployee(this.employeeId).subscribe(employee => {   
        const date = new Date(employee.date_embauche);

        this.EmployeeForm.patchValue({
        date_embauche: date.toISOString().split('T')[0],
        posteEmployee: employee.posteEmployee,
        departement: employee.departement,
        conges: employee.conges,
        salaireEmployees: employee.salaireEmployees,
        performanceEmployee: employee.performanceEmployee,
        contratEmployees: employee.contratEmployees,
        absences: employee.absences,
        team: employee.team,
      });
    }); 
    }
  }


  private initForm(): void {
    this.EmployeeForm = this.fb.group({
      date_embauche: ['', Validators.required],
      posteEmployee: ['', Validators.required],
      departements: this.fb.array([]),
    });
  }

 

  onSubmit(): void {

    if (this.EmployeeForm.valid) {
      const employeeData = this.EmployeeForm.value;
      if (this.isEditMode && this.employeeId !== null) {
        this.employeeService.updateEmployee(this.employeeId, employeeData).subscribe(() => {
          console.log('Employee updated successfully');
        });
      } else {
  
          this.employeeService.addEmployee(employeeData, this.selectedDepartement).subscribe(
            (clientId) => {
              console.log('Employee added successfully with ID:', clientId);
              window.location.reload();
            },
            (error) => {
              console.error('Error adding employee:', error);
            }
          );
        
      }
    }
  }
  
  
  

  onCancel(): void {
    if (this.isEditMode) {
      this.router.navigate(['admin/listEmployees']);
    } else {
      this.router.navigate(['admin/homeb']);
    }
  }
}
