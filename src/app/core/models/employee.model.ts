import { Absence } from "./absence.model";
import { Conge } from "./conge.model";
import { ContratEmployee } from "./contratEmployee.model";
import { Departement } from "./departement.model";
import { PerformanceEmployee } from "./performanceEmployee.model";
import { SalaireEmployee } from "./salaireEmployee.model";

export interface Employee {
    id_employe?: number;
    date_embauche: Date ;
    posteEmployee: PosteEmployee;
    departement: Departement;
    conges: Conge[];
    salaireEmployees: SalaireEmployee[];
    performanceEmployee: PerformanceEmployee;
    contratEmployees: ContratEmployee[];
    absences: Absence[];
    team: Team;
    userId: number;
}

export class Team{

}

export enum PosteEmployee {
    AGENT_ACCUEIL,
    AGENT_NETTOYAGE,
    AGENT_PRODUCTION,
    AGENT_SECURITE,
    ARCHITECTE,
    ASSISTANT_ADMINISTRATIF,
    ASSISTANT_DE_DIRECTION,
    AVOCAT,
    CARISTE,
    CHAUFFEUR,
    CHEF_EQUIPE,
    CHEF_PROJET,
    CHARGE_DE_MARKETING,
    COMMERCIAL,
    COMPTABLE,
    CONSEILLER_CLIENTELE,
    DEVELOPPEUR_WEB,
    DIRECTEUR_COMMERCIAL,
    DIRECTEUR_FINANCIER,
    DIRECTEUR_GENERAL,
    DIRECTEUR_RESSOURCES_HUMAINES,
    ELECTRICIEN,
    EMPLOYE_MAISON,
    ENSEIGNANT,
    HOTE_CAISSE,
    INGENIEUR,
    INGENIEUR_INFORMATIQUE,
    INFIRMIER,
    JARDINIER,
    MANAGER,
    MANUTENTIONNAIRE,
    MECANICIEN,
    OPERATEUR_MACHINE,
    OUVRIER_USINE,
    PLOMBIER,
    RESPONSABLE_RESSOURCES_HUMAINES,
    SECRETAIRE,
    SERVEUR,
    TECHNICIEN_MAINTENANCE,
    TELECONSEILLER,
    VENDEUR
}