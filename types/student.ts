export interface Subject {
  name: string;
  marks: number;
}

export interface Student {
  roll: string;
  password: string;
  name: string;
  branch: string;
  semester: string;
  sgpa: number;
  cgpa: number;
  subjects: Subject[];
}