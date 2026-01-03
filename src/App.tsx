import React from "react";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { LoginPage } from "@/pages/LoginPage";
import { FeatureShowcase } from "@/pages/FeatureShowcase";
import { StudentDashboard } from "@/pages/StudentDashboard";
import { LecturerDashboard } from "@/pages/LecturerDashboard";
import { AdminDashboard } from "@/pages/AdminDashboard";
import { MyClassesPage } from "@/pages/MyClassesPage";
import { StudentsPage } from "@/pages/StudentsPage";
import { MaterialsPage } from "@/pages/MaterialsPage";
import { UserManagement } from "@/pages/UserManagement";
import { CourseManagement } from "@/pages/CourseManagement";
import { AnnouncementManagement } from "@/pages/AnnouncementManagement";
import { SubjectEnrollment } from "@/pages/SubjectEnrollment";
import { GradesPage } from "@/pages/GradesPage";
import { CalendarPage } from "@/pages/CalendarPage";
import { Layout } from "@/components/Layout";
import ProtectedRoute from "@/components/ProtectedRoute";
import type { Student } from "@/types";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

const DashboardRouter: React.FC = () => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" replace />;

  if (user.role === "student") {
    const studentData: Student = {
      ...user,
      role: "student",
      studentId: "ST2024001",
      year: 3,
      gpa: 3.75,
      enrolledSubjects: ["CS-301", "CS-201", "CS-251", "CS-351"],
    };
    return <StudentDashboard student={studentData} />;
  }

  if (user.role === "lecturer") return <LecturerDashboard lecturer={user} />;
  if (user.role === "admin") return <AdminDashboard admin={user} />;

  return (
    <div className="p-8 text-center">
      Dashboard for {user.role} coming soon...
    </div>
  );
};

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/feature" element={<FeatureShowcase />} />

      <Route
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<DashboardRouter />} />
        <Route path="/subjects" element={<SubjectEnrollment />} />
        <Route path="/enrollment" element={<SubjectEnrollment />} />
        <Route path="/grades" element={<GradesPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/my-classes" element={<MyClassesPage />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/materials" element={<MaterialsPage />} />
        <Route path="/users" element={<UserManagement />} />
        <Route path="/courses" element={<CourseManagement />} />
        <Route path="/announcements" element={<AnnouncementManagement />} />
      </Route>
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
