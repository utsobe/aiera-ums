import React, { useState } from "react";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { LoginPage } from "@/pages/LoginPage";
import { RegistrationPage } from "@/pages/RegistrationPage";
import { FeatureShowcase } from "@/pages/FeatureShowcase";
import { StudentDashboard } from "@/pages/StudentDashboard";
import { LecturerDashboard } from "@/pages/LecturerDashboard";
import { MyClassesPage } from "@/pages/MyClassesPage";
import { StudentsPage } from "@/pages/StudentsPage";
import { MaterialsPage } from "@/pages/MaterialsPage";
import { SubjectEnrollment } from "@/pages/SubjectEnrollment";
import { GradesPage } from "@/pages/GradesPage";
import { CalendarPage } from "@/pages/CalendarPage";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import type { Student } from "@/types";
import "./App.css";

const AppContent: React.FC = () => {
  const { user } = useAuth();
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [showRegistration, setShowRegistration] = useState(false);
  const [showShowcase, setShowShowcase] = useState(false);

  if (!user) {
    if (showShowcase) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-lg font-semibold">Feature Overview</h2>
              <Button onClick={() => setShowShowcase(false)}>
                Back to Login
              </Button>
            </div>
            <FeatureShowcase />
          </div>
        </div>
      );
    }

    if (showRegistration) {
      return (
        <RegistrationPage onBackToLogin={() => setShowRegistration(false)} />
      );
    }

    return (
      <div>
        <div className="text-center my-4">
          <Button
            variant="outline"
            onClick={() => setShowShowcase(true)}
            className=""
          >
            View Project Features
          </Button>
        </div>
        <LoginPage onShowRegistration={() => setShowRegistration(true)} />
      </div>
    );
  }

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
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
        if (user.role === "lecturer") {
          return <LecturerDashboard lecturer={user} />;
        }
        return (
          <div className="p-8 text-center">
            Dashboard for {user.role} coming soon...
          </div>
        );

      case "subjects":
      case "enrollment":
        return <SubjectEnrollment />;

      case "grades":
        return <GradesPage />;

      case "calendar":
        return <CalendarPage />;

      case "my-classes":
        return <MyClassesPage />;

      case "students":
        return <StudentsPage />;

      case "materials":
        return <MaterialsPage />;

      default:
        return (
          <div className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">{currentPage}</h2>
            <p className="text-gray-600">This feature is coming soon...</p>
          </div>
        );
    }
  };

  return (
    <Layout currentPage={currentPage} onPageChange={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
