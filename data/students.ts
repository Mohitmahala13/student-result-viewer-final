import { Student } from "@/types/student";

export const students: Student[] = [
  {
    roll: "23SKIT001",
    password: "12345",
    name: "Mohit Mahala",
    branch: "Computer Science",
    semester: "5th Semester",
    sgpa: 9.1,
    cgpa: 8.95,
    subjects: [
      { name: "Data Structures", marks: 92 },
      { name: "Operating Systems", marks: 88 },
      { name: "DBMS", marks: 90 },
      { name: "Computer Networks", marks: 85 },
      { name: "Software Engineering", marks: 95 },
    ],
  },

  {
    roll: "23SKIT002",
    password: "12345",
    name: "Rahul Sharma",
    branch: "Information Technology",
    semester: "5th Semester",
    sgpa: 8.7,
    cgpa: 8.5,
    subjects: [
      { name: "Data Structures", marks: 82 },
      { name: "Operating Systems", marks: 84 },
      { name: "DBMS", marks: 87 },
      { name: "Computer Networks", marks: 80 },
      { name: "Software Engineering", marks: 90 },
    ],
  },
];