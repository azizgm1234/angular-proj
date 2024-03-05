import { Component } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { Facture } from '../facture.model';


@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css']
})
export class CalendrierComponent {
  factures: Facture[] = [];

  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  events: CalendarEvent[] = []; 



  // Convert Factures to CalendarEvents
  private convertFacturesToEvents(): void {
    this.events = this.factures.map((facture) => ({
      title: facture.designation,
      start: new Date(facture.dueDate),
      /*color: { primary: '#e44d26' } : { secondary: '#28a745' },*/
    }));
  }
}
