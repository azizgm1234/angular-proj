import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Absence } from '../models/absence.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceAbsenceService {
  readonly URL = "http://localhost:8082/absence";

  constructor(private http:HttpClient) { }

  // uploadFile(file: File,id: any){
  //   const formData: FormData = new FormData();
  //   formData.append('file', file);

  //   return this.http.post(this.URL + '/upload/'+id, formData, {
  //     reportProgress: true,
  //     observe: 'events'
  //   }).pipe(
  //     map(event => this.getUploadProgress(event)),
  //   );
  // }

  // private getUploadProgress(event: any): number |null {
  //   if (event.type === HttpEventType.UploadProgress) {
  //     const percentDone = Math.round((event.loaded / event.total) * 100);
  //     return percentDone;
  //   }
  //   return null;
  // }

  // getFiles(){
  //   return this.http.get<File[]>(this.URL + '/files');
  // }

  // getJustificationFile(absenceId: number){
  //   const url = `${this.URL}/OneFile/${absenceId}`;
  //   return this.http.get(url, { responseType: 'blob' });
  // }

  // getFile(id: any){
  //   return this.http.get(this.URL+"/OneFile/"+id); 
  // }
  getall(){
    return this.http.get(this.URL+"/retrieveAll"); 
  }

  removeAbsence(id: number): Observable<any> {
    return this.http.delete(this.URL + "/deleteAbsence/" + id);

  }
  addAbsence(absence: Absence,p:number): Observable<number> {
    return this.http.post<number>(`${this.URL}/addAbsence/`+p, absence);
  }

  getAbsence(id: number): Observable<Absence>{
    return this.http.get<Absence>(this.URL+"/getAbsence/" + id);
  }
  
 // nahina l' : Observable<Absence> eli gatli aaleha miniar fel update
  updateAbsence(id: number, updatedAbsence: Absence) {
    return this.http.put<Absence>(this.URL + "/updateAbsence/" + id, updatedAbsence);
  }
}
