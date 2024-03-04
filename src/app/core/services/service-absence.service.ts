import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Absence } from '../models/absence.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceAbsenceService {
  readonly URL = "http://localhost:8082/absence";

  constructor(private http:HttpClient) { }

  getall(){
    return this.http.get(this.URL+"/retrieveAll"); 
  }

  removeAbsence(id: number): Observable<any> {
    return this.http.delete(this.URL + "/deleteAbsence/" + id);

  }
  addAbsence(absence: Absence): Observable<number> {
    return this.http.post<number>(`${this.URL}/addAbsence`, absence);
  }

  getAbsence(id: number): Observable<Absence>{
    return this.http.get<Absence>(this.URL+"/getAbsence/" + id);
  }
  
 // nahina l' : Observable<Absence> eli gatli aaleha miniar fel update
  updateAbsence(id: number, updatedAbsence: Absence) {
    return this.http.put<Absence>(this.URL + "/updateAbsence/" + id, updatedAbsence);
  }
}
