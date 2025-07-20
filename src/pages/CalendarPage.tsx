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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  BookOpen,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface CalendarEvent {
  id: string;
  title: string;
  type: "lecture" | "lab" | "tutorial" | "exam" | "assignment";
  time: string;
  duration: string;
  room: string;
  instructor: string;
  date: string;
}

export const CalendarPage: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<"week" | "month">("week");

  // Mock events data
  const events: CalendarEvent[] = [
    {
      id: "1",
      title: "Web Development",
      type: "lecture",
      time: "10:00",
      duration: "1.5 hours",
      room: "CS-101",
      instructor: "Dr. Sarah Wilson",
      date: "2024-07-22",
    },
    {
      id: "2",
      title: "Database Systems Lab",
      type: "lab",
      time: "14:00",
      duration: "2 hours",
      room: "CS-Lab-1",
      instructor: "Prof. John Smith",
      date: "2024-07-22",
    },
    {
      id: "3",
      title: "Software Engineering",
      type: "tutorial",
      time: "16:00",
      duration: "1 hour",
      room: "CS-205",
      instructor: "Dr. Emily Brown",
      date: "2024-07-22",
    },
    {
      id: "4",
      title: "Data Structures",
      type: "lecture",
      time: "09:00",
      duration: "1.5 hours",
      room: "CS-102",
      instructor: "Dr. Michael Davis",
      date: "2024-07-23",
    },
    {
      id: "5",
      title: "Machine Learning Assignment Due",
      type: "assignment",
      time: "23:59",
      duration: "",
      room: "Online",
      instructor: "Prof. John Smith",
      date: "2024-07-25",
    },
    {
      id: "6",
      title: "Mid-term Exam - Database Systems",
      type: "exam",
      time: "10:00",
      duration: "2 hours",
      room: "Exam Hall A",
      instructor: "Prof. John Smith",
      date: "2024-07-26",
    },
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "lecture":
        return "bg-blue-100 text-blue-800";
      case "lab":
        return "bg-green-100 text-green-800";
      case "tutorial":
        return "bg-purple-100 text-purple-800";
      case "exam":
        return "bg-red-100 text-red-800";
      case "assignment":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getWeekDays = (date: Date) => {
    const week = [];
    const startOfWeek = new Date(date);
    const day = startOfWeek.getDay();
    const diff = startOfWeek.getDate() - day;
    startOfWeek.setDate(diff);

    for (let i = 0; i < 7; i++) {
      const weekDay = new Date(startOfWeek);
      weekDay.setDate(startOfWeek.getDate() + i);
      week.push(weekDay);
    }
    return week;
  };

  const getTodaysEvents = (date: Date) => {
    const dateString = date.toISOString().split("T")[0];
    return events.filter((event) => event.date === dateString);
  };

  const weekDays = getWeekDays(currentDate);
  const todaysEvents = getTodaysEvents(new Date());

  const navigateWeek = (direction: "prev" | "next") => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + (direction === "next" ? 7 : -7));
    setCurrentDate(newDate);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Academic Calendar
          </h1>
          <p className="text-muted-foreground">
            View your class schedule, exams, and important dates.
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <Select
            value={viewMode}
            onValueChange={(value: "week" | "month") => setViewMode(value)}
          >
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Week View</SelectItem>
              <SelectItem value="month">Month View</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Today's Events Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CalendarIcon className="h-5 w-5" />
            <span>Today's Schedule</span>
          </CardTitle>
          <CardDescription>{formatDate(new Date())}</CardDescription>
        </CardHeader>
        <CardContent>
          {todaysEvents.length > 0 ? (
            <div className="space-y-3">
              {todaysEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <Badge className={getEventTypeColor(event.type)}>
                      {event.type}
                    </Badge>
                    <div>
                      <p className="font-medium">{event.title}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{event.time}</span>
                          {event.duration && <span>({event.duration})</span>}
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{event.room}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-600">
                    <p>{event.instructor}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <CalendarIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No events today
              </h3>
              <p className="text-gray-600">Enjoy your free day!</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Weekly Calendar View */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Weekly Schedule</CardTitle>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigateWeek("prev")}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm font-medium px-4">
                {weekDays[0].toLocaleDateString()} -{" "}
                {weekDays[6].toLocaleDateString()}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigateWeek("next")}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-4">
            {weekDays.map((day, index) => {
              const dayEvents = getTodaysEvents(day);
              const isToday = day.toDateString() === new Date().toDateString();

              return (
                <div
                  key={index}
                  className={`p-3 border rounded-lg ${
                    isToday ? "bg-blue-50 border-blue-200" : "bg-white"
                  }`}
                >
                  <div className="text-center mb-3">
                    <p className="text-xs font-medium text-gray-600">
                      {day.toLocaleDateString("en-US", { weekday: "short" })}
                    </p>
                    <p
                      className={`text-lg font-bold ${
                        isToday ? "text-blue-600" : "text-gray-900"
                      }`}
                    >
                      {day.getDate()}
                    </p>
                  </div>

                  <div className="space-y-2">
                    {dayEvents.map((event) => (
                      <div
                        key={event.id}
                        className="p-2 bg-white rounded text-xs border"
                      >
                        <p className="font-medium truncate">{event.title}</p>
                        <p className="text-gray-600">{event.time}</p>
                        <Badge
                          className={`${getEventTypeColor(event.type)} text-xs`}
                          variant="secondary"
                        >
                          {event.type}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Events */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BookOpen className="h-5 w-5" />
            <span>Upcoming Events</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {events.slice(0, 5).map((event) => (
              <div
                key={event.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <Badge className={getEventTypeColor(event.type)}>
                    {event.type}
                  </Badge>
                  <div>
                    <p className="font-medium">{event.title}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{event.room}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right text-sm text-gray-600">
                  <p>{event.instructor}</p>
                  {event.duration && <p>{event.duration}</p>}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
