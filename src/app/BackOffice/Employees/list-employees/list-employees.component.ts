import { Component, OnInit } from '@angular/core';
import { SericeEmployeeService } from 'src/app/core/services/serice-employee.service';


@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: any[] = [];
  starsArray: any[] = [];
  emptyStarsArray: any[] = [];
  availablePercentage:number=0;
  max:number=0;

  constructor(private employeeService: SericeEmployeeService) {}

  ngOnInit(): void {
    this.loadAbsences();
    this.fetchAnalytics();
    this.fetchmax();
  }

  private loadAbsences(): void {
    this.employeeService.getall().subscribe((absences)=>{
      this.employees=absences as any[];
      console.log(this.max)
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
fetchAnalytics() {
  this.employeeService.moyennedeperf().subscribe(
    (availablePercentage) => this.availablePercentage = availablePercentage as number,
    error => console.error('Error fetching available percentage:', error)
  );
}
fetchmax() {
  this.employeeService.calculateNbreEmpl().subscribe(
    (max) => this.max = max as number,
    error => console.error('Error fetching max:', error)
  );
}

}
