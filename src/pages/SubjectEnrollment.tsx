import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  BookOpen,
  Clock,
  MapPin,
  User,
  AlertTriangle,
  CheckCircle,
  Search,
  Calendar,
  GraduationCap,
} from "lucide-react";
import type { Subject } from "@/types";

export const SubjectEnrollment: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");

  // Mock subjects data
  const allSubjects: Subject[] = [
    {
      id: "1",
      name: "Advanced Web Development",
      code: "CS-401",
      credits: 3,
      lecturer: "Dr. Sarah Wilson",
      schedule: [
        { day: "Monday", startTime: "10:00", endTime: "11:30", room: "CS-101" },
        {
          day: "Wednesday",
          startTime: "10:00",
          endTime: "11:30",
          room: "CS-101",
        },
      ],
      description:
        "Advanced concepts in web development including React, Node.js, and modern frameworks.",
      department: "Computer Science",
      year: 4,
      semester: 1,
    },
    {
      id: "2",
      name: "Machine Learning Fundamentals",
      code: "CS-451",
      credits: 4,
      lecturer: "Prof. John Smith",
      schedule: [
        {
          day: "Tuesday",
          startTime: "14:00",
          endTime: "16:00",
          room: "CS-205",
        },
        {
          day: "Thursday",
          startTime: "14:00",
          endTime: "15:30",
          room: "CS-205",
        },
      ],
      description:
        "Introduction to machine learning algorithms, neural networks, and AI applications.",
      department: "Computer Science",
      year: 4,
      semester: 1,
    },
    {
      id: "3",
      name: "Database Design",
      code: "CS-301",
      credits: 3,
      lecturer: "Dr. Emily Brown",
      schedule: [
        { day: "Monday", startTime: "14:00", endTime: "15:30", room: "CS-301" },
        { day: "Friday", startTime: "10:00", endTime: "11:30", room: "CS-301" },
      ],
      description:
        "Advanced database design, optimization, and management systems.",
      department: "Computer Science",
      year: 3,
      semester: 1,
    },
    {
      id: "4",
      name: "Software Architecture",
      code: "CS-402",
      credits: 3,
      lecturer: "Dr. Michael Davis",
      schedule: [
        {
          day: "Tuesday",
          startTime: "10:00",
          endTime: "11:30",
          room: "CS-102",
        },
        {
          day: "Thursday",
          startTime: "10:00",
          endTime: "11:30",
          room: "CS-102",
        },
      ],
      description:
        "Design patterns, architectural styles, and best practices in software development.",
      department: "Computer Science",
      year: 4,
      semester: 1,
    },
  ];

  const [enrolledSubjects, setEnrolledSubjects] = useState<string[]>([
    "1",
    "3",
  ]);

  const filteredSubjects = allSubjects.filter((subject) => {
    const matchesSearch =
      subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subject.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subject.lecturer.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDepartment =
      selectedDepartment === "all" || subject.department === selectedDepartment;
    const matchesYear =
      selectedYear === "all" || subject.year.toString() === selectedYear;

    return matchesSearch && matchesDepartment && matchesYear;
  });

  const handleEnroll = (subjectId: string) => {
    setEnrolledSubjects((prev) => [...prev, subjectId]);
  };

  const handleDrop = (subjectId: string) => {
    setEnrolledSubjects((prev) => prev.filter((id) => id !== subjectId));
  };

  const isEnrolled = (subjectId: string) =>
    enrolledSubjects.includes(subjectId);

  const hasScheduleConflict = (subject: Subject) => {
    // Simple conflict detection logic
    const enrolledSubjectsData = allSubjects.filter((s) =>
      enrolledSubjects.includes(s.id)
    );

    return enrolledSubjectsData.some((enrolledSubject) =>
      subject.schedule.some((newSlot) =>
        enrolledSubject.schedule.some(
          (existingSlot) =>
            newSlot.day === existingSlot.day &&
            ((newSlot.startTime >= existingSlot.startTime &&
              newSlot.startTime < existingSlot.endTime) ||
              (newSlot.endTime > existingSlot.startTime &&
                newSlot.endTime <= existingSlot.endTime))
        )
      )
    );
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Beautiful Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-2xl"></div>
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full -translate-y-20 translate-x-20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full translate-y-16 -translate-x-16"></div>
        <div className="relative z-10 p-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-beautiful">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Subject Enrollment
              </h1>
              <p className="text-lg text-slate-600 mt-1">
                Browse and enroll in available subjects for the current
                semester.
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/50">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-600">Available Subjects</p>
                  <p className="text-2xl font-bold text-slate-800">
                    {allSubjects.length}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/50">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-600">Enrolled</p>
                  <p className="text-2xl font-bold text-slate-800">
                    {enrolledSubjects.length}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/50">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <GraduationCap className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-600">Total Credits</p>
                  <p className="text-2xl font-bold text-slate-800">
                    {allSubjects
                      .filter((s) => enrolledSubjects.includes(s.id))
                      .reduce((sum, s) => sum + s.credits, 0)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Beautiful Filters Section */}
      <Card className="backdrop-blur-xl bg-white/80 border-0 shadow-beautiful-lg hover-lift">
        <CardHeader className="pb-6">
          <CardTitle className="flex items-center space-x-3 text-xl">
            <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg">
              <Search className="h-5 w-5 text-white" />
            </div>
            <span>Filter Subjects</span>
          </CardTitle>
          <CardDescription className="text-base">
            Find subjects that match your criteria and interests
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <Label
                htmlFor="search"
                className="text-sm font-semibold text-slate-700"
              >
                Search
              </Label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <Input
                  id="search"
                  placeholder="Search subjects, codes, or lecturers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 bg-gradient-to-r from-slate-50 to-blue-50 border-slate-200 focus:border-blue-300 focus:ring-2 focus:ring-blue-100 rounded-xl transition-all duration-200"
                />
              </div>
            </div>

            <div className="space-y-3">
              <Label className="text-sm font-semibold text-slate-700">
                Department
              </Label>
              <Select
                value={selectedDepartment}
                onValueChange={setSelectedDepartment}
              >
                <SelectTrigger className="h-12 bg-gradient-to-r from-slate-50 to-green-50 border-slate-200 focus:border-green-300 focus:ring-2 focus:ring-green-100 rounded-xl transition-all duration-200">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="rounded-xl shadow-beautiful-lg border-0">
                  <SelectItem value="all" className="rounded-lg">
                    All Departments
                  </SelectItem>
                  <SelectItem value="Computer Science" className="rounded-lg">
                    Computer Science
                  </SelectItem>
                  <SelectItem value="Mathematics" className="rounded-lg">
                    Mathematics
                  </SelectItem>
                  <SelectItem value="Physics" className="rounded-lg">
                    Physics
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label className="text-sm font-semibold text-slate-700">
                Year
              </Label>
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="h-12 bg-gradient-to-r from-slate-50 to-purple-50 border-slate-200 focus:border-purple-300 focus:ring-2 focus:ring-purple-100 rounded-xl transition-all duration-200">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="rounded-xl shadow-beautiful-lg border-0">
                  <SelectItem value="all" className="rounded-lg">
                    All Years
                  </SelectItem>
                  <SelectItem value="1" className="rounded-lg">
                    Year 1
                  </SelectItem>
                  <SelectItem value="2" className="rounded-lg">
                    Year 2
                  </SelectItem>
                  <SelectItem value="3" className="rounded-lg">
                    Year 3
                  </SelectItem>
                  <SelectItem value="4" className="rounded-lg">
                    Year 4
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white rounded-lg shadow-sm">
                <BookOpen className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-slate-800">
                  {filteredSubjects.length} subjects found
                </p>
                <p className="text-sm text-slate-600">
                  {filteredSubjects.length === allSubjects.length
                    ? "Showing all available subjects"
                    : "Filtered results"}
                </p>
              </div>
            </div>
            {searchTerm ||
            selectedDepartment !== "all" ||
            selectedYear !== "all" ? (
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedDepartment("all");
                  setSelectedYear("all");
                }}
                className="bg-white hover:bg-slate-50"
              >
                Clear Filters
              </Button>
            ) : null}
          </div>
        </CardContent>
      </Card>

      {/* Beautiful Subject List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredSubjects.map((subject) => {
          const enrolled = isEnrolled(subject.id);
          const hasConflict = !enrolled && hasScheduleConflict(subject);

          return (
            <Card
              key={subject.id}
              className={`group transition-all duration-300 hover-lift border-0 shadow-beautiful-lg overflow-hidden ${
                enrolled
                  ? "bg-gradient-to-br from-green-50 to-emerald-50 ring-2 ring-green-200"
                  : hasConflict
                  ? "bg-gradient-to-br from-red-50 to-pink-50 ring-2 ring-red-200"
                  : "backdrop-blur-xl bg-white/80 hover:shadow-beautiful-xl"
              }`}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full -translate-y-12 translate-x-12"></div>
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="flex items-center space-x-3 text-xl group-hover:text-blue-600 transition-colors">
                      <div
                        className={`p-2 rounded-lg ${
                          enrolled
                            ? "bg-green-500"
                            : hasConflict
                            ? "bg-red-500"
                            : "bg-gradient-to-r from-blue-500 to-purple-500"
                        }`}
                      >
                        <BookOpen className="h-5 w-5 text-white" />
                      </div>
                      <span>{subject.name}</span>
                    </CardTitle>
                    <CardDescription className="text-base mt-2 text-slate-600">
                      <span className="font-semibold">{subject.code}</span> •{" "}
                      {subject.credits} Credits • Year {subject.year}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col space-y-2 items-end">
                    {enrolled && (
                      <Badge className="bg-green-500 text-white shadow-sm">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Enrolled
                      </Badge>
                    )}
                    {hasConflict && (
                      <Badge className="bg-red-500 text-white shadow-sm">
                        <AlertTriangle className="h-3 w-3 mr-1" />
                        Conflict
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <p className="text-slate-700 leading-relaxed">
                  {subject.description}
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <User className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">Lecturer</p>
                      <p className="font-semibold text-slate-800">
                        {subject.lecturer}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-slate-500" />
                      <span className="text-sm font-semibold text-slate-700">
                        Schedule
                      </span>
                    </div>
                    {subject.schedule.map((slot, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gradient-to-r from-slate-50 to-purple-50 rounded-xl border border-slate-100"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-purple-100 rounded-lg">
                            <Clock className="h-4 w-4 text-purple-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-slate-800">
                              {slot.day}
                            </p>
                            <p className="text-sm text-slate-600">
                              {slot.startTime} - {slot.endTime}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-slate-500" />
                          <span className="text-sm font-semibold text-slate-700">
                            {slot.room}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  {enrolled ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="destructive"
                          size="sm"
                          className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white shadow-beautiful"
                        >
                          Drop Subject
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="rounded-2xl border-0 shadow-beautiful-xl">
                        <DialogHeader>
                          <DialogTitle className="text-xl">
                            Drop Subject
                          </DialogTitle>
                          <DialogDescription className="text-base">
                            Are you sure you want to drop {subject.name}? This
                            action cannot be undone.
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                          <Button variant="outline">Cancel</Button>
                          <Button
                            variant="destructive"
                            onClick={() => handleDrop(subject.id)}
                          >
                            Drop Subject
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          size="sm"
                          disabled={hasConflict}
                          className={hasConflict ? "opacity-50" : ""}
                        >
                          Enroll
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Enroll in Subject</DialogTitle>
                          <DialogDescription>
                            Confirm your enrollment in {subject.name} (
                            {subject.code}).
                            {hasConflict && (
                              <div className="mt-2 p-2 bg-red-50 border border-red-200 rounded text-red-700">
                                <AlertTriangle className="h-4 w-4 inline mr-1" />
                                This subject conflicts with your current
                                schedule.
                              </div>
                            )}
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                          <Button variant="outline">Cancel</Button>
                          <Button onClick={() => handleEnroll(subject.id)}>
                            Confirm Enrollment
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  )}

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>{subject.name}</DialogTitle>
                        <DialogDescription>
                          {subject.code} • {subject.department}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium mb-2">Description</h4>
                          <p className="text-sm text-gray-600">
                            {subject.description}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Schedule</h4>
                          <div className="space-y-1">
                            {subject.schedule.map((slot, index) => (
                              <p key={index} className="text-sm">
                                {slot.day}: {slot.startTime} - {slot.endTime}{" "}
                                (Room {slot.room})
                              </p>
                            ))}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium mb-1">Credits</h4>
                            <p className="text-sm text-gray-600">
                              {subject.credits}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">Lecturer</h4>
                            <p className="text-sm text-gray-600">
                              {subject.lecturer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredSubjects.length === 0 && (
        <Card>
          <CardContent className="py-8 text-center">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No subjects found
            </h3>
            <p className="text-gray-600">Try adjusting your search criteria.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
