import { Employee } from './employee.model';

export interface Absence {
  id_absence?: number;
  motif: string;
  justification: string;
  date: Date;
  validee: boolean;
  emp?: Employee;
}