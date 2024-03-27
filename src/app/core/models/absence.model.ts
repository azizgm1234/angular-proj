
import { FileAnis } from './fileAnis.model';
import { Employee } from './employee.model';


export interface Absence {
  id_absence?: number;
  motif: string;
  date: Date;
  validee: boolean;
  emp?: Employee;
  // fileAnis?:FileAnis;
}