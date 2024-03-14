import { Component, OnInit } from '@angular/core';
import { ServiceCongeService } from 'src/app/core/services/service-conge.service';

@Component({
  selector: 'app-list-conge',
  templateUrl: './list-conge.component.html',
  styleUrls: ['./list-conge.component.css']
})
export class ListCongeComponent implements OnInit {
  absences: any[] = [];
  startingLetter: any = '';


  constructor(private congeService: ServiceCongeService) {}

  ngOnInit(): void {
    this.loadAbsences();  
  }

  private loadAbsences(): void {
    this.congeService.getall().subscribe((absences)=>{
      this.absences=absences as any[];
    })
  }

  removeAbsence(id: number): void {
    const confirmation = confirm("Are you sure you want to delete this absence?");

    if (confirmation) {
        this.congeService.removeConge(id).subscribe(() => {  
            this.congeService.getall().subscribe((datas) => {
                this.absences = datas as any[];
            }); 
        });
    }  
}
onInput(event: any): void {
  this.startingLetter = event.target.value;
  this.searchUsers();
}
searchUsers(): void {
  this.congeService.searchUsers(this.startingLetter).subscribe(
    (data) => {
      console.log('Users:', data);
      this.absences = data;
    },
    (error) => {
      console.error('Error fetching users:', error);
    }
  );
}
}
