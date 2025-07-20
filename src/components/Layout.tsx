import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/contexts/AuthContext";
import {
  BookOpen,
  Calendar,
  GraduationCap,
  Home,
  LogOut,
  Settings,
  Users,
  FileText,
  Award,
  Bell,
} from "lucide-react";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  currentPage: string;
  onPageChange: (page: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  currentPage,
  onPageChange,
}) => {
  const { user, logout } = useAuth();

  if (!user) return null;

  const getNavigationItems = () => {
    const commonItems = [
      { id: "dashboard", label: "Dashboard", icon: Home },
      { id: "calendar", label: "Calendar", icon: Calendar },
    ];

    switch (user.role) {
      case "student":
        return [
          ...commonItems,
          { id: "subjects", label: "My Subjects", icon: BookOpen },
          { id: "grades", label: "Grades", icon: Award },
          { id: "enrollment", label: "Enrollment", icon: GraduationCap },
        ];
      case "lecturer":
        return [
          ...commonItems,
          { id: "my-classes", label: "My Classes", icon: BookOpen },
          { id: "students", label: "Students", icon: Users },
          { id: "materials", label: "Materials", icon: FileText },
        ];
      case "admin":
        return [
          ...commonItems,
          { id: "users", label: "User Management", icon: Users },
          { id: "courses", label: "Course Management", icon: BookOpen },
          { id: "announcements", label: "Announcements", icon: Bell },
        ];
      default:
        return commonItems;
    }
  };

  const navigationItems = getNavigationItems();

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case "admin":
        return "bg-red-100 text-red-800";
      case "lecturer":
        return "bg-blue-100 text-blue-800";
      case "student":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Beautiful Header */}
      <header className="backdrop-blur-xl bg-white/80 border-b border-white/20 shadow-beautiful">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-beautiful">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Ai-Era UMS
                </h1>
              </div>
              <Badge
                className={`${getRoleBadgeColor(
                  user.role
                )} px-3 py-1 text-xs font-medium rounded-full`}
              >
                {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
              </Badge>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center space-x-3 hover:bg-white/50 rounded-xl px-4 py-2 transition-all duration-200 hover-lift"
                >
                  <Avatar className="h-10 w-10 ring-2 ring-white shadow-beautiful">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left hidden sm:block">
                    <p className="font-medium text-slate-700">{user.name}</p>
                    <p className="text-xs text-slate-500">{user.email}</p>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-64 bg-white/95 backdrop-blur-xl border-white/20 shadow-beautiful-lg"
              >
                <DropdownMenuLabel className="px-4 py-3">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-slate-700">{user.name}</p>
                      <p className="text-sm text-slate-500">{user.email}</p>
                      <Badge
                        className={`${getRoleBadgeColor(
                          user.role
                        )} text-xs mt-1`}
                      >
                        {user.role}
                      </Badge>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-slate-200" />
                <DropdownMenuItem className="hover:bg-slate-50 transition-colors">
                  <Settings className="mr-3 h-4 w-4 text-slate-500" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-slate-200" />
                <DropdownMenuItem
                  onClick={logout}
                  className="hover:bg-red-50 text-red-600 transition-colors"
                >
                  <LogOut className="mr-3 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Beautiful Sidebar */}
        <aside className="w-72 min-h-screen backdrop-blur-xl bg-white/60 border-r border-white/20 shadow-beautiful">
          <nav className="p-6">
            <div className="space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                return (
                  <Button
                    key={item.id}
                    variant="ghost"
                    className={`w-full justify-start h-12 px-4 rounded-xl transition-all duration-200 hover-lift ${
                      isActive
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-beautiful hover:from-blue-600 hover:to-purple-600"
                        : "hover:bg-white/70 text-slate-700 hover:text-slate-900"
                    }`}
                    onClick={() => onPageChange(item.id)}
                  >
                    <Icon className="mr-3 h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    )}
                  </Button>
                );
              })}
            </div>

            {/* User info card in sidebar */}
            <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-white/20">
              <div className="flex items-center space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs">
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-700 truncate">
                    {user.name}
                  </p>
                  <p className="text-xs text-slate-500 truncate">{user.role}</p>
                </div>
              </div>
            </div>
          </nav>
        </aside>

        {/* Main Content with beautiful styling */}
        <main className="flex-1 overflow-auto">
          <div className="p-8">
            <div className="max-w-7xl mx-auto animate-fade-in">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
};
