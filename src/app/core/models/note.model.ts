import { PerformanceEmployee } from './performanceEmployee.model';

export interface Note {
  id_note?: number;
  critere:critereNote;
  note: number;
  perfEmpl?: PerformanceEmployee;
}

export enum critereNote {
  CDI_CLASSIQUE,
  CIVP,
}