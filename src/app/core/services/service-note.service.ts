import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceNoteService { 
  readonly URL = "http://localhost:8082/Note";

  constructor(private http:HttpClient) { }
  getall(){
    return this.http.get<Note[]>(this.URL+"/retrieveAll");
  }

  removeNote(id: number) {
    return this.http.delete(this.URL + "/deleteNote/" + id);

  }

  addNote(employee: Note){
    return this.http.post<number>(`${this.URL}/addNote`, employee);
  }
  updateNote(id: number, updatedemployee: Note){
    return this.http.put<Note>(`${this.URL}/updateNote/`+id, updatedemployee);
  }


  getNote(id: number){
    return this.http.get<Note>(this.URL+"/getNote/" + id);
  }
 
}
