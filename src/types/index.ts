export type UserRole = "student" | "lecturer" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  department?: string;
  course?: string;
}

export interface Student extends User {
  role: "student";
  studentId: string;
  year: number;
  gpa: number;
  enrolledSubjects: string[];
}

export interface Lecturer extends User {
  role: "lecturer";
  employeeId: string;
  subjects: string[];
  department: string;
}

export interface Admin extends User {
  role: "admin";
  employeeId: string;
  permissions: string[];
}

export interface Subject {
  id: string;
  name: string;
  code: string;
  credits: number;
  lecturer: string;
  schedule: ScheduleSlot[];
  description: string;
  department: string;
  year: number;
  semester: number;
}

export interface ScheduleSlot {
  day: string;
  startTime: string;
  endTime: string;
  room: string;
}

export interface Grade {
  subjectId: string;
  subjectName: string;
  subjectCode: string;
  grade: string;
  marks: number;
  totalMarks: number;
  semester: number;
  year: number;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  priority: "low" | "medium" | "high";
  targetRole?: UserRole[];
}

export interface Course {
  id: string;
  name: string;
  code: string;
  duration: number;
  department: string;
  subjects: string[];
}
