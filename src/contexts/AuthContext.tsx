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
    name: "Mehedi Hasan Utsobe",
    email: "hasan.student@edvance.edu",
    role: "student",
    avatar:
      "https://scontent.fkul8-3.fna.fbcdn.net/v/t1.6435-1/82645173_165071481390012_1796831570082922496_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=105&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeEcU-4HNfx9RTCnpQOcTN-NgWVh9v7-NJqBZWH2_v40muHWByfaFs_y2kAhrJ9UA47GTzdJVLJAI90hqX1hT-NO&_nc_ohc=oCILgKBlmdoQ7kNvwGKK3mA&_nc_oc=Adkkpwx05G2bVzXX4ejauejrffl3cjWQKD2B-aXwpiXoD12tp73b6YXIKrGEh_gxmvQ&_nc_zt=24&_nc_ht=scontent.fkul8-3.fna&_nc_gid=_HdWNnp1VmTxN_DODwbjlQ&oh=00_AfSw1GIihCe5OGRbR2LaAfZAXSVfZO5InIHWSz_AV5mfFg&oe=68A48587",
    course: "Computer Science",
    department: "Engineering",
  },
  {
    id: "2",
    name: "Mr. Zainudin Johari",
    email: "zainudin.lecturer@edvance.edu",
    role: "lecturer",
    avatar:
      "https://scontent.fkul8-5.fna.fbcdn.net/v/t39.30808-6/228085153_10158130164046516_7905203234856861080_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG02Lu1rjphJjZ0gocpP_G8FGhSB9bGX2gUaFIH1sZfaACleUjNijimSe5lZhdIJ4FsSRhN0lqGhgcfzVlzEPFY&_nc_ohc=gQGHj950wT8Q7kNvwE0IAx_&_nc_oc=AdmIurezhWYZX2lJ2CsicDGXu8S1HOiDsgzxpUylvx66iJQJbyvKS5hfjHvGvwJRg3Q&_nc_zt=23&_nc_ht=scontent.fkul8-5.fna&_nc_gid=iQBZQpkLpZmq9qKVVUM0oA&oh=00_AfSE8LhMxFJXVMmAKpkuV-LQ5sRsMJWtf0SoaSqJi2tN7w&oe=6882E05C",
    department: "Computer Science",
  },
  {
    id: "3",
    name: "Admin User",
    email: "admin@edvance.edu",
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
