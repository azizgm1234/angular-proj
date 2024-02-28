import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resources } from './resources.model';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor(private http:HttpClient) { }

  URL = "http://localhost:8089/resource";

  getResources(){
    return this.http.get(this.URL+"/retrieve-all-resources");
  }
  removeResource(id: number): Observable<any> {
    return this.http.delete(this.URL + "/removeResource/" + id);

  }
  addResource(resource: Resources): Observable<number> {
    return this.http.post<number>(`${this.URL}/add-resource`, resource);
  }

  updateResource(resource: Resources): Observable<Resources> {
    return this.http.put<Resources>(`${this.URL}/update-resource`, resource);
  }

  retrieveResource(id: number){
    return this.http.get(this.URL+"/retrieve-resource/"+id);
  }

}
