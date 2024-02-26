import { HttpClient } from '@angular/common/http';
import { ClientsComponent } from './clients/clients.component';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './client.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceclientService {

  constructor(private http:HttpClient) { }
  
  URL = "http://localhost:8080/Clients";
  getall(){
    return this.http.get(this.URL+"/getall");
  }
  removeClient(id: number): Observable<any> {
    return this.http.delete(this.URL + "/" + id);

  }
  addclient(client: Client): Observable<number> {
    return this.http.post<number>(`${this.URL}/addclient`, client);
  }
}
