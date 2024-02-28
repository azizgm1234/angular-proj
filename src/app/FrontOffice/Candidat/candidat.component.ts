import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Candidat } from './candidat.model';
import { ServicecandidatService } from '../servicecandidat.service'
@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent {
  candidats: Candidat[] = [];


  
}
