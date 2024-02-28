export interface Fournisseur {
    fournisseurID?: number;
    nom: string;
    address: string;
    contact: string;
    typeFournisseur: TypeFournisseur;
    score: number;
    stocks?: Stock[];
}

export enum TypeFournisseur {
    ELECTRONICS,FURNITURE,VEHICULES
}

export interface Stock {
    
}