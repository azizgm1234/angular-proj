import { HttpClient } from '@angular/common/http';
import { ClientsComponent } from './clients/clients.component';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './client.model';
import { Contrat} from './contrat.model';
import { Facture } from './facture.model';

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
  updateClient(client: Client , id:number): Observable<number> {
    return this.http.put<number>(`${this.URL}/updateclient/`+ id , client);
  }
  getContractbyclient(id:number):Observable<any> {
    return this.http.get(this.URL + "/getcontartbyidclient/" + id);
}
addContract(contrat: Contrat , id:number): Observable<number> {
  return this.http.post<number>(`${this.URL}/addcontrat/`+ id , contrat);
}

removeContrat(idcont:number): Observable<any> {
  return this.http.delete(this.URL + "/contrat/" + idcont);
}
updateContrat(contrat: Contrat , id:number): Observable<number> {
  return this.http.put<number>(`${this.URL}/updatecontrat/`+ id , contrat);
}

getallfactures(idclient:number,idcontrat:number):Observable<any> {
  return this.http.get(this.URL + "/facture/getall/" +idclient+ "/" +idcontrat);
}
removefacture(id:number): Observable<any> {
  return this.http.delete(this.URL + "/facture/" + id);
}
addfacture(facture: Facture , idclient:number,idcontrat:number): Observable<number> {
  return this.http.post<number>(`${this.URL}/addfacture/`+ idclient +"/"+ idcontrat, facture);
}
}
