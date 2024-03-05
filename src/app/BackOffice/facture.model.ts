import { Client } from "./client.model";
import {Contrat } from "./contrat.model";
import { Paiment } from "./paiment.model";

export interface Facture {
    idFacture?: number;
    designation: string;
    currency: string;
    invoiceNumber: number;
    factureDate: Date;
    dueDate: Date;
    totalAmount: number;
    paidAmount: number;
    paymentStatus: string; // "Outstanding", "Partially paid", "Paid"
    notes: string;
    milestoneDescription: string;
    client?: Client;
    contract?: Contrat;
    paiments?: Paiment[];
  }

  