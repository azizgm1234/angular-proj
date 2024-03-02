import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recrutement } from './recrutement.model';
import { CommonModule } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class ServicerecrutementService {
   
  constructor(private http: HttpClient) { }
    private apiUrl = 'http://localhost:8081/recrutement';
   
  
    getAll(): Observable<Recrutement[]> {
    return this.http.get<Recrutement[]>(`${this.apiUrl}/getAll`);
    }
    
  addRecrutement(recrutement: Recrutement): Observable<any> {
    return this.http.post<Recrutement>(`${this.apiUrl}/addRecrutement`, recrutement);
  }  

 updateRecrut(recrutement: Recrutement, idRec: number): Observable<Recrutement> {
    return this.http.put<Recrutement>(`${this.apiUrl}/updateRecrutement/${idRec}`, recrutement);
  } 
 
    removeRecrutement(idRec: number): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/deleteRec/${idRec}`);
    }
  
    findByPoste(poste: string): Observable<Recrutement[]> {
      return this.http.get<Recrutement[]>(`${this.apiUrl}/findByPoste/${poste}`);
    }
 
    getRecrutementById(idRec: number): Observable<Recrutement> {
      return this.http.get<Recrutement>(`${this.apiUrl}/getRecrutementById/${idRec}`);
    }  

/*
    updateRecrut(recrutement: Recrutement): Observable<Recrutement> {
      return this.http.put<Recrutement>(`${this.apiUrl}/updateRecrutement`, recrutement);
    }
   */
}