import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})

export class SericeEmployeeService {
  
  readonly URL = "http://localhost:8082/employee";
  constructor(private http:HttpClient) { }

  getall(){
    return this.http.get<Employee[]>(this.URL+"/retrieveAll");
  }

  removeEmployee(id: number): Observable<any> {
    return this.http.delete(this.URL + "/DeleteEmployee/" + id);

  }

  addEmployee(employee: Employee,id:any){
    return this.http.post<number>(`${this.URL}/addEmployee/`+id, employee);
  }
  
  updateEmployee(p: number, updatedemployee: Employee){
    return this.http.put<Employee>(`${this.URL}/updateEmployee/`+p, updatedemployee);
  }

  getEmployee(id: number){
    return this.http.get<Employee>(this.URL+"/getEmployee/" + id);
  }

}
