import { Component, OnInit } from '@angular/core';
import {RecruitmentFrontend} from '../RecrutementFrontend.model'
import {ServicefrontrecrutementService } from '../servicefrontrecrutement.service';
import { ServicerecrutementService } from 'src/app/BackOffice/servicerecrutement.service';
import { Recrutement } from 'src/app/BackOffice/recrutement.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allrecrutement',
  templateUrl: './allrecrutement.component.html',
  styleUrls: ['./allrecrutement.component.css'],
  providers: [ServicerecrutementService]
})

export class AllrecrutementComponent implements OnInit {
 // recrutements: RecruitmentFrontend[] = [];
 recrutements: Recrutement[] = [];

  
  constructor(private router: Router, private recrutementService: ServicerecrutementService) {}

  ngOnInit(): void {
    this.recrutementService.getAll().subscribe((data: Recrutement[]) => {
      this.recrutements = data;
    });

    

}
}
