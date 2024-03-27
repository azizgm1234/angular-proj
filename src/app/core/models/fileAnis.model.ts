import { Absence } from './absence.model';

export interface FileAnis {
  id_file?: number;
  justification: Uint8Array; // or number[]
  filename: string;
  contentType: string;
  absence?: Absence;
}
