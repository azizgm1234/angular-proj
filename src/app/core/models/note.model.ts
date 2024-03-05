import { PerformanceEmployee } from './performanceEmployee.model';

export interface Note {
  id_note?: number;
  note: number;
  perfEmpl?: PerformanceEmployee;
}