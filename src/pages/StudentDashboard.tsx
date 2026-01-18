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
  BookOpen,
  Calendar,
  Clock,
  GraduationCap,
  TrendingUp,
  Bell,
  CheckCircle,
  MapPin,
  Star,
} from "lucide-react";
import type { Student } from "@/types";

interface StudentDashboardProps {
  student: Student;
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({
  student,
}) => {
  // Mock data for demonstration
  const upcomingClasses = [
    {
      subject: "Data Structures",
      time: "10:00 AM",
      room: "CS-101",
      type: "Lecture",
    },
    {
      subject: "Database Systems",
      time: "2:00 PM",
      room: "CS-205",
      type: "Lab",
    },
    {
      subject: "Software Engineering",
      time: "4:00 PM",
      room: "CS-301",
      type: "Tutorial",
    },
  ];

  const recentGrades = [
    { subject: "Web Development", grade: "A-", marks: "87/100" },
    { subject: "Data Structures", grade: "B+", marks: "82/100" },
    { subject: "Database Systems", grade: "A", marks: "92/100" },
  ];

  const announcements = [
    {
      title: "Mid-term Exam Schedule Released",
      time: "2 hours ago",
      priority: "high",
    },
    { title: "Library Hours Extended", time: "1 day ago", priority: "medium" },
    {
      title: "New Course Registration Opens",
      time: "3 days ago",
      priority: "medium",
    },
  ];

  const getGradeColor = (grade: string) => {
    if (grade.startsWith("A")) return "bg-green-100 text-green-800";
    if (grade.startsWith("B")) return "bg-blue-100 text-blue-800";
    if (grade.startsWith("C")) return "bg-yellow-100 text-yellow-800";
    return "bg-gray-100 text-gray-800";
  };

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

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Lecture":
        return "bg-blue-100 text-blue-800";
      case "Lab":
        return "bg-green-100 text-green-800";
      case "Tutorial":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Beautiful Welcome Section */}
      <Card className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border-0 shadow-beautiful-lg hover-lift overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full translate-y-12 -translate-x-12"></div>
        <CardHeader className="pb-8 relative z-10">
          <div className="flex items-start space-x-6">
            <div className="relative">
              <Avatar className="h-20 w-20 ring-4 ring-white shadow-beautiful-lg">
                <AvatarImage src={student.avatar} alt={student.name} />
                <AvatarFallback className="text-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold">
                  {student.name
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
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Welcome back, {student.name}!
              </CardTitle>
              <CardDescription className="text-lg text-slate-600 mt-2 flex items-center space-x-2">
                <span className="font-medium">{student.course}</span> • Year{" "}
                {student.year} •
                <span className="font-medium text-green-600 ml-1">
                  GPA: {student.gpa}
                </span>
              </CardDescription>
              <div className="flex items-center space-x-2 mt-3">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors">
                  Student ID: ST2024001
                </Badge>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200 transition-colors">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                  Active
                </Badge>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Beautiful Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-beautiful-lg hover-lift group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-start">
                <p className="text-blue-100 text-sm font-medium">
                  Enrolled Subjects
                </p>
                <p className="text-3xl font-bold mt-2">
                  {student.enrolledSubjects.length}
                </p>
                <p className="text-blue-100 text-xs mt-1">Active courses</p>
              </div>
              <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0 shadow-beautiful-lg hover-lift group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-start">
                <p className="text-green-100 text-sm font-medium">
                  Current GPA
                </p>
                <p className="text-3xl font-bold mt-2 flex items-center">
                  {student.gpa}
                  <Star
                    className="h-5 w-5 ml-2 text-yellow-300"
                    fill="currentColor"
                  />
                </p>
                <p className="text-green-100 text-xs mt-1">
                  Excellent performance
                </p>
              </div>
              <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 shadow-beautiful-lg hover-lift group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-start">
                <p className="text-purple-100 text-sm font-medium">
                  Today's Classes
                </p>
                <p className="text-3xl font-bold mt-2">
                  {upcomingClasses.length}
                </p>
                <p className="text-purple-100 text-xs mt-1">Scheduled events</p>
              </div>
              <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform">
                <Calendar className="h-8 w-8 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0 shadow-beautiful-lg hover-lift group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-start">
                <p className="text-orange-100 text-sm font-medium">
                  Attendance
                </p>
                <p className="text-3xl font-bold mt-2">85%</p>
                <p className="text-orange-100 text-xs mt-1">This semester</p>
              </div>
              <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Today's Schedule */}
        <Card className="backdrop-blur-xl bg-white/80 border-0 shadow-beautiful-lg hover-lift">
          <CardHeader className="pb-6">
            <CardTitle className="flex items-center space-x-3 text-xl">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <span>Today's Schedule</span>
            </CardTitle>
            <CardDescription >
              Your classes and activities for today
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingClasses.map((cls, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl border border-slate-200 hover:shadow-beautiful transition-all duration-200 hover-lift"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">
                      {cls.subject}
                    </p>
                    <div className="flex items-center space-x-3 text-sm text-slate-600">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{cls.time}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{cls.room}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Badge className={getTypeColor(cls.type)}>{cls.type}</Badge>
              </div>
            ))}
            <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-beautiful">
              View Full Timetable
            </Button>
          </CardContent>
        </Card>

        {/* Recent Grades */}
        <Card className="backdrop-blur-xl bg-white/80 border-0 shadow-beautiful-lg hover-lift">
          <CardHeader className="pb-6">
            <CardTitle className="flex items-center space-x-3 text-xl">
              <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <span>Recent Grades</span>
            </CardTitle>
            <CardDescription>Your latest academic performance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentGrades.map((grade, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-green-50 rounded-xl border border-slate-200 hover:shadow-beautiful transition-all duration-200 hover-lift"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">
                      {grade.subject}
                    </p>
                    <p className="text-sm text-slate-600">{grade.marks}</p>
                  </div>
                </div>
                <Badge
                  className={`${getGradeColor(grade.grade)} font-semibold`}
                >
                  {grade.grade}
                </Badge>
              </div>
            ))}
            <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-beautiful">
              View All Grades
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Announcements */}
      <Card className="backdrop-blur-xl bg-white/80 border-0 shadow-beautiful-lg hover-lift">
        <CardHeader className="pb-6">
          <CardTitle className="flex items-center space-x-3 text-xl">
            <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
              <Bell className="h-5 w-5 text-white" />
            </div>
            <span>Recent Announcements</span>
          </CardTitle>
          <CardDescription>Important updates and notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {announcements.map((announcement, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-orange-50 rounded-xl border border-slate-200 hover:shadow-beautiful transition-all duration-200 hover-lift"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <Bell className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">
                    {announcement.title}
                  </p>
                  <p className="text-sm text-slate-600">{announcement.time}</p>
                </div>
              </div>
              <Badge className={getPriorityColor(announcement.priority)}>
                {announcement.priority}
              </Badge>
            </div>
          ))}
          <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-beautiful">
            View All Announcements
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
