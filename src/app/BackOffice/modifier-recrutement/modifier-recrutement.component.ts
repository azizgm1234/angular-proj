import { Component, OnInit } from '@angular/core';
import { ServicerecrutementService } from '../servicerecrutement.service';
import { Recrutement } from '../recrutement.model';
import { ActivatedRoute, Route } from '@angular/router';
import { TypeRecrutement } from '../addrecrutement/typeRecrutement.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-modifier-recrutement',
  templateUrl: './modifier-recrutement.component.html',
  styleUrls: ['./modifier-recrutement.component.css']
})


export class ModifierRecrutementComponent implements OnInit {
  
  constructor(private route: ActivatedRoute,private fb: FormBuilder, private recrutementservice:ServicerecrutementService){}



  idRec: number | undefined ;
  recrutementForm!: FormGroup;

  ngOnInit(): void {
    this.initForm();
    this.route.queryParams.subscribe(params => {
      this.idRec = +params['id'];
      
    });
    
  
  }
  onSubmit(): void {
    if (this.recrutementForm.valid && this.idRec) {
      const recrutements = this.recrutementForm.value;
      this.recrutementservice.updateRecrut(recrutements, this.idRec).subscribe(
        (idRec) => {
          console.log('recruitment edited successfully with ID:', idRec);
          window.location.reload();
        },
        (error) => {
          console.error("erreur", error);
        }
      );
    }
  }

  private initForm(): void {
    this.recrutementForm = this.fb.group({
      poste: ['', Validators.required],
      lieu: ['', Validators.required],
      typeRecrutement: [TypeRecrutement.OFFRE_EMPLOI || TypeRecrutement.ETUDIANT],
      objectifs: ['', [Validators.required, Validators.email]],
      problematique: ['', Validators.required],
      travailDemande: ['', Validators.required],
      postesVacants: ['', Validators.required],
      experience: ['', Validators.required],
      niveauDetude: ['', Validators.required],
      salaire: ['', Validators.required],
      langue: ['', Validators.required],
      sex: ['', Validators.required],
      description: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateCloture: ['', Validators.required],
      responsableRecrutement: ['', Validators.required],
      statut: ['', Validators.required],
      criteresSelection: ['', Validators.required],
      motsCles: ['', Validators.required],
      // Add other form controls as needed
    });}
}



















/*
  idRec: number  = 0;
  recrutement: Recrutement = {
    idRec: 0,
    poste: '',
    typeRecrutement:TypeRecrutement.ETUDIANT || TypeRecrutement.OFFRE_EMPLOI,
    lieu: '',
    postesVacants: '',
    objectifs: '',
    problematique: '',
    travailDemande: '',
    experience: '',
    niveauDetude: '',
    salaire: 0,
    langue: '',
    sex: '',
    description: '',
    dateDebut: new Date(),
    dateCloture: new Date(),
    responsableRecrutement: '',
    statut: '',
    criteresSelection: '',
    motsCles: ''
  }; 

  constructor(private route: ActivatedRoute, private servicerecrutementService: ServicerecrutementService) { }

  ngOnInit(): void {
    this.idRec = this.route.snapshot.params['id'];
    this.servicerecrutementService.getRecrutementById(this.idRec)
      .subscribe(
        (data: Recrutement) => {
          console.log('Recrutement data:', data); // Vérifiez les données renvoyées
          this.recrutement = data;
        },
        (error: any) => {
          console.error('Error loading recrutement:', error); // Affichez les erreurs
        }
      );
  }

  updateRecrut(): void {
    if (this.recrutement) {
      this.servicerecrutementService.updateRecrut(this.recrutement).subscribe(
        () => {
          console.log('Resource updated successfully');
      
        },
        (error) => {
          console.error('Error updating resource:', error);
        }
      );
    } else {
      console.error('Resource is not defined');
    }
  }
}









/*

export class ModifierRecrutementComponent implements OnInit {

 
  recrutements: Recrutement[] = [];
  selectedRecrutement: Recrutement | null = null;

  constructor(private recrutementService: ServicerecrutementService) { }

  ngOnInit(): void {  
   this.loadRecrutements();
   

  }

  loadRecrutements(): void {
    this.recrutementService.getAll().subscribe(
      (recrutements: Recrutement[]) => {
        this.recrutements = recrutements;
      },
      (error) => {
        console.error('Erreur lors du chargement des recrutements : ', error);
      }
    );
  }

  selectRecrutement(recrutement: Recrutement): void {
    this.selectedRecrutement = recrutement;
  }

  onSubmit(): void {
    if (this.selectedRecrutement) {
      this.recrutementService.updateRecrut(this.selectedRecrutement.idRec, this.selectedRecrutement).subscribe(
        (updatedRecrutement: Recrutement) => {
          console.log('Recrutement mis à jour avec succès : ', updatedRecrutement);
          // Réinitialiser la sélection après la mise à jour
          this.selectedRecrutement = null;
          // Recharger la liste des recrutements après la mise à jour
          this.loadRecrutements();
        },
        (error) => {
          console.error('Erreur lors de la mise à jour du recrutement : ', error);
        }
      );
    }
    console.log(this.recrutements.length); // Déplacement de la ligne ici
  
  }
}   */ 