import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContratEmployee } from '../models/contratEmployee.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceContratEmplService {
  readonly URL = "http://localhost:8082/contratEmpl";
  constructor(private http:HttpClient) { }

  
  getall(){
    return this.http.get<ContratEmployee[]>(this.URL+"/retrieveAll");
  }

  deleteContratEmployee(id: number){
    return this.http.delete(this.URL + "/deleteContratEmployee/" + id);
  }

  saveContratEmployee(employee: ContratEmployee,id:any){
    return this.http.post<number>(`${this.URL}/saveContratEmployee/`+id, employee);
  }

  updateContratEmployee(updatedemployee: ContratEmployee,id: any){
    return this.http.put<number>(`${this.URL}/updateContratEmployee/`+id, updatedemployee);
  }

  getContratEmployee(id: number){
    return this.http.get<ContratEmployee>(this.URL+"/getContratEmployee/" + id);
  }
}
