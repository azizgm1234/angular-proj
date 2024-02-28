import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidat } from './Candidat/candidat.model';

@Injectable({
  providedIn: 'root'
})
export class ServicecandidatService {
  private apiUrl = 'http://localhost:8080'; // URL de votre backend Spring

  constructor(private http: HttpClient) { }

  getAllCandidats(): Observable<Candidat[]> {
    return this.http.get<Candidat[]>(`${this.apiUrl}/retrieveAllC`);
  }

  addCandidat(candidat: Candidat): Observable<Candidat> {
    return this.http.post<Candidat>(`${this.apiUrl}/addCand`, candidat);
  }
}