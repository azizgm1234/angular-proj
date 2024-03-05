import { Client } from "./client.model";
import { Facture } from "./facture.model";

export interface Contrat {
    idContract?: number;
    contractDate: Date;
    startdate: Date;
    endDate: Date;
    version: number;
    item_description: string;
    payment_terms: number;
    contract_status: string;
    typeContrat: TypeContrat; // Make sure to import the TypeContrat enum
    client: Client;
    factures?: Facture[];
  }
  
  export enum TypeContrat {
    // Define your enum values if not already defined
  }
  
