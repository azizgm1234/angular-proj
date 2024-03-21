export interface Task {
    taskid: number;
    taskname: string;
    taskdescription: string;
    owner: string;
    startDate: Date;
    endDate: Date;
    duration: string;
    priority: Priority;
    progression: number;
    status: TaskStatus;
    dueDate: Date;
    typeDependance: TypeDependance;
    project: Project;
  }
  
  export enum Priority {
    HIGH = 'HIGH',
    MEDIUM = 'MEDIUM',
    LOW = 'LOW'
  }
  
  export enum TaskStatus {
    TODO = 'TODO',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'
  }
  
  export enum TypeDependance {
    DD ='DD',
    FD='FD',
    DF='DF',
    FF='FF'
  }
  
  export interface Project {
    // Définissez ici les attributs de l'entité Project si nécessaire
  }
  