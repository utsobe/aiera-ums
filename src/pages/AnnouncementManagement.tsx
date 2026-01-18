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
import { Textarea } from "@/components/ui/textarea";
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
import {
  Bell,
  Search,
  Filter,
  Plus,
  MoreHorizontal,
  Edit3,
  Trash2,
  Send,
  Calendar,
  Users,
  AlertTriangle,
  Info,
  CheckCircle,
  Download,
  Upload,
  Eye,
  Clock,
} from "lucide-react";
import type { Announcement, UserRole } from "@/types";

export const AnnouncementManagement: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPriority, setSelectedPriority] = useState<string>("all");
  const [selectedRole, setSelectedRole] = useState<string>("all");
  const [isAddAnnouncementOpen, setIsAddAnnouncementOpen] = useState(false);

  // Mock announcements data
  const [announcements] = useState<Announcement[]>([
    {
      id: "1",
      title: "Mid-term Examination Schedule Released",
      content:
        "The mid-term examination schedule for all courses has been released. Please check your student portal for your individual exam timetable. All exams will be conducted from March 15-22, 2024.",
      author: "Admin Office",
      date: "2024-01-15",
      priority: "high",
      targetRole: ["student", "lecturer"],
    },
    {
      id: "2",
      title: "Library Hours Extended During Exam Period",
      content:
        "The university library will extend its operating hours during the examination period. The library will be open from 6:00 AM to 12:00 AM daily from March 10-25, 2024.",
      author: "Library Administration",
      date: "2024-01-14",
      priority: "medium",
      targetRole: ["student"],
    },
    {
      id: "3",
      title: "Faculty Meeting - Curriculum Review",
      content:
        "All faculty members are required to attend the curriculum review meeting scheduled for January 20, 2024, at 2:00 PM in the main conference room.",
      author: "Academic Affairs",
      date: "2024-01-12",
      priority: "high",
      targetRole: ["lecturer", "admin"],
    },
    {
      id: "4",
      title: "New Course Registration Opens",
      content:
        "Registration for the new semester courses will open on February 1, 2024. Students are advised to consult with their academic advisors before registering.",
      author: "Registration Office",
      date: "2024-01-10",
      priority: "medium",
      targetRole: ["student"],
    },
    {
      id: "5",
      title: "System Maintenance Notice",
      content:
        "The university management system will undergo scheduled maintenance on January 25, 2024, from 2:00 AM to 6:00 AM. The system will be temporarily unavailable during this period.",
      author: "IT Department",
      date: "2024-01-08",
      priority: "low",
      targetRole: ["student", "lecturer", "admin"],
    },
    {
      id: "6",
      title: "Research Grant Application Deadline",
      content:
        "The deadline for submitting research grant applications for the upcoming fiscal year is February 15, 2024. All required documents must be submitted through the research portal.",
      author: "Research Office",
      date: "2024-01-05",
      priority: "high",
      targetRole: ["lecturer"],
    },
  ]);

  const [newAnnouncement, setNewAnnouncement] = useState({
    title: "",
    content: "",
    author: "Admin Office",
    priority: "medium" as Announcement["priority"],
    targetRole: [] as UserRole[],
  });

  // Filter announcements based on search and filters
  const filteredAnnouncements = announcements.filter((announcement) => {
    const matchesSearch =
      announcement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      announcement.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPriority =
      selectedPriority === "all" || announcement.priority === selectedPriority;
    const matchesRole =
      selectedRole === "all" ||
      (announcement.targetRole &&
        announcement.targetRole.includes(selectedRole as UserRole));

    return matchesSearch && matchesPriority && matchesRole;
  });

  const announcementStats = {
    total: announcements.length,
    high: announcements.filter((a) => a.priority === "high").length,
    medium: announcements.filter((a) => a.priority === "medium").length,
    low: announcements.filter((a) => a.priority === "low").length,
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high":
        return <AlertTriangle className="h-4 w-4" />;
      case "medium":
        return <Info className="h-4 w-4" />;
      case "low":
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <Bell className="h-4 w-4" />;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleAddAnnouncement = () => {
    console.log("Adding announcement:", newAnnouncement);
    setIsAddAnnouncementOpen(false);
    setNewAnnouncement({
      title: "",
      content: "",
      author: "Admin Office",
      priority: "medium",
      targetRole: [],
    });
  };

  const handleRoleToggle = (role: UserRole) => {
    setNewAnnouncement((prev) => ({
      ...prev,
      targetRole: prev.targetRole.includes(role)
        ? prev.targetRole.filter((r) => r !== role)
        : [...prev.targetRole, role],
    }));
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Beautiful Header */}
      <Card className="bg-gradient-to-r from-orange-50 via-red-50 to-pink-50 border-0 shadow-beautiful-lg hover-lift overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-pink-400/20 rounded-full -translate-y-16 translate-x-16"></div>
        <CardHeader className="pb-8 relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent flex items-center space-x-3">
                <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl">
                  <Bell className="h-8 w-8 text-white" />
                </div>
                <span>Announcement Management</span>
              </CardTitle>
              <CardDescription className="text-lg text-slate-600 mt-2">
                Create and manage system-wide announcements and notifications
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
                Template
              </Button>
              <Dialog
                open={isAddAnnouncementOpen}
                onOpenChange={setIsAddAnnouncementOpen}
              >
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-beautiful">
                    <Plus className="h-4 w-4 mr-2" />
                    New Announcement
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Create New Announcement</DialogTitle>
                    <DialogDescription>
                      Create a new announcement to notify users across the
                      system.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="announcement-title">Title</Label>
                      <Input
                        id="announcement-title"
                        value={newAnnouncement.title}
                        onChange={(e) =>
                          setNewAnnouncement({
                            ...newAnnouncement,
                            title: e.target.value,
                          })
                        }
                        placeholder="Enter announcement title..."
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="announcement-content">Content</Label>
                      <Textarea
                        id="announcement-content"
                        value={newAnnouncement.content}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                          setNewAnnouncement({
                            ...newAnnouncement,
                            content: e.target.value,
                          })
                        }
                        placeholder="Enter announcement content..."
                        rows={6}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="announcement-priority">Priority</Label>
                        <Select
                          value={newAnnouncement.priority}
                          onValueChange={(value: Announcement["priority"]) =>
                            setNewAnnouncement({
                              ...newAnnouncement,
                              priority: value,
                            })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low Priority</SelectItem>
                            <SelectItem value="medium">
                              Medium Priority
                            </SelectItem>
                            <SelectItem value="high">High Priority</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="announcement-author">Author</Label>
                        <Input
                          id="announcement-author"
                          value={newAnnouncement.author}
                          onChange={(e) =>
                            setNewAnnouncement({
                              ...newAnnouncement,
                              author: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label>Target Audience</Label>
                      <div className="flex flex-wrap gap-2">
                        {(["student", "lecturer", "admin"] as UserRole[]).map(
                          (role) => (
                            <Button
                              key={role}
                              type="button"
                              variant={
                                newAnnouncement.targetRole.includes(role)
                                  ? "default"
                                  : "outline"
                              }
                              size="sm"
                              onClick={() => handleRoleToggle(role)}
                              className="capitalize"
                            >
                              {role}
                            </Button>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button
                      variant="outline"
                      onClick={() => setIsAddAnnouncementOpen(false)}
                    >
                      Save as Draft
                    </Button>
                    <Button type="submit" onClick={handleAddAnnouncement}>
                      <Send className="h-4 w-4 mr-2" />
                      Publish Now
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Announcement Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0 shadow-beautiful-lg hover-lift group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm font-medium">
                  Total Announcements
                </p>
                <p className="text-3xl font-bold mt-2">
                  {announcementStats.total}
                </p>
                <p className="text-orange-100 text-xs mt-1">All time</p>
              </div>
              <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform">
                <Bell className="h-8 w-8 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white border-0 shadow-beautiful-lg hover-lift group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-100 text-sm font-medium">
                  High Priority
                </p>
                <p className="text-3xl font-bold mt-2">
                  {announcementStats.high}
                </p>
                <p className="text-red-100 text-xs mt-1">Urgent notices</p>
              </div>
              <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform">
                <AlertTriangle className="h-8 w-8 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white border-0 shadow-beautiful-lg hover-lift group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-100 text-sm font-medium">
                  Medium Priority
                </p>
                <p className="text-3xl font-bold mt-2">
                  {announcementStats.medium}
                </p>
                <p className="text-yellow-100 text-xs mt-1">Regular updates</p>
              </div>
              <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform">
                <Info className="h-8 w-8 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-beautiful-lg hover-lift group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium">
                  Low Priority
                </p>
                <p className="text-3xl font-bold mt-2">
                  {announcementStats.low}
                </p>
                <p className="text-blue-100 text-xs mt-1">General info</p>
              </div>
              <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card className="backdrop-blur-xl bg-white/80 border-0 shadow-beautiful-lg">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input
                placeholder="Search announcements by title or content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-3">
              <Select
                value={selectedPriority}
                onValueChange={setSelectedPriority}
              >
                <SelectTrigger className="w-36">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priorities</SelectItem>
                  <SelectItem value="high">High Priority</SelectItem>
                  <SelectItem value="medium">Medium Priority</SelectItem>
                  <SelectItem value="low">Low Priority</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedRole} onValueChange={setSelectedRole}>
                <SelectTrigger className="w-32">
                  <Users className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Roles</SelectItem>
                  <SelectItem value="student">Students</SelectItem>
                  <SelectItem value="lecturer">Lecturers</SelectItem>
                  <SelectItem value="admin">Admins</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Announcements Table */}
      <Card className="backdrop-blur-xl bg-white/80 border-0 shadow-beautiful-lg">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Announcements ({filteredAnnouncements.length})</span>
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="text-sm">
                {selectedPriority === "all" ? "All" : selectedPriority} Priority
              </Badge>
              <Badge variant="outline" className="text-sm">
                {selectedRole === "all" ? "All" : selectedRole} Target
              </Badge>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-50">
                  <TableHead>Announcement</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Target Audience</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAnnouncements.map((announcement) => (
                  <TableRow
                    key={announcement.id}
                    className="hover:bg-slate-50/50"
                  >
                    <TableCell>
                      <div>
                        <p className="font-medium text-slate-800 line-clamp-1 text-left">
                          {announcement.title}
                        </p>
                        <p className="text-sm text-slate-500 line-clamp-2 max-w-md mt-1 text-left">
                          {announcement.content}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={`${getPriorityColor(
                          announcement.priority
                        )} flex items-center gap-1 w-fit`}
                      >
                        {getPriorityIcon(announcement.priority)}
                        {announcement.priority.charAt(0).toUpperCase() +
                          announcement.priority.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {announcement.targetRole?.map((role) => (
                          <Badge
                            key={role}
                            variant="outline"
                            className="text-xs"
                          >
                            {role}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-slate-700">
                        {announcement.author}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4 text-slate-400" />
                        <span className="text-slate-700">
                          {formatDate(announcement.date)}
                        </span>
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
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit3 className="mr-2 h-4 w-4" />
                            Edit Announcement
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Send className="mr-2 h-4 w-4" />
                            Resend
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Clock className="mr-2 h-4 w-4" />
                            Schedule
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {filteredAnnouncements.length === 0 && (
            <div className="text-center py-8">
              <Bell className="mx-auto h-12 w-12 text-slate-400 mb-4" />
              <p className="text-slate-600">
                No announcements found matching your criteria.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
