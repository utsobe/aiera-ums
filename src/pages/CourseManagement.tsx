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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  BookOpen,
  Search,
  Filter,
  Plus,
  MoreHorizontal,
  Edit3,
  Trash2,
  Users,
  Clock,
  GraduationCap,
  FileText,
  Download,
  Upload,
  Calendar,
  MapPin,
  Settings,
} from "lucide-react";
import type { Course, Subject } from "@/types";

export const CourseManagement: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");
  const [isAddCourseOpen, setIsAddCourseOpen] = useState(false);
  const [isAddSubjectOpen, setIsAddSubjectOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"courses" | "subjects">("courses");

  // Mock courses data
  const [courses] = useState<Course[]>([
    {
      id: "CS2024",
      name: "Bachelor of Computer Science",
      code: "CS",
      duration: 4,
      department: "Computer Science",
      subjects: ["CS-101", "CS-201", "CS-301", "CS-401"],
    },
    {
      id: "MATH2024",
      name: "Bachelor of Mathematics",
      code: "MATH",
      duration: 3,
      department: "Mathematics",
      subjects: ["MATH-101", "MATH-201", "MATH-301"],
    },
    {
      id: "ENG2024",
      name: "Bachelor of Engineering",
      code: "ENG",
      duration: 4,
      department: "Engineering",
      subjects: ["ENG-101", "ENG-201", "ENG-301", "ENG-401"],
    },
    {
      id: "PHY2024",
      name: "Bachelor of Physics",
      code: "PHY",
      duration: 3,
      department: "Physics",
      subjects: ["PHY-101", "PHY-201", "PHY-301"],
    },
  ]);

  // Mock subjects data
  const [subjects] = useState<Subject[]>([
    {
      id: "CS-101",
      name: "Introduction to Programming",
      code: "CS-101",
      credits: 3,
      lecturer: "Dr. Zainudin Johari",
      schedule: [
        { day: "Monday", startTime: "10:00", endTime: "12:00", room: "CS-101" },
        { day: "Wednesday", startTime: "10:00", endTime: "12:00", room: "CS-101" },
      ],
      description: "Basic programming concepts and algorithms",
      department: "Computer Science",
      year: 1,
      semester: 1,
    },
    {
      id: "CS-201",
      name: "Data Structures",
      code: "CS-201",
      credits: 4,
      lecturer: "Dr. Fatimah Ali",
      schedule: [
        { day: "Tuesday", startTime: "14:00", endTime: "16:00", room: "CS-201" },
        { day: "Thursday", startTime: "14:00", endTime: "16:00", room: "CS-201" },
      ],
      description: "Advanced data structures and algorithms",
      department: "Computer Science",
      year: 2,
      semester: 1,
    },
    {
      id: "MATH-101",
      name: "Calculus I",
      code: "MATH-101",
      credits: 3,
      lecturer: "Dr. Ahmad Rahman",
      schedule: [
        { day: "Monday", startTime: "09:00", endTime: "11:00", room: "MATH-101" },
        { day: "Friday", startTime: "09:00", endTime: "11:00", room: "MATH-101" },
      ],
      description: "Introduction to differential and integral calculus",
      department: "Mathematics",
      year: 1,
      semester: 1,
    },
    {
      id: "ENG-101",
      name: "Engineering Fundamentals",
      code: "ENG-101",
      credits: 3,
      lecturer: "Dr. Siti Aminah",
      schedule: [
        { day: "Tuesday", startTime: "08:00", endTime: "10:00", room: "ENG-101" },
        { day: "Thursday", startTime: "08:00", endTime: "10:00", room: "ENG-101" },
      ],
      description: "Basic engineering principles and problem-solving",
      department: "Engineering",
      year: 1,
      semester: 1,
    },
  ]);

  const [newCourse, setNewCourse] = useState({
    name: "",
    code: "",
    duration: 3,
    department: "",
  });

  const [newSubject, setNewSubject] = useState({
    name: "",
    code: "",
    credits: 3,
    lecturer: "",
    description: "",
    department: "",
    year: 1,
    semester: 1,
  });

  // Filter data based on search and filters
  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.code.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment === "all" || course.department === selectedDepartment;
    
    return matchesSearch && matchesDepartment;
  });

  const filteredSubjects = subjects.filter((subject) => {
    const matchesSearch = subject.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         subject.code.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment === "all" || subject.department === selectedDepartment;
    
    return matchesSearch && matchesDepartment;
  });

  const departments = [...new Set([...courses.map(c => c.department), ...subjects.map(s => s.department)])];

  const courseStats = {
    totalCourses: courses.length,
    totalSubjects: subjects.length,
    totalCredits: subjects.reduce((sum, subject) => sum + subject.credits, 0),
    activeDepartments: departments.length,
  };

  const handleAddCourse = () => {
    console.log("Adding course:", newCourse);
    setIsAddCourseOpen(false);
    setNewCourse({ name: "", code: "", duration: 3, department: "" });
  };

  const handleAddSubject = () => {
    console.log("Adding subject:", newSubject);
    setIsAddSubjectOpen(false);
    setNewSubject({
      name: "",
      code: "",
      credits: 3,
      lecturer: "",
      description: "",
      department: "",
      year: 1,
      semester: 1,
    });
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Beautiful Header */}
      <Card className="bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 border-0 shadow-beautiful-lg hover-lift overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-teal-400/20 rounded-full -translate-y-16 translate-x-16"></div>
        <CardHeader className="pb-8 relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent flex items-center space-x-3">
                <div className="p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <span>Course Management</span>
              </CardTitle>
              <CardDescription className="text-lg text-slate-600 mt-2">
                Manage courses, subjects, and academic programs
              </CardDescription>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                className="bg-white/80 backdrop-blur-sm hover:bg-white/90 border-white/20"
              >
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button
                variant="outline"
                className="bg-white/80 backdrop-blur-sm hover:bg-white/90 border-white/20"
              >
                <Upload className="h-4 w-4 mr-2" />
                Import
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0 shadow-beautiful-lg hover-lift group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm font-medium">Total Courses</p>
                <p className="text-3xl font-bold mt-2">{courseStats.totalCourses}</p>
                <p className="text-green-100 text-xs mt-1">Active programs</p>
              </div>
              <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-beautiful-lg hover-lift group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium">Total Subjects</p>
                <p className="text-3xl font-bold mt-2">{courseStats.totalSubjects}</p>
                <p className="text-blue-100 text-xs mt-1">Available subjects</p>
              </div>
              <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform">
                <FileText className="h-8 w-8 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 shadow-beautiful-lg hover-lift group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm font-medium">Total Credits</p>
                <p className="text-3xl font-bold mt-2">{courseStats.totalCredits}</p>
                <p className="text-purple-100 text-xs mt-1">Credit hours</p>
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
                <p className="text-orange-100 text-sm font-medium">Departments</p>
                <p className="text-3xl font-bold mt-2">{courseStats.activeDepartments}</p>
                <p className="text-orange-100 text-xs mt-1">Active departments</p>
              </div>
              <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform">
                <Settings className="h-8 w-8 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs and Controls */}
      <Card className="backdrop-blur-xl bg-white/80 border-0 shadow-beautiful-lg">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
            <div className="flex items-center space-x-1 bg-slate-100 rounded-lg p-1">
              <Button
                variant={activeTab === "courses" ? "default" : "ghost"}
                className={`px-6 ${activeTab === "courses" ? "bg-white shadow-sm" : ""}`}
                onClick={() => setActiveTab("courses")}
              >
                <BookOpen className="h-4 w-4 mr-2" />
                Courses
              </Button>
              <Button
                variant={activeTab === "subjects" ? "default" : "ghost"}
                className={`px-6 ${activeTab === "subjects" ? "bg-white shadow-sm" : ""}`}
                onClick={() => setActiveTab("subjects")}
              >
                <FileText className="h-4 w-4 mr-2" />
                Subjects
              </Button>
            </div>

            <div className="flex flex-col md:flex-row gap-3 w-full lg:w-auto">
              <div className="relative flex-1 lg:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                <Input
                  placeholder={`Search ${activeTab}...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                <SelectTrigger className="w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  {departments.map((dept) => (
                    <SelectItem key={dept} value={dept}>
                      {dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {activeTab === "courses" ? (
                <Dialog open={isAddCourseOpen} onOpenChange={setIsAddCourseOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-gradient-to-r from-green-500 to-teal-500 text-white">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Course
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Add New Course</DialogTitle>
                      <DialogDescription>
                        Create a new academic course program.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="course-name" className="text-right">
                          Name
                        </Label>
                        <Input
                          id="course-name"
                          value={newCourse.name}
                          onChange={(e) =>
                            setNewCourse({ ...newCourse, name: e.target.value })
                          }
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="course-code" className="text-right">
                          Code
                        </Label>
                        <Input
                          id="course-code"
                          value={newCourse.code}
                          onChange={(e) =>
                            setNewCourse({ ...newCourse, code: e.target.value })
                          }
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="course-duration" className="text-right">
                          Duration
                        </Label>
                        <Select
                          value={newCourse.duration.toString()}
                          onValueChange={(value) =>
                            setNewCourse({ ...newCourse, duration: parseInt(value) })
                          }
                        >
                          <SelectTrigger className="col-span-3">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="3">3 Years</SelectItem>
                            <SelectItem value="4">4 Years</SelectItem>
                            <SelectItem value="5">5 Years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="course-department" className="text-right">
                          Department
                        </Label>
                        <Select
                          value={newCourse.department}
                          onValueChange={(value) =>
                            setNewCourse({ ...newCourse, department: value })
                          }
                        >
                          <SelectTrigger className="col-span-3">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {departments.map((dept) => (
                              <SelectItem key={dept} value={dept}>
                                {dept}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit" onClick={handleAddCourse}>
                        Create Course
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              ) : (
                <Dialog open={isAddSubjectOpen} onOpenChange={setIsAddSubjectOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Subject
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Add New Subject</DialogTitle>
                      <DialogDescription>
                        Create a new subject for courses.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="subject-name" className="text-right">
                          Name
                        </Label>
                        <Input
                          id="subject-name"
                          value={newSubject.name}
                          onChange={(e) =>
                            setNewSubject({ ...newSubject, name: e.target.value })
                          }
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="subject-code" className="text-right">
                          Code
                        </Label>
                        <Input
                          id="subject-code"
                          value={newSubject.code}
                          onChange={(e) =>
                            setNewSubject({ ...newSubject, code: e.target.value })
                          }
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="subject-credits" className="text-right">
                          Credits
                        </Label>
                        <Select
                          value={newSubject.credits.toString()}
                          onValueChange={(value) =>
                            setNewSubject({ ...newSubject, credits: parseInt(value) })
                          }
                        >
                          <SelectTrigger className="col-span-3">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 Credit</SelectItem>
                            <SelectItem value="2">2 Credits</SelectItem>
                            <SelectItem value="3">3 Credits</SelectItem>
                            <SelectItem value="4">4 Credits</SelectItem>
                            <SelectItem value="5">5 Credits</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="subject-lecturer" className="text-right">
                          Lecturer
                        </Label>
                        <Input
                          id="subject-lecturer"
                          value={newSubject.lecturer}
                          onChange={(e) =>
                            setNewSubject({ ...newSubject, lecturer: e.target.value })
                          }
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-start gap-4">
                        <Label htmlFor="subject-description" className="text-right pt-2">
                          Description
                        </Label>
                        <Textarea
                          id="subject-description"
                          value={newSubject.description}
                          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                            setNewSubject({ ...newSubject, description: e.target.value })
                          }
                          className="col-span-3"
                          rows={3}
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit" onClick={handleAddSubject}>
                        Create Subject
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data Table */}
      <Card className="backdrop-blur-xl bg-white/80 border-0 shadow-beautiful-lg">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>
              {activeTab === "courses" ? "Courses" : "Subjects"} ({activeTab === "courses" ? filteredCourses.length : filteredSubjects.length})
            </span>
            <Badge variant="outline" className="text-sm">
              {selectedDepartment === "all" ? "All Departments" : selectedDepartment}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {activeTab === "courses" ? (
            <div className="rounded-lg border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-50">
                    <TableHead>Course</TableHead>
                    <TableHead>Code</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Subjects</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCourses.map((course) => (
                    <TableRow key={course.id} className="hover:bg-slate-50/50">
                      <TableCell>
                        <div>
                          <p className="font-medium text-slate-800">{course.name}</p>
                          <p className="text-sm text-slate-500">ID: {course.id}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800 font-mono">
                          {course.code}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <span className="text-slate-700">{course.department}</span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4 text-slate-400" />
                          <span className="text-slate-700">{course.duration} years</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">
                          {course.subjects.length} subjects
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>
                              <Edit3 className="mr-2 h-4 w-4" />
                              Edit Course
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Users className="mr-2 h-4 w-4" />
                              View Enrollments
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Calendar className="mr-2 h-4 w-4" />
                              Manage Schedule
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete Course
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="rounded-lg border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-50">
                    <TableHead>Subject</TableHead>
                    <TableHead>Code</TableHead>
                    <TableHead>Lecturer</TableHead>
                    <TableHead>Credits</TableHead>
                    <TableHead>Schedule</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSubjects.map((subject) => (
                    <TableRow key={subject.id} className="hover:bg-slate-50/50">
                      <TableCell>
                        <div>
                          <p className="font-medium text-slate-800">{subject.name}</p>
                          <p className="text-sm text-slate-500 truncate max-w-xs">
                            {subject.description}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-blue-100 text-blue-800 font-mono">
                          {subject.code}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <span className="text-slate-700">{subject.lecturer}</span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-1">
                          <GraduationCap className="h-4 w-4 text-slate-400" />
                          <span className="text-slate-700">{subject.credits}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          {subject.schedule.slice(0, 2).map((schedule, index) => (
                            <div key={index} className="flex items-center space-x-2 text-sm">
                              <Calendar className="h-3 w-3 text-slate-400" />
                              <span className="text-slate-600">
                                {schedule.day} {schedule.startTime}-{schedule.endTime}
                              </span>
                              <MapPin className="h-3 w-3 text-slate-400" />
                              <span className="text-slate-600">{schedule.room}</span>
                            </div>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>
                              <Edit3 className="mr-2 h-4 w-4" />
                              Edit Subject
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Users className="mr-2 h-4 w-4" />
                              View Students
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Calendar className="mr-2 h-4 w-4" />
                              Manage Schedule
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete Subject
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
          {((activeTab === "courses" && filteredCourses.length === 0) || 
            (activeTab === "subjects" && filteredSubjects.length === 0)) && (
            <div className="text-center py-8">
              <BookOpen className="mx-auto h-12 w-12 text-slate-400 mb-4" />
              <p className="text-slate-600">
                No {activeTab} found matching your criteria.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
