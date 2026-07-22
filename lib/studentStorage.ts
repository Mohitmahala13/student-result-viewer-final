import { Student } from "@/types/student";

const STORAGE_KEY = "students";

export function getStudents(defaultStudents: Student[]): Student[] {
  if (typeof window === "undefined") return defaultStudents;

  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultStudents));
    return defaultStudents;
  }

  return JSON.parse(saved);
}

export function saveStudents(students: Student[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
}