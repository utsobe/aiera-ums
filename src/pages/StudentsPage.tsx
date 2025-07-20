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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Users,
  Search,
  Filter,
  Download,
  Mail,
  Phone,
  MessageSquare,
  UserCheck,
  Trophy,
  TrendingUp,
  BookOpen,
  Calendar,
  GraduationCap,
  Star,
  Eye,
} from "lucide-react";

export const StudentsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClass, setSelectedClass] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");

  // Mock data for demonstration
  const students = [
    {
      id: "ST2024001",
      name: "Alice Johnson",
      email: "alice.johnson@student.edu",
      phone: "+1 (555) 123-4567",
      avatar: "",
      year: "3rd Year",
      major: "Computer Science",
      gpa: 3.8,
      attendance: 95,
      classes: ["CS-301", "CS-205"],
      status: "Active",
      lastActive: "2 hours ago",
      totalCredits: 45,
      performance: "Excellent",
    },
    {
      id: "ST2024002",
      name: "Bob Smith",
      email: "bob.smith@student.edu",
      phone: "+1 (555) 234-5678",
      avatar: "",
      year: "2nd Year",
      major: "Computer Science",
      gpa: 3.2,
      attendance: 88,
      classes: ["CS-205"],
      status: "Active",
      lastActive: "1 day ago",
      totalCredits: 32,
      performance: "Good",
    },
    {
      id: "ST2024003",
      name: "Carol Davis",
      email: "carol.davis@student.edu",
      phone: "+1 (555) 345-6789",
      avatar: "",
      year: "4th Year",
      major: "Software Engineering",
      gpa: 3.9,
      attendance: 98,
      classes: ["CS-301", "CS-401"],
      status: "Active",
      lastActive: "30 minutes ago",
      totalCredits: 58,
      performance: "Outstanding",
    },
    {
      id: "ST2024004",
      name: "David Wilson",
      email: "david.wilson@student.edu",
      phone: "+1 (555) 456-7890",
      avatar: "",
      year: "3rd Year",
      major: "Computer Science",
      gpa: 2.8,
      attendance: 78,
      classes: ["CS-205", "CS-301"],
      status: "At Risk",
      lastActive: "3 days ago",
      totalCredits: 42,
      performance: "Needs Improvement",
    },
    {
      id: "ST2024005",
      name: "Emma Brown",
      email: "emma.brown@student.edu",
      phone: "+1 (555) 567-8901",
      avatar: "",
      year: "2nd Year",
      major: "Information Technology",
      gpa: 3.6,
      attendance: 92,
      classes: ["CS-205"],
      status: "Active",
      lastActive: "5 hours ago",
      totalCredits: 28,
      performance: "Very Good",
    },
  ];

  const classes = ["CS-301", "CS-205", "CS-401"];
  const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass =
      selectedClass === "all" || student.classes.includes(selectedClass);
    const matchesYear = selectedYear === "all" || student.year === selectedYear;

    return matchesSearch && matchesClass && matchesYear;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "At Risk":
        return "bg-red-100 text-red-800";
      case "Inactive":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  const getPerformanceColor = (performance: string) => {
    switch (performance) {
      case "Outstanding":
        return "text-purple-600";
      case "Excellent":
        return "text-green-600";
      case "Very Good":
        return "text-blue-600";
      case "Good":
        return "text-yellow-600";
      case "Needs Improvement":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const getGPAColor = (gpa: number) => {
    if (gpa >= 3.7) return "text-green-600";
    if (gpa >= 3.0) return "text-blue-600";
    if (gpa >= 2.5) return "text-yellow-600";
    return "text-red-600";
  };

  const getAttendanceColor = (attendance: number) => {
    if (attendance >= 90) return "text-green-600";
    if (attendance >= 80) return "text-blue-600";
    if (attendance >= 70) return "text-yellow-600";
    return "text-red-600";
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
                  <Users className="h-8 w-8 text-white" />
                </div>
                <span>My Students</span>
              </CardTitle>
              <CardDescription className="text-lg text-slate-600 mt-2">
                Manage and monitor your students' progress
              </CardDescription>
            </div>
            <div className="flex space-x-3">
              <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-beautiful">
                <Download className="h-4 w-4 mr-2" />
                Export Data
              </Button>
              <Button variant="outline" className="hover:bg-slate-50">
                <MessageSquare className="h-4 w-4 mr-2" />
                Send Message
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
                  Total Students
                </p>
                <p className="text-3xl font-bold mt-2">{students.length}</p>
              </div>
              <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0 shadow-beautiful-lg hover-lift group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm font-medium">
                  Active Students
                </p>
                <p className="text-3xl font-bold mt-2">
                  {students.filter((s) => s.status === "Active").length}
                </p>
              </div>
              <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform">
                <UserCheck className="h-8 w-8 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 shadow-beautiful-lg hover-lift group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm font-medium">
                  Average GPA
                </p>
                <p className="text-3xl font-bold mt-2">
                  {(
                    students.reduce((sum, s) => sum + s.gpa, 0) /
                    students.length
                  ).toFixed(1)}
                </p>
              </div>
              <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform">
                <Trophy className="h-8 w-8 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0 shadow-beautiful-lg hover-lift group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm font-medium">
                  Avg Attendance
                </p>
                <p className="text-3xl font-bold mt-2">
                  {Math.round(
                    students.reduce((sum, s) => sum + s.attendance, 0) /
                      students.length
                  )}
                  %
                </p>
              </div>
              <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform">
                <Calendar className="h-8 w-8 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card className="backdrop-blur-xl bg-white/80 border-0 shadow-beautiful-lg hover-lift">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
              <Filter className="h-5 w-5 text-white" />
            </div>
            <span>Search & Filter Students</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search by name, ID, or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 border-0 bg-slate-100 focus:bg-white transition-colors"
              />
            </div>
            <Select value={selectedClass} onValueChange={setSelectedClass}>
              <SelectTrigger className="w-full md:w-48 h-12 border-0 bg-slate-100">
                <SelectValue placeholder="Filter by Class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Classes</SelectItem>
                {classes.map((cls) => (
                  <SelectItem key={cls} value={cls}>
                    {cls}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-full md:w-48 h-12 border-0 bg-slate-100">
                <SelectValue placeholder="Filter by Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                {years.map((year) => (
                  <SelectItem key={year} value={year}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Students Table */}
      <Card className="backdrop-blur-xl bg-white/80 border-0 shadow-beautiful-lg hover-lift">
        <CardHeader>
          <CardTitle className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
              <Users className="h-5 w-5 text-white" />
            </div>
            <span>Students List ({filteredStudents.length})</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-left">Student</TableHead>
                  <TableHead className="text-left">Contact</TableHead>
                  <TableHead className="text-left">Academic Info</TableHead>
                  <TableHead className="text-left">Performance</TableHead>
                  <TableHead className="text-left">Status</TableHead>
                  <TableHead className="text-left">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStudents.map((student) => (
                  <TableRow
                    key={student.id}
                    className="hover:bg-slate-50/80 transition-colors"
                  >
                    <TableCell className="text-left">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12 ring-2 ring-blue-100">
                          <AvatarImage
                            src={student.avatar}
                            alt={student.name}
                          />
                          <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold">
                            {student.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-slate-800">
                            {student.name}
                          </p>
                          <p className="text-sm text-slate-600">{student.id}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              {student.year}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {student.major}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-left">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2 text-sm">
                          <Mail className="h-4 w-4 text-blue-500" />
                          <span className="text-slate-700">
                            {student.email}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <Phone className="h-4 w-4 text-green-500" />
                          <span className="text-slate-700">
                            {student.phone}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500">
                          Last active: {student.lastActive}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="text-left">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm font-medium">GPA:</span>
                          <span
                            className={`font-bold ${getGPAColor(student.gpa)}`}
                          >
                            {student.gpa.toFixed(1)}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <BookOpen className="h-4 w-4 text-blue-500" />
                          <span className="text-sm font-medium">Credits:</span>
                          <span className="text-slate-700">
                            {student.totalCredits}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {student.classes.map((cls) => (
                            <Badge
                              key={cls}
                              className="text-xs bg-blue-100 text-blue-800"
                            >
                              {cls}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-left">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="h-4 w-4 text-purple-500" />
                          <span className="text-sm font-medium">
                            Performance:
                          </span>
                        </div>
                        <p
                          className={`font-semibold text-sm ${getPerformanceColor(
                            student.performance
                          )}`}
                        >
                          {student.performance}
                        </p>
                        <div className="flex items-center space-x-2">
                          <UserCheck className="h-4 w-4 text-green-500" />
                          <span className="text-sm font-medium">
                            Attendance:
                          </span>
                          <span
                            className={`font-bold ${getAttendanceColor(
                              student.attendance
                            )}`}
                          >
                            {student.attendance}%
                          </span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-left">
                      <Badge className={getStatusColor(student.status)}>
                        {student.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-left">
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="hover:bg-slate-50"
                        >
                          <MessageSquare className="h-4 w-4 mr-1" />
                          Message
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
