import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { User, UserRole } from "@/types";

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: UserRole) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data
const mockUsers: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.student@aiera.edu",
    role: "student",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    course: "Computer Science",
    department: "Engineering",
  },
  {
    id: "2",
    name: "Dr. Sarah Wilson",
    email: "sarah.lecturer@aiera.edu",
    role: "lecturer",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b19a90af?w=32&h=32&fit=crop&crop=face",
    department: "Computer Science",
  },
  {
    id: "3",
    name: "Admin User",
    email: "admin@aiera.edu",
    role: "admin",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
  },
];

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (
    email: string,
    password: string,
    role: UserRole
  ): Promise<boolean> => {
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const foundUser = mockUsers.find(
      (u) => u.email === email && u.role === role
    );

    if (foundUser && password === "password123") {
      setUser(foundUser);
      setIsLoading(false);
      return true;
    }

    setIsLoading(false);
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
