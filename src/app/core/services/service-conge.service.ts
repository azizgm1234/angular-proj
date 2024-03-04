import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conge } from '../models/conge.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceCongeService {
  readonly URL = "http://localhost:8082/Conge";

  constructor(private http:HttpClient) { }

  getall(){
    return this.http.get(this.URL+"/retrieveAll"); 
  }

  removeConge(id: number): Observable<any> {
    return this.http.delete(this.URL + "/deleteConge/" + id);

  }
  addConge(conge: Conge): Observable<number> {
    return this.http.post<number>(`${this.URL}/saveConge`, conge);  
  }

  getConge(id: number): Observable<Conge>{
    return this.http.get<Conge>(this.URL+"/getConge/" + id);
  }

  updateConge(id: number, updatedconge: Conge): Observable<Conge> {
    return this.http.put<Conge>(this.URL + "/updateConge/" + id, updatedconge);
  }
}
