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
    contract?: Contract;
    paiments?: Paiment[];
  }
  
  export interface Client {
    idClient?: number;
    nom: string;
    prenom: string;
    email: string;
    phone: string;
    companyAddress: string;
    factures?: Facture[];
    paiments?: Paiment[];
    contracts?: Contract[];
  }
  
  export interface Paiment {
    // Define the properties of the Paiment entity if needed
  }
  
  export interface Contract {
    // Define the properties of the Contract entity if needed
  }
  