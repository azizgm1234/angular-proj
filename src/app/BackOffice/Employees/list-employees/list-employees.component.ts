import { Component, OnInit } from '@angular/core';
import { SericeEmployeeService } from 'src/app/core/services/serice-employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: any[] = [];

  constructor(private employeeService: SericeEmployeeService) {}

  ngOnInit(): void {
    this.loadAbsences();
  }

  private loadAbsences(): void {
    this.employeeService.getall().subscribe((absences)=>{
      this.employees=absences as any[];
    })
  }

  removeEmployee(id: number): void {
    const confirmation = confirm("Are you sure you want to delete this absence?");

    if (confirmation) {
        this.employeeService.removeEmployee(id).subscribe(() => {  
            this.employeeService.getall().subscribe((datas) => {
                this.employees = datas as any[];
            }); 
        });
    }
}
}
