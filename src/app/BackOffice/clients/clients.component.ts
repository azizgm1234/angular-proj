import { Component } from '@angular/core';
import { ServiceclientService } from '../serviceclient.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
  providers:[ServiceclientService]
})
export class ClientsComponent implements OnInit{
  clients: any[] = [];

 

  constructor(private router: Router,private clientservice:ServiceclientService){}
  

/*getall*/
  ngOnInit(): void {
    console.log("onit.......................");
    this.clientservice.getall().subscribe((datas)=>{
      this.clients=datas as any[];
    })
  }

  /*remove*/
  removeClient(id: number): void {
    this.clientservice.removeClient(id).subscribe(() => {  
      this.clientservice.getall().subscribe((datas) => {
        this.clients = datas as any[];
      });
    });
  }
  navigateToContracts(idClient: number): void {
    this.router.navigate(['/admin/contrat'], { queryParams: { id: idClient } });
  }

  navigateToeditclient(idClient: number): void {
    this.router.navigate(['/admin/editclient'], { queryParams: { id: idClient } });
  }
  navigateToaddContracts(idClient: number): void {
    this.router.navigate(['/admin/addcontrat'], { queryParams: { id: idClient } });
  }

}
