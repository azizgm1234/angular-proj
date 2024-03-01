import { Component } from '@angular/core';
import { ServiceclientService } from '../serviceclient.service';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.css']
})
export class ContratComponent  implements OnInit{
  Contracts: any[] = [];
  id!: number ;

  constructor(private route: ActivatedRoute,private router: Router,private clientservice:ServiceclientService){}
 
 ngOnInit(): void {
 
    console.log("onit.......................");
    this.route.queryParams.subscribe(params => {
      this.id = +params['id'];
      if (this.id) {
        this.clientservice.getContractbyclient(this.id).subscribe((datas) => {
          this.Contracts = datas as any[];
          console.log(this.Contracts);
        });
      }
    });
  }



  removecontrat(idcont: number): void {
    this.clientservice.removeContrat(idcont).subscribe(() => {  
      this.route.queryParams.subscribe(params => {
        this.id = +params['id'];
        if (this.id) {
          this.clientservice.getContractbyclient(this.id).subscribe((datas) => {
            this.Contracts = datas as any[];
            console.log(this.Contracts);
          });
        }
      });
    });
  }




  navtoeditcontrat(idcont: number): void {
    this.router.navigate(['/admin/editcontrat'], { queryParams: { id: idcont } });
  }
  navtofacture(id: number,idcont: number): void {
    this.router.navigate(['/admin/facture'], { queryParams: {idcli: this.id,id: idcont}});
  }

  }


