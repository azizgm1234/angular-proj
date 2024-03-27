import { Employee } from "./employee.model";

export interface Conge {
    id_conge?: number;
    date_debut: Date;
    date_fin: Date;
    typeC: typeC;
    statutC: StatutC;
    commentaire: String;
    justification: String;
    employee?: Employee;
    // 27404688
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