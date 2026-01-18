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
  Clock,
  Users,
  TrendingUp,
  Bell,
  CheckCircle,
  MapPin,
  FileText,
  Award,
  PlusCircle,
} from "lucide-react";
import type { User } from "@/types";

interface LecturerDashboardProps {
  lecturer: User;
}

export const LecturerDashboard: React.FC<LecturerDashboardProps> = ({
  lecturer,
}) => {
  // Mock data for demonstration
  const upcomingClasses = [
    {
      subject: "Web Development",
      time: "10:00 AM",
      room: "CS-101",
      students: 45,
      type: "Lecture",
    },
    {
      subject: "Database Systems",
      time: "2:00 PM",
      room: "CS-205",
      students: 38,
      type: "Lab",
    },
    {
      subject: "Software Engineering",
      time: "4:00 PM",
      room: "CS-301",
      students: 52,
      type: "Tutorial",
    },
  ];

  const recentActivities = [
    {
      action: "Graded Assignment 3 for Web Development",
      time: "2 hours ago",
      type: "grading",
    },
    {
      action: "Uploaded new material for Database Systems",
      time: "1 day ago",
      type: "material",
    },
    {
      action: "Posted announcement about upcoming exam",
      time: "2 days ago",
      type: "announcement",
    },
  ];

  const announcements = [
    { title: "Faculty Meeting Tomorrow", time: "1 hour ago", priority: "high" },
    {
      title: "New Assessment Guidelines",
      time: "3 hours ago",
      priority: "medium",
    },
    { title: "Research Grant Deadline", time: "1 day ago", priority: "medium" },
  ];

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
      case "grading":
        return <Award className="h-4 w-4 text-green-600" />;
      case "material":
        return <FileText className="h-4 w-4 text-blue-600" />;
      case "announcement":
        return <Bell className="h-4 w-4 text-orange-600" />;
      default:
        return <CheckCircle className="h-4 w-4 text-gray-600" />;
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
                <AvatarImage src={lecturer.avatar} alt={lecturer.name} />
                <AvatarFallback className="text-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold">
                  {lecturer.name
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
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-left">
                Welcome, Mr. {lecturer.name.split(" ")[1]}!
              </CardTitle>
              <CardDescription className="text-lg text-slate-600 mt-2">
                <span className="font-medium">{lecturer.department}</span>{" "}
                Department •
                <span className="font-medium text-blue-600 ml-1">Lecturer</span>
              </CardDescription>
              <div className="flex items-center space-x-2 mt-3">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors">
                  Staff ID: LC2024001
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
              <div>
                <p className="text-blue-100 text-sm font-medium text-left">
                  Today's Classes
                </p>
                <p className="text-3xl font-bold mt-2 text-left">
                  {upcomingClasses.length}
                </p>
                <p className="text-blue-100 text-xs mt-1 text-left">Scheduled sessions</p>
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
                <p className="text-green-100 text-sm font-medium text-left">
                  Total Students
                </p>
                <p className="text-3xl font-bold mt-2 text-left">135</p>
                <p className="text-green-100 text-xs mt-1 text-left">
                  Across all classes
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
                <p className="text-purple-100 text-sm font-medium text-left">
                  Pending Grades
                </p>
                <p className="text-3xl font-bold mt-2 text-left">23</p>
                <p className="text-purple-100 text-xs mt-1 text-left">
                  Assignments to grade
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
                <p className="text-orange-100 text-sm font-medium text-left">Materials</p>
                <p className="text-3xl font-bold mt-2 text-left">47</p>
                <p className="text-orange-100 text-xs mt-1 text-left">Course resources</p>
              </div>
              <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform">
                <FileText className="h-8 w-8 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Today's Schedule */}
        <Card className="backdrop-blur-xl bg-white/80 border-0 shadow-beautiful-lg hover-lift">
          <CardHeader className="pb-6">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center space-x-3 text-xl">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <span>Today's Classes</span>
                </CardTitle>
                <CardDescription>
                  Your teaching schedule for today
                </CardDescription>
              </div>
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white"
              >
                <PlusCircle className="h-4 w-4 mr-2" />
                Add Class
              </Button>
            </div>
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
                    <p className="font-semibold text-slate-800 text-left">
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
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{cls.students} students</span>
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

        {/* Recent Activities */}
        <Card className="backdrop-blur-xl bg-white/80 border-0 shadow-beautiful-lg hover-lift">
          <CardHeader className="pb-6">
            <CardTitle className="flex items-center space-x-3 text-xl">
              <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <span>Recent Activities</span>
            </CardTitle>
            <CardDescription>Your latest teaching activities</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 bg-gradient-to-r from-slate-50 to-green-50 rounded-xl border border-slate-200 hover:shadow-beautiful transition-all duration-200 hover-lift"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-800 text-left">
                    {activity.action}
                  </p>
                  <p className="text-sm text-slate-600 text-left">{activity.time}</p>
                </div>
              </div>
            ))}
            <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-beautiful">
              View All Activities
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Faculty Announcements */}
      <Card className="backdrop-blur-xl bg-white/80 border-0 shadow-beautiful-lg hover-lift">
        <CardHeader className="pb-6">
          <CardTitle className="flex items-center space-x-3 text-xl">
            <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
              <Bell className="h-5 w-5 text-white" />
            </div>
            <span>Faculty Announcements</span>
          </CardTitle>
          <CardDescription>
            Important updates for faculty members
          </CardDescription>
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
                  <p className="font-semibold text-slate-800 text-left">
                    {announcement.title}
                  </p>
                  <p className="text-sm text-slate-600 text-left">{announcement.time}</p>
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
