// client.model.ts
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
  
  export interface Facture {
    // Define the properties of the Facture entity if needed
  }
  
  export interface Paiment {
    // Define the properties of the Paiment entity if needed
  }
  
  export interface Contract {
    // Define the properties of the Contract entity if needed
  }
  