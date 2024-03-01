import { Component, ElementRef, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceclientService } from "../serviceclient.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit{
  isFormOpen: boolean = false;
  Factures: any[] = [];
  idcontrat: number | undefined;
  idclient: number | undefined;
  factureForm!: FormGroup;

  constructor(private route: ActivatedRoute,private fb: FormBuilder, private clientservice:ServiceclientService){}
  @ViewChild('factureFormElement') factureFormElement: ElementRef | undefined;
 ngOnInit(): void {
  this.initForm();
    console.log("onit.......................");
    this.route.queryParams.subscribe(params => {
      this.idcontrat = +params['id'];
      this.idclient = +params['idcli'];
      console.log(this.idcontrat, this.idclient );
      if (this.idcontrat && this.idclient) {
        this.clientservice.getallfactures(this.idclient,this.idcontrat).subscribe((datas) => {
          console.log(datas);
          this.Factures = datas as any[];
          console.log(this.Factures);
        });
      }
    });
  }

  removefacture(id: number): void {
    this.clientservice.removefacture(id).subscribe(() => {  
      this.route.queryParams.subscribe(params => {
        this.idcontrat = +params['id'];
        this.idclient = +params['idcli'];
        console.log(this.idcontrat, this.idclient );
        if (this.idcontrat && this.idclient) {
          this.clientservice.getallfactures(this.idclient,this.idcontrat).subscribe((datas) => {
            console.log(datas);
            this.Factures = datas as any[];
            console.log(this.Factures);
          });
        }
      });
    });
  }
  openform() {
    this.isFormOpen = true;
    this.scrollToForm();
  }

  scrollToForm() {
    if (this.factureFormElement) {
      // Use nativeElement to access the actual DOM element
      this.factureFormElement.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  private initForm() {
    this.factureForm = this.fb.group({
      designation: ['', Validators.required],
      currency: ['', Validators.required],
      invoice_number: [null, Validators.required],
      facture_date: [null, Validators.required],
      due_date: [null, Validators.required],
      total_amount: [null, Validators.required],
      paid_amount: [null, Validators.required],
      payment_status: ['', Validators.required],
      notes: [''],
      milestone_description: [''],

    });
  }
  onSubmit(): void {
    if (this.factureForm.valid) {
      
      const facture = this.factureForm.value;
      this.clientservice.addfacture(facture,this.idclient!,this.idcontrat!).subscribe(
        (idContract) => {
          console.log('contrat added successfully with ID:', idContract);
          window.location.reload();
        },
        (error) => {
          console.error('Error adding contrat:', error);
        }
      );
    }
  }
}
