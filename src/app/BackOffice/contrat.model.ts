
export interface Contrat {
    idContract?: number;
    contractDate: string;
    startdate: string;
    endDate: string;
    version: number;
    currency: string;
    payment_terms: string;
    contract_status: string;
    typeContrat: TypeContrat; // Make sure to import the TypeContrat enum
    client: Client;
    detailContract: DetailContract;
    factures?: Facture[];
  }
  
  export enum TypeContrat {
    // Define your enum values if not already defined
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
    contracts?: Contrat[];
  }
  
  export interface DetailContract {
    // Define the properties of the DetailContract entity if needed
  }
  
  export interface Facture {
    // Define the properties of the Facture entity if needed
  }
  
  export interface Paiment {
    // Define the properties of the Paiment entity if needed
  }
  