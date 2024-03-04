import { Employee } from "./employee.model";

export interface Conge {
    id_conge?: number;
    date_debut: Date;
    date_fin: Date;
    CongeType: typeC;
    CongeStatut: StatutC;
    commentaire: String;
    justification: String;
    emp?: Employee;
}

export enum typeC {
    PAYE,
    MALADIE,
    MATERNITE,
    PATERNITE,
    FAMILIALE,
    SABBATIQUE
}
export enum StatutC {
    PENDING,
    REJECTED,
    VALIDATED,
}