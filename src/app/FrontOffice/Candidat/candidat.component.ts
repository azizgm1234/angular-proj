import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Candidat } from './candidat.model';
import { ServicecandidatService } from '../servicecandidat.service'
@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent  implements OnInit {
 
  candidatForm!: FormGroup;
  message: string = '';
 
  constructor(private fb: FormBuilder, private candidatService: ServicecandidatService) {}

  ngOnInit(): void {
    this.initForm();
  }
  

   initForm(): void {
    this.candidatForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
    nationalite: ['', Validators.required],
      telephone: ['', Validators.required],
      adresse: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      genre: ['', Validators.required],
     // cvUrl: [''],
      //lettreMotivationUrl: [''],
      //portfolioUrl: [''],
    });}

    onSubmit(): void {
      if (!this.candidatForm.valid) {
        return; 
      }
      const formData = this.candidatForm.value;  
      this.candidatService.addCandidat(formData).subscribe(
        (candidat: any) => {
          console.log('candidat added successfully with ID:', candidat);
          window.alert('Votre demande a bien été reçue. À très bientôt!');
          this.candidatForm.reset();
        },
        (error: any) => {
          console.error('Error adding candidat:', error);
        }
      );
    }
    }


