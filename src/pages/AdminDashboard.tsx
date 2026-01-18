import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Users,
  BookOpen,
  Bell,
  TrendingUp,
  UserCheck,
  GraduationCap,
  Shield,
  AlertTriangle,
  Calendar,
  FileText,
  Settings,
  PlusCircle,
} from "lucide-react";
import type { User } from "@/types";

interface AdminDashboardProps {
  admin: User;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ admin }) => {
  // Mock data for demonstration
  const systemStats = {
    totalUsers: 1247,
    totalStudents: 1089,
    totalLecturers: 147,
    totalAdmins: 11,
    totalCourses: 84,
    totalSubjects: 312,
    activeEnrollments: 2847,
    pendingRequests: 23,
  };

  const recentActivities = [
    {
      action: "New student registered: Ahmad Rahman",
      time: "15 minutes ago",
      type: "user",
      priority: "low",
    },
    {
      action: "Course updated: Computer Science 2024",
      time: "1 hour ago",
      type: "course",
      priority: "medium",
    },
    {
      action: "System backup completed successfully",
      time: "2 hours ago",
      type: "system",
      priority: "low",
    },
    {
      action: "Security alert: Multiple failed logins",
      time: "3 hours ago",
      type: "security",
      priority: "high",
    },
    {
      action: "New lecturer onboarded: Dr. Fatimah Ali",
      time: "1 day ago",
      type: "user",
      priority: "medium",
    },
  ];

  const systemAlerts = [
    {
      title: "Server Maintenance Scheduled",
      description: "System will be down for 2 hours on Sunday",
      type: "maintenance",
      priority: "high",
    },
    {
      title: "Database Storage 85% Full",
      description: "Consider expanding storage capacity",
      type: "storage",
      priority: "medium",
    },
    {
      title: "Security Update Available",
      description: "Critical security patches ready for installation",
      type: "security",
      priority: "high",
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "user":
        return <Users className="h-4 w-4 text-blue-600" />;
      case "course":
        return <BookOpen className="h-4 w-4 text-green-600" />;
      case "system":
        return <Settings className="h-4 w-4 text-purple-600" />;
      case "security":
        return <Shield className="h-4 w-4 text-red-600" />;
      default:
        return <Bell className="h-4 w-4 text-gray-600" />;
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "maintenance":
        return <Settings className="h-5 w-5 text-orange-600" />;
      case "storage":
        return <FileText className="h-5 w-5 text-yellow-600" />;
      case "security":
        return <Shield className="h-5 w-5 text-red-600" />;
      default:
        return <AlertTriangle className="h-5 w-5 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Beautiful Welcome Section */}
      <Card className="bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50 border-0 shadow-beautiful-lg hover-lift overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-400/20 to-indigo-400/20 rounded-full translate-y-12 -translate-x-12"></div>
        <CardHeader className="pb-8 relative z-10">
          <div className="flex items-center space-x-6">
            <div className="relative">
              <Avatar className="h-20 w-20 ring-4 ring-white shadow-beautiful-lg">
                <AvatarImage src={admin.avatar} alt={admin.name} />
                <AvatarFallback className="text-2xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold">
                  {admin.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
            <div>
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Welcome, {admin.name}!
              </CardTitle>
              <CardDescription className="text-lg text-slate-600 mt-2">
                <span className="font-medium">System Administrator</span> •
                <span className="font-medium text-purple-600 ml-1">Admin</span>
              </CardDescription>
              <div className="flex items-center space-x-2 mt-3">
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 transition-colors">
                  Admin ID: AD2024001
                </Badge>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200 transition-colors">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                  System Online
                </Badge>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Beautiful System Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-beautiful-lg hover-lift group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium text-left">Total Users</p>
                <p className="text-3xl font-bold mt-2 text-left">
                  {systemStats.totalUsers}
                </p>
                <p className="text-blue-100 text-xs mt-1 text-left">Active accounts</p>
              </div>
              <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0 shadow-beautiful-lg hover-lift group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm font-medium text-left">
                  Total Courses
                </p>
                <p className="text-3xl font-bold mt-2 text-left">
                  {systemStats.totalCourses}
                </p>
                <p className="text-green-100 text-xs mt-1 text-left">Active programs</p>
              </div>
              <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 shadow-beautiful-lg hover-lift group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm font-medium text-left">
                  Enrollments
                </p>
                <p className="text-3xl font-bold mt-2 text-left">
                  {systemStats.activeEnrollments}
                </p>
                <p className="text-purple-100 text-xs mt-1 text-left">This semester</p>
              </div>
              <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0 shadow-beautiful-lg hover-lift group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm font-medium text-left">
                  Pending Requests
                </p>
                <p className="text-3xl font-bold mt-2 text-left">
                  {systemStats.pendingRequests}
                </p>
                <p className="text-orange-100 text-xs mt-1 text-left">
                  Require attention
                </p>
              </div>
              <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform">
                <Bell className="h-8 w-8 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed User Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="backdrop-blur-xl bg-white/80 border-0 shadow-beautiful-lg hover-lift">
          <CardHeader className="pb-6">
            <CardTitle className="flex items-center space-x-3 text-xl">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <span>Students</span>
            </CardTitle>
            <CardDescription>Active student accounts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">
                {systemStats.totalStudents}
              </p>
              <p className="text-sm text-slate-600">
                {(
                  (systemStats.totalStudents / systemStats.totalUsers) *
                  100
                ).toFixed(1)}
                % of total users
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-xl bg-white/80 border-0 shadow-beautiful-lg hover-lift">
          <CardHeader className="pb-6">
            <CardTitle className="flex items-center space-x-3 text-xl">
              <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                <UserCheck className="h-5 w-5 text-white" />
              </div>
              <span>Lecturers</span>
            </CardTitle>
            <CardDescription>Faculty members</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="text-4xl font-bold text-green-600 mb-2">
                {systemStats.totalLecturers}
              </p>
              <p className="text-sm text-slate-600">
                {(
                  (systemStats.totalLecturers / systemStats.totalUsers) *
                  100
                ).toFixed(1)}
                % of total users
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-xl bg-white/80 border-0 shadow-beautiful-lg hover-lift">
          <CardHeader className="pb-6">
            <CardTitle className="flex items-center space-x-3 text-xl">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <span>Admins</span>
            </CardTitle>
            <CardDescription>System administrators</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="text-4xl font-bold text-purple-600 mb-2">
                {systemStats.totalAdmins}
              </p>
              <p className="text-sm text-slate-600">
                {(
                  (systemStats.totalAdmins / systemStats.totalUsers) *
                  100
                ).toFixed(1)}
                % of total users
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent System Activities */}
        <Card className="backdrop-blur-xl bg-white/80 border-0 shadow-beautiful-lg hover-lift">
          <CardHeader className="pb-6">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center space-x-3 text-xl">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <span>Recent Activities</span>
                </CardTitle>
                <CardDescription>
                  Latest system activities and changes
                </CardDescription>
              </div>
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white"
              >
                <Calendar className="h-4 w-4 mr-2" />
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl border border-slate-200 hover:shadow-beautiful transition-all duration-200 hover-lift"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-slate-800 text-left">
                    {activity.action}
                  </p>
                  <p className="text-sm text-slate-600 text-left">{activity.time}</p>
                </div>
                <Badge className={getPriorityColor(activity.priority)}>
                  {activity.priority}
                </Badge>
              </div>
            ))}
            <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-beautiful">
              View Activity Log
            </Button>
          </CardContent>
        </Card>

        {/* System Alerts */}
        <Card className="backdrop-blur-xl bg-white/80 border-0 shadow-beautiful-lg hover-lift">
          <CardHeader className="pb-6">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center space-x-3 text-xl">
                  <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-white" />
                  </div>
                  <span>System Alerts</span>
                </CardTitle>
                <CardDescription>
                  Important notifications and warnings
                </CardDescription>
              </div>
              <Button
                size="sm"
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white"
              >
                <PlusCircle className="h-4 w-4 mr-2" />
                New Alert
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {systemAlerts.map((alert, index) => (
              <div
                key={index}
                className="p-4 bg-gradient-to-r from-slate-50 to-orange-50 rounded-xl border border-slate-200 hover:shadow-beautiful transition-all duration-200 hover-lift"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    {getAlertIcon(alert.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-slate-800 text-left">
                        {alert.title}
                      </h4>
                      <Badge className={getPriorityColor(alert.priority)}>
                        {alert.priority}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-600 mt-1 text-left">
                      {alert.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-beautiful">
              Manage All Alerts
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="backdrop-blur-xl bg-white/80 border-0 shadow-beautiful-lg hover-lift">
        <CardHeader className="pb-6">
          <CardTitle className="flex items-center space-x-3 text-xl">
            <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
              <Settings className="h-5 w-5 text-white" />
            </div>
            <span>Quick Actions</span>
          </CardTitle>
          <CardDescription>Common administrative tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button className="h-20 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-beautiful flex-col space-y-2">
              <Users className="h-6 w-6" />
              <span>Manage Users</span>
            </Button>
            <Button className="h-20 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-beautiful flex-col space-y-2">
              <BookOpen className="h-6 w-6" />
              <span>Manage Courses</span>
            </Button>
            <Button className="h-20 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-beautiful flex-col space-y-2">
              <Bell className="h-6 w-6" />
              <span>Send Announcement</span>
            </Button>
            <Button className="h-20 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-beautiful flex-col space-y-2">
              <FileText className="h-6 w-6" />
              <span>System Reports</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
