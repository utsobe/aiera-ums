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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Award,
  TrendingUp,
  TrendingDown,
  Download,
  BarChart3,
  Target,
} from "lucide-react";
import type { Grade } from "@/types";

export const GradesPage: React.FC = () => {
  const [selectedSemester, setSelectedSemester] = useState("current");
  const [selectedYear, setSelectedYear] = useState("2024");

  // Mock grades data
  const grades: Grade[] = [
    {
      subjectId: "1",
      subjectName: "Web Development",
      subjectCode: "CS-301",
      grade: "A-",
      marks: 87,
      totalMarks: 100,
      semester: 1,
      year: 2024,
    },
    {
      subjectId: "2",
      subjectName: "Data Structures",
      subjectCode: "CS-201",
      grade: "B+",
      marks: 82,
      totalMarks: 100,
      semester: 1,
      year: 2024,
    },
    {
      subjectId: "3",
      subjectName: "Database Systems",
      subjectCode: "CS-251",
      grade: "A",
      marks: 92,
      totalMarks: 100,
      semester: 1,
      year: 2024,
    },
    {
      subjectId: "4",
      subjectName: "Software Engineering",
      subjectCode: "CS-351",
      grade: "B",
      marks: 78,
      totalMarks: 100,
      semester: 1,
      year: 2024,
    },
    {
      subjectId: "5",
      subjectName: "Computer Networks",
      subjectCode: "CS-401",
      grade: "A",
      marks: 89,
      totalMarks: 100,
      semester: 2,
      year: 2023,
    },
    {
      subjectId: "6",
      subjectName: "Operating Systems",
      subjectCode: "CS-321",
      grade: "B+",
      marks: 85,
      totalMarks: 100,
      semester: 2,
      year: 2023,
    },
  ];

  const getGradeColor = (grade: string) => {
    if (grade.startsWith("A")) return "bg-green-100 text-green-800";
    if (grade.startsWith("B")) return "bg-blue-100 text-blue-800";
    if (grade.startsWith("C")) return "bg-yellow-100 text-yellow-800";
    if (grade.startsWith("D")) return "bg-orange-100 text-orange-800";
    return "bg-red-100 text-red-800";
  };

  const calculateGPA = (gradesArray: Grade[]) => {
    const gradePoints: { [key: string]: number } = {
      "A+": 4.0,
      A: 4.0,
      "A-": 3.7,
      "B+": 3.3,
      B: 3.0,
      "B-": 2.7,
      "C+": 2.3,
      C: 2.0,
      "C-": 1.7,
      "D+": 1.3,
      D: 1.0,
      F: 0.0,
    };

    const totalPoints = gradesArray.reduce(
      (sum, grade) => sum + (gradePoints[grade.grade] || 0),
      0
    );
    return (totalPoints / gradesArray.length).toFixed(2);
  };

  const currentSemesterGrades = grades.filter(
    (g) => g.semester === 1 && g.year === 2024
  );
  const allGrades = grades;
  const currentGPA = calculateGPA(currentSemesterGrades);
  const overallGPA = calculateGPA(allGrades);

  const filteredGrades = grades.filter((grade) => {
    if (selectedSemester === "current") {
      return grade.semester === 1 && grade.year === 2024;
    }
    return grade.year.toString() === selectedYear;
  });

  const getPerformanceStats = () => {
    const totalSubjects = filteredGrades.length;
    const averageMarks =
      filteredGrades.reduce((sum, grade) => sum + grade.marks, 0) /
      totalSubjects;
    const highestMarks = Math.max(...filteredGrades.map((g) => g.marks));
    const lowestMarks = Math.min(...filteredGrades.map((g) => g.marks));

    return {
      totalSubjects,
      averageMarks: averageMarks.toFixed(1),
      highestMarks,
      lowestMarks,
    };
  };

  const stats = getPerformanceStats();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Academic Performance
        </h1>
        <p className="text-muted-foreground">
          View your grades, GPA, and academic progress.
        </p>
      </div>

      {/* GPA Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Target className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-2xl font-bold">{currentGPA}</p>
                <p className="text-sm text-gray-600">Current Semester GPA</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Award className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-2xl font-bold">{overallGPA}</p>
                <p className="text-sm text-gray-600">Overall GPA</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8 text-purple-600" />
              <div>
                <p className="text-2xl font-bold">{stats.averageMarks}%</p>
                <p className="text-sm text-gray-600">Average Score</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-8 w-8 text-orange-600" />
              <div>
                <p className="text-2xl font-bold">{stats.totalSubjects}</p>
                <p className="text-sm text-gray-600">Subjects Completed</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Actions */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <div className="flex space-x-4">
              <Select
                value={selectedSemester}
                onValueChange={setSelectedSemester}
              >
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="current">Current Semester</SelectItem>
                  <SelectItem value="all">All Semesters</SelectItem>
                </SelectContent>
              </Select>

              {selectedSemester === "all" && (
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                  </SelectContent>
                </Select>
              )}
            </div>

            <Button variant="outline" className="flex items-center space-x-2">
              <Download className="h-4 w-4" />
              <span>Download Transcript</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="table" className="space-y-4">
        <TabsList>
          <TabsTrigger value="table">Grade Table</TabsTrigger>
          <TabsTrigger value="summary">Performance Summary</TabsTrigger>
        </TabsList>

        <TabsContent value="table">
          <Card>
            <CardHeader>
              <CardTitle>Grade Details</CardTitle>
              <CardDescription>
                Detailed breakdown of your academic performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Subject Code</TableHead>
                    <TableHead>Subject Name</TableHead>
                    <TableHead>Marks</TableHead>
                    <TableHead>Grade</TableHead>
                    <TableHead>Semester</TableHead>
                    <TableHead>Year</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredGrades.map((grade) => (
                    <TableRow key={grade.subjectId}>
                      <TableCell className="font-medium">
                        {grade.subjectCode}
                      </TableCell>
                      <TableCell>{grade.subjectName}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <span>
                            {grade.marks}/{grade.totalMarks}
                          </span>
                          <span className="text-sm text-gray-500">
                            (
                            {((grade.marks / grade.totalMarks) * 100).toFixed(
                              1
                            )}
                            %)
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getGradeColor(grade.grade)}>
                          {grade.grade}
                        </Badge>
                      </TableCell>
                      <TableCell>{grade.semester}</TableCell>
                      <TableCell>{grade.year}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="summary">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Highest Score</span>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <span className="font-bold">{stats.highestMarks}%</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Lowest Score</span>
                    <div className="flex items-center space-x-2">
                      <TrendingDown className="h-4 w-4 text-red-600" />
                      <span className="font-bold">{stats.lowestMarks}%</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Average Score</span>
                    <span className="font-bold">{stats.averageMarks}%</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Total Subjects</span>
                    <span className="font-bold">{stats.totalSubjects}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Grade Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {["A", "B", "C", "D", "F"].map((gradeLevel) => {
                    const count = filteredGrades.filter((g) =>
                      g.grade.startsWith(gradeLevel)
                    ).length;
                    const percentage = (
                      (count / filteredGrades.length) *
                      100
                    ).toFixed(1);

                    return (
                      <div key={gradeLevel} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">
                            Grade {gradeLevel}
                          </span>
                          <span>
                            {count} subjects ({percentage}%)
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              gradeLevel === "A"
                                ? "bg-green-600"
                                : gradeLevel === "B"
                                ? "bg-blue-600"
                                : gradeLevel === "C"
                                ? "bg-yellow-600"
                                : gradeLevel === "D"
                                ? "bg-orange-600"
                                : "bg-red-600"
                            }`}
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
