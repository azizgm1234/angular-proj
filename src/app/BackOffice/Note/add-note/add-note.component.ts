import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceNoteService } from 'src/app/core/services/service-note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  NoteForm!: FormGroup;
  isEditMode: boolean = false;
  NoteId: number | null = null;  

  constructor(private fb: FormBuilder,
    private NoteService: ServiceNoteService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

    ngOnInit(): void {
      this.initForm(); 
      this.checkEditMode();
      
    }
  
    private checkEditMode(): void {
      this.route.params.subscribe(params => {
        const id = params['id'];
        if (id) {
          this.isEditMode = true;
          this.NoteId = +id;
          this.fetchDepartementDetails();
        }
      });
    }
    private fetchDepartementDetails(): void {
      if (this.NoteId !== null) {
        this.NoteService.getNote(this.NoteId).subscribe((conge) => {
          this.NoteForm.patchValue({
            note: conge.note,

          });
    
            });
      }
    }
    
    private initForm(): void {  
      this.NoteForm = this.fb.group({
        note: ['', Validators.required],

      });}

      onSubmit(): void {
        if (this.NoteForm.valid) {
          const CongeData = this.NoteForm.value; 
          if (this.isEditMode && this.NoteId !== null) {
            this.NoteService.updateNote(this.NoteId,CongeData).subscribe(() => {
              console.log('Note updated successfully');
            });
          }
          else{
            this.NoteService.addNote(CongeData).subscribe(
              (id_departement: number) => {
            
                console.log('departement added successfully with ID:', id_departement);
                  
              } ,
              (error) => {
                console.error('Error adding departement:', error);
              }
            );
            
      }
    }
  }

      onCancel(): void {
        if (this.isEditMode) {
          this.router.navigate(['admin/listdepartements']);
        } else {
          this.router.navigate(['admin/homeb']);
        }
      }
}
