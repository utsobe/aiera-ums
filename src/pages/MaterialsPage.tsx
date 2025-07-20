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
  FileText,
  Upload,
  Download,
  Search,
  Filter,
  Plus,
  Eye,
  Edit,
  Video,
  FileIcon,
  Folder,
  Share2,
  Calendar,
  BookOpen,
  Star,
} from "lucide-react";

export const MaterialsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClass, setSelectedClass] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Mock data for demonstration
  const materials = [
    {
      id: 1,
      title: "Introduction to React Components",
      description:
        "Comprehensive guide to building React components with TypeScript",
      type: "PDF",
      category: "Lecture Notes",
      class: "CS-301",
      className: "Web Development",
      size: "2.4 MB",
      uploadDate: "2024-01-15",
      downloads: 145,
      views: 203,
      rating: 4.8,
      tags: ["React", "TypeScript", "Components"],
      status: "Published",
      thumbnail: "",
    },
    {
      id: 2,
      title: "Database Design Fundamentals",
      description: "Complete tutorial on designing efficient database schemas",
      type: "Video",
      category: "Tutorial",
      class: "CS-205",
      className: "Database Systems",
      size: "156 MB",
      uploadDate: "2024-01-12",
      downloads: 89,
      views: 167,
      rating: 4.6,
      tags: ["Database", "Design", "SQL"],
      status: "Published",
      thumbnail: "",
    },
    {
      id: 3,
      title: "Software Engineering Best Practices",
      description:
        "Industry standards and methodologies for software development",
      type: "PDF",
      category: "Assignment",
      class: "CS-401",
      className: "Software Engineering",
      size: "1.8 MB",
      uploadDate: "2024-01-10",
      downloads: 76,
      views: 134,
      rating: 4.9,
      tags: ["Best Practices", "Methodology", "SDLC"],
      status: "Published",
      thumbnail: "",
    },
    {
      id: 4,
      title: "Advanced SQL Queries Workshop",
      description: "Hands-on workshop materials for complex SQL operations",
      type: "ZIP",
      category: "Lab Material",
      class: "CS-205",
      className: "Database Systems",
      size: "5.2 MB",
      uploadDate: "2024-01-08",
      downloads: 112,
      views: 189,
      rating: 4.7,
      tags: ["SQL", "Queries", "Workshop"],
      status: "Published",
      thumbnail: "",
    },
    {
      id: 5,
      title: "React Hooks Deep Dive",
      description: "Advanced concepts and patterns using React Hooks",
      type: "Video",
      category: "Lecture Recording",
      class: "CS-301",
      className: "Web Development",
      size: "234 MB",
      uploadDate: "2024-01-05",
      downloads: 198,
      views: 267,
      rating: 4.9,
      tags: ["React", "Hooks", "Advanced"],
      status: "Published",
      thumbnail: "",
    },
    {
      id: 6,
      title: "Project Requirements Document",
      description: "Template and guidelines for final project submission",
      type: "DOCX",
      category: "Project",
      class: "CS-401",
      className: "Software Engineering",
      size: "890 KB",
      uploadDate: "2024-01-03",
      downloads: 203,
      views: 245,
      rating: 4.5,
      tags: ["Project", "Requirements", "Template"],
      status: "Draft",
      thumbnail: "",
    },
  ];

  const classes = ["CS-301", "CS-205", "CS-401"];
  const types = ["PDF", "Video", "DOCX", "ZIP", "PPT"];
  const categories = [
    "Lecture Notes",
    "Tutorial",
    "Assignment",
    "Lab Material",
    "Lecture Recording",
    "Project",
  ];

  const filteredMaterials = materials.filter((material) => {
    const matchesSearch =
      material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      material.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      material.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesClass =
      selectedClass === "all" || material.class === selectedClass;
    const matchesType =
      selectedType === "all" || material.type === selectedType;
    const matchesCategory =
      selectedCategory === "all" || material.category === selectedCategory;

    return matchesSearch && matchesClass && matchesType && matchesCategory;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "PDF":
        return <FileText className="h-5 w-5 text-red-500" />;
      case "Video":
        return <Video className="h-5 w-5 text-blue-500" />;
      case "DOCX":
        return <FileIcon className="h-5 w-5 text-blue-600" />;
      case "ZIP":
        return <Folder className="h-5 w-5 text-yellow-500" />;
      case "PPT":
        return <FileIcon className="h-5 w-5 text-orange-500" />;
      default:
        return <FileIcon className="h-5 w-5 text-gray-500" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "PDF":
        return "bg-red-100 text-red-800";
      case "Video":
        return "bg-blue-100 text-blue-800";
      case "DOCX":
        return "bg-blue-100 text-blue-600";
      case "ZIP":
        return "bg-yellow-100 text-yellow-800";
      case "PPT":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Lecture Notes":
        return "bg-blue-100 text-blue-800";
      case "Tutorial":
        return "bg-green-100 text-green-800";
      case "Assignment":
        return "bg-purple-100 text-purple-800";
      case "Lab Material":
        return "bg-orange-100 text-orange-800";
      case "Lecture Recording":
        return "bg-indigo-100 text-indigo-800";
      case "Project":
        return "bg-pink-100 text-pink-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published":
        return "bg-green-100 text-green-800";
      case "Draft":
        return "bg-yellow-100 text-yellow-800";
      case "Archived":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
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
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <span>Course Materials</span>
              </CardTitle>
              <CardDescription className="text-lg text-slate-600 mt-2">
                Manage and share educational resources with your students
              </CardDescription>
            </div>
            <div className="flex space-x-3">
              <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-beautiful">
                <Upload className="h-4 w-4 mr-2" />
                Upload Material
              </Button>
              <Button variant="outline" className="hover:bg-slate-50">
                <Plus className="h-4 w-4 mr-2" />
                Create Folder
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
                  Total Materials
                </p>
                <p className="text-3xl font-bold mt-2">{materials.length}</p>
              </div>
              <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform">
                <FileText className="h-8 w-8 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0 shadow-beautiful-lg hover-lift group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm font-medium">
                  Total Downloads
                </p>
                <p className="text-3xl font-bold mt-2">
                  {materials.reduce((sum, m) => sum + m.downloads, 0)}
                </p>
              </div>
              <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform">
                <Download className="h-8 w-8 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 shadow-beautiful-lg hover-lift group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm font-medium">
                  Total Views
                </p>
                <p className="text-3xl font-bold mt-2">
                  {materials.reduce((sum, m) => sum + m.views, 0)}
                </p>
              </div>
              <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform">
                <Eye className="h-8 w-8 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0 shadow-beautiful-lg hover-lift group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm font-medium">
                  Avg Rating
                </p>
                <p className="text-3xl font-bold mt-2">
                  {(
                    materials.reduce((sum, m) => sum + m.rating, 0) /
                    materials.length
                  ).toFixed(1)}
                </p>
              </div>
              <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform">
                <Star className="h-8 w-8 text-white" />
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
            <span>Search & Filter Materials</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search materials..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 border-0 bg-slate-100 focus:bg-white transition-colors"
              />
            </div>
            <Select value={selectedClass} onValueChange={setSelectedClass}>
              <SelectTrigger className="h-12 border-0 bg-slate-100">
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
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="h-12 border-0 bg-slate-100">
                <SelectValue placeholder="Filter by Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                {types.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="h-12 border-0 bg-slate-100">
                <SelectValue placeholder="Filter by Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Materials Table */}
      <Card className="backdrop-blur-xl bg-white/80 border-0 shadow-beautiful-lg hover-lift">
        <CardHeader>
          <CardTitle className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <span>Materials Library ({filteredMaterials.length})</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-left">Material</TableHead>
                  <TableHead className="text-left">Class & Category</TableHead>
                  <TableHead className="text-left">Details</TableHead>
                  <TableHead className="text-left">Stats</TableHead>
                  <TableHead className="text-left">Status</TableHead>
                  <TableHead className="text-left">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredMaterials.map((material) => (
                  <TableRow
                    key={material.id}
                    className="hover:bg-slate-50/80 transition-colors"
                  >
                    <TableCell className="text-left">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                          {getTypeIcon(material.type)}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-slate-800 hover:text-blue-600 cursor-pointer">
                            {material.title}
                          </p>
                          <p className="text-sm text-slate-600 mt-1 line-clamp-2">
                            {material.description}
                          </p>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {material.tags.slice(0, 3).map((tag) => (
                              <Badge
                                key={tag}
                                variant="outline"
                                className="text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-left">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <BookOpen className="h-4 w-4 text-blue-500" />
                          <span className="font-medium text-slate-700">
                            {material.class}
                          </span>
                        </div>
                        <p className="text-sm text-slate-600">
                          {material.className}
                        </p>
                        <Badge className={getCategoryColor(material.category)}>
                          {material.category}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell className="text-left">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Badge className={getTypeColor(material.type)}>
                            {material.type}
                          </Badge>
                          <span className="text-sm text-slate-600">
                            {material.size}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-slate-600">
                          <Calendar className="h-4 w-4" />
                          <span>
                            {new Date(material.uploadDate).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm font-medium">
                            {material.rating}/5
                          </span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-left">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <Download className="h-4 w-4 text-green-500" />
                          <span className="font-medium">
                            {material.downloads}
                          </span>
                          <span className="text-slate-600">downloads</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <Eye className="h-4 w-4 text-blue-500" />
                          <span className="font-medium">{material.views}</span>
                          <span className="text-slate-600">views</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-left">
                      <Badge className={getStatusColor(material.status)}>
                        {material.status}
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
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="hover:bg-slate-50"
                        >
                          <Share2 className="h-4 w-4 mr-1" />
                          Share
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

      {/* Quick Upload Section */}
      <Card className="backdrop-blur-xl bg-white/80 border-0 shadow-beautiful-lg hover-lift">
        <CardHeader>
          <CardTitle className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
              <Upload className="h-5 w-5 text-white" />
            </div>
            <span>Quick Upload</span>
          </CardTitle>
          <CardDescription>
            Drag and drop files or click to upload new materials
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-slate-300 rounded-xl p-12 text-center hover:border-blue-400 hover:bg-blue-50/50 transition-all duration-200 cursor-pointer">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Upload className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Upload Course Materials
            </h3>
            <p className="text-slate-600 mb-6">
              Drag files here or click to browse
            </p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
                Choose Files
              </Button>
              <Button variant="outline" className="hover:bg-slate-50">
                Create Folder
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
