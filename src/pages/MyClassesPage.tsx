import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Users,
  Clock,
  MapPin,
  Calendar,
  Eye,
  Plus,
  Upload,
  Settings,
  BarChart3,
  Video,
  UserCheck,
  Award,
} from "lucide-react";

export const MyClassesPage: React.FC = () => {
  const [selectedSemester] = useState("Fall 2024");

  // Mock data for demonstration - Enhanced with more details
  const classes = [
    {
      id: 1,
      code: "CS-301",
      name: "Web Development",
      section: "A",
      semester: "Fall 2024",
      credits: 3,
      students: 45,
      activeStudents: 42,
      schedule: [
        {
          day: "Monday",
          time: "10:00 AM - 11:30 AM",
          room: "CS-101",
          type: "Lecture",
        },
        {
          day: "Wednesday",
          time: "10:00 AM - 11:30 AM",
          room: "CS-101",
          type: "Lecture",
        },
        {
          day: "Friday",
          time: "2:00 PM - 5:00 PM",
          room: "Lab-A",
          type: "Lab",
        },
      ],
      status: "Active",
      progress: 75,
      materials: 12,
      assignments: 8,
      pendingGrades: 23,
      attendance: 92,
      lastActivity: "2 hours ago",
      nextClass: "Monday 10:00 AM",
      courseSatisfaction: 4.6,
      weeklyHours: 4.5,
      upcomingDeadlines: [
        { title: "Assignment 3", date: "2024-01-20", type: "Assignment" },
        { title: "Midterm Exam", date: "2024-01-25", type: "Exam" },
      ],
    },
    {
      id: 2,
      code: "CS-205",
      name: "Database Systems",
      section: "B",
      semester: "Fall 2024",
      credits: 4,
      students: 38,
      activeStudents: 35,
      schedule: [
        {
          day: "Tuesday",
          time: "2:00 PM - 3:30 PM",
          room: "CS-205",
          type: "Lecture",
        },
        {
          day: "Thursday",
          time: "2:00 PM - 3:30 PM",
          room: "CS-205",
          type: "Lecture",
        },
        {
          day: "Thursday",
          time: "4:00 PM - 6:00 PM",
          room: "Lab-B",
          type: "Lab",
        },
      ],
      status: "Active",
      progress: 60,
      materials: 15,
      assignments: 6,
      pendingGrades: 18,
      attendance: 88,
      lastActivity: "1 day ago",
      nextClass: "Tuesday 2:00 PM",
      courseSatisfaction: 4.4,
      weeklyHours: 6,
      upcomingDeadlines: [
        { title: "Lab Report 2", date: "2024-01-18", type: "Lab" },
        { title: "Quiz 3", date: "2024-01-22", type: "Quiz" },
      ],
    },
    {
      id: 3,
      code: "CS-401",
      name: "Software Engineering",
      section: "A",
      semester: "Fall 2024",
      credits: 3,
      students: 52,
      activeStudents: 49,
      schedule: [
        {
          day: "Monday",
          time: "4:00 PM - 5:30 PM",
          room: "CS-301",
          type: "Lecture",
        },
        {
          day: "Wednesday",
          time: "4:00 PM - 5:30 PM",
          room: "CS-301",
          type: "Lecture",
        },
      ],
      status: "Active",
      progress: 45,
      materials: 18,
      assignments: 10,
      pendingGrades: 31,
      attendance: 95,
      lastActivity: "3 hours ago",
      nextClass: "Monday 4:00 PM",
      courseSatisfaction: 4.8,
      weeklyHours: 3,
      upcomingDeadlines: [
        { title: "Project Proposal", date: "2024-01-19", type: "Project" },
        { title: "UML Assignment", date: "2024-01-24", type: "Assignment" },
      ],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Completed":
        return "bg-blue-100 text-blue-800";
      case "Upcoming":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return "bg-green-500";
    if (progress >= 60) return "bg-blue-500";
    if (progress >= 40) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Beautiful Header */}
      <Card className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border-0 shadow-beautiful-lg hover-lift overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full -translate-y-16 translate-x-16"></div>
        <CardHeader className="pb-8 relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center space-x-3">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <span>My Classes</span>
              </CardTitle>
              <CardDescription className="text-lg text-slate-600 mt-2">
                Manage your courses for{" "}
                <span className="font-semibold">{selectedSemester}</span>
              </CardDescription>
            </div>
            <div className="flex space-x-3">
              <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-beautiful">
                <Plus className="h-4 w-4 mr-2" />
                Add Class
              </Button>
              <Button variant="outline" className="hover:bg-slate-50">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Beautiful Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-beautiful-lg hover-lift group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium">
                  Total Classes
                </p>
                <p className="text-3xl font-bold mt-2">{classes.length}</p>
                <p className="text-blue-100 text-xs mt-1">
                  {classes.reduce((sum, cls) => sum + cls.credits, 0)} Credits
                </p>
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
              <div>
                <p className="text-green-100 text-sm font-medium">
                  Total Students
                </p>
                <p className="text-3xl font-bold mt-2">
                  {classes.reduce((sum, cls) => sum + cls.students, 0)}
                </p>
                <p className="text-green-100 text-xs mt-1">
                  {classes.reduce((sum, cls) => sum + cls.activeStudents, 0)}{" "}
                  Active
                </p>
              </div>
              <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 shadow-beautiful-lg hover-lift group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm font-medium">
                  Pending Grades
                </p>
                <p className="text-3xl font-bold mt-2">
                  {classes.reduce((sum, cls) => sum + cls.pendingGrades, 0)}
                </p>
                <p className="text-purple-100 text-xs mt-1">
                  Requires attention
                </p>
              </div>
              <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform">
                <Award className="h-8 w-8 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0 shadow-beautiful-lg hover-lift group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm font-medium">
                  Avg Satisfaction
                </p>
                <p className="text-3xl font-bold mt-2">
                  {(
                    classes.reduce(
                      (sum, cls) => sum + cls.courseSatisfaction,
                      0
                    ) / classes.length
                  ).toFixed(1)}
                </p>
                <p className="text-orange-100 text-xs mt-1">Out of 5.0</p>
              </div>
              <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform">
                <Award className="h-8 w-8 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Classes Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {classes.map((cls) => (
          <Card
            key={cls.id}
            className="backdrop-blur-xl bg-white/80 border-0 shadow-beautiful-lg hover-lift group overflow-hidden"
          >
            <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {cls.code} - {cls.name}
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    Section {cls.section} • {cls.credits} Credits
                  </CardDescription>
                  <div className="flex items-center space-x-2 mt-2">
                    <Clock className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium text-green-600">
                      Next: {cls.nextClass}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className={getStatusColor(cls.status)}>
                    {cls.status}
                  </Badge>
                  <p className="text-xs text-slate-500 mt-1">
                    {cls.lastActivity}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Progress Bar */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-600">Course Progress</span>
                  <span className="font-semibold text-slate-800">
                    {cls.progress}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${getProgressColor(
                      cls.progress
                    )} transition-all duration-500`}
                    style={{ width: `${cls.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-4 gap-3">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <Users className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                  <p className="text-lg font-bold text-blue-600">
                    {cls.students}
                  </p>
                  <p className="text-xs text-blue-600">Students</p>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <UserCheck className="h-5 w-5 text-green-600 mx-auto mb-1" />
                  <p className="text-lg font-bold text-green-600">
                    {cls.attendance}%
                  </p>
                  <p className="text-xs text-green-600">Attendance</p>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <Award className="h-5 w-5 text-purple-600 mx-auto mb-1" />
                  <p className="text-lg font-bold text-purple-600">
                    {cls.pendingGrades}
                  </p>
                  <p className="text-xs text-purple-600">Pending</p>
                </div>
                <div className="text-center p-3 bg-orange-50 rounded-lg">
                  <BarChart3 className="h-5 w-5 text-orange-600 mx-auto mb-1" />
                  <p className="text-lg font-bold text-orange-600">
                    {cls.courseSatisfaction}
                  </p>
                  <p className="text-xs text-orange-600">Rating</p>
                </div>
              </div>

              {/* Upcoming Deadlines */}
              <div>
                <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-red-600" />
                  Upcoming Deadlines
                </h4>
                <div className="space-y-2">
                  {cls.upcomingDeadlines.slice(0, 2).map((deadline, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between text-sm p-2 bg-red-50 rounded-lg border border-red-100"
                    >
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="font-medium text-slate-700">
                          {deadline.title}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-slate-600">
                        <span className="text-red-600 font-medium">
                          {new Date(deadline.date).toLocaleDateString()}
                        </span>
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">
                          {deadline.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Schedule Preview */}
              <div>
                <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                  Schedule
                </h4>
                <div className="space-y-2">
                  {cls.schedule.slice(0, 2).map((schedule, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between text-sm p-2 bg-slate-50 rounded-lg"
                    >
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-slate-500" />
                        <span className="font-medium text-slate-700">
                          {schedule.day}
                        </span>
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            schedule.type === "Lecture"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-green-100 text-green-800"
                          }`}
                        >
                          {schedule.type}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-slate-600">
                        <span>{schedule.time}</span>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-3 w-3" />
                          <span>{schedule.room}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  {cls.schedule.length > 2 && (
                    <p className="text-xs text-slate-500 text-center">
                      +{cls.schedule.length - 2} more sessions
                    </p>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-200">
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  View Details
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="hover:bg-slate-50"
                >
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Analytics
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card className="backdrop-blur-xl bg-white/80 border-0 shadow-beautiful-lg hover-lift">
        <CardHeader>
          <CardTitle className="flex items-center space-x-3 text-xl">
            <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
              <Settings className="h-5 w-5 text-white" />
            </div>
            <span>Quick Actions</span>
          </CardTitle>
          <CardDescription>
            Common tasks for managing your classes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button className="h-20 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white flex-col space-y-2">
              <Upload className="h-6 w-6" />
              <span>Upload Material</span>
            </Button>
            <Button className="h-20 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white flex-col space-y-2">
              <Award className="h-6 w-6" />
              <span>Create Assignment</span>
            </Button>
            <Button className="h-20 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white flex-col space-y-2">
              <UserCheck className="h-6 w-6" />
              <span>Take Attendance</span>
            </Button>
            <Button className="h-20 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white flex-col space-y-2">
              <Video className="h-6 w-6" />
              <span>Schedule Meeting</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
