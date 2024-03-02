import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidat } from './Candidat/candidat.model';

@Injectable({
  providedIn: 'root'
})
export class ServicecandidatService {
  
  constructor(private http: HttpClient) { }
  private apiUrl = 'http://localhost:8081/recrutement';
  
    addCandidat(candidat: Candidat):  Observable<any> {
      return this.http.post<Candidat>(`${this.apiUrl}/addcand`,candidat);
    }
  
  
  getAllCandidats(): Observable<Candidat[]> {
    return this.http.get<Candidat[]>(`${this.apiUrl}/retrieveAllC`);
  }

 
  removeCandidat(idRec: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteRec/${idRec}`);
  }

}