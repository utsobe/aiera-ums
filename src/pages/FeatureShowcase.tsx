import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Users,
  BookOpen,
  Calendar,
  Award,
  Settings,
  Shield,
  Smartphone,
  Palette,
} from "lucide-react";

export const FeatureShowcase: React.FC = () => {
  const implementedFeatures = [
    {
      icon: Users,
      title: "Role-Based Authentication",
      description: "Secure login system for Students, Lecturers, and Admins",
      status: "completed",
    },
    {
      icon: BookOpen,
      title: "Subject Enrollment",
      description:
        "Browse subjects, enroll with conflict detection, and manage course load",
      status: "completed",
    },
    {
      icon: Award,
      title: "Grades & GPA Tracking",
      description: "Comprehensive grade management with performance analytics",
      status: "completed",
    },
    {
      icon: Calendar,
      title: "Academic Calendar",
      description: "Weekly/monthly schedule view with events and assignments",
      status: "completed",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Optimized for mobile, tablet, and desktop devices",
      status: "completed",
    },
    {
      icon: Palette,
      title: "Modern UI/UX",
      description: "Built with shadcn/ui components and Tailwind CSS",
      status: "completed",
    },
    {
      icon: Shield,
      title: "Type Safety",
      description: "Full TypeScript implementation with strict mode",
      status: "completed",
    },
    {
      icon: Settings,
      title: "Admin Panel",
      description: "User and course management system",
      status: "planned",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "in-progress":
        return "bg-yellow-100 text-yellow-800";
      case "planned":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Edvance University Management System
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A comprehensive, modern university management platform built with
          React, TypeScript, and shadcn/ui following RAD methodology for rapid
          development and superior user experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {implementedFeatures.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card key={index} className="relative">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </div>
                  </div>
                  <Badge className={getStatusColor(feature.status)}>
                    {feature.status === "completed" && (
                      <CheckCircle className="h-3 w-3 mr-1" />
                    )}
                    {feature.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-center text-2xl text-blue-900">
            Project Specifications Met
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-3">
                ✅ Functional Requirements
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• Role-based user authentication</li>
                <li>• Student academic dashboard</li>
                <li>• Subject enrollment system</li>
                <li>• Grade management and GPA tracking</li>
                <li>• Academic calendar integration</li>
                <li>• User registration system</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">
                ✅ Non-Functional Requirements
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• Responsive design (mobile, tablet, desktop)</li>
                <li>• Consistent UI/UX with modern design</li>
                <li>• Accessibility compliance (ARIA, keyboard nav)</li>
                <li>• Smooth navigation with minimal clicks</li>
                <li>• Type-safe development with TypeScript</li>
                <li>• Component-based architecture</li>
              </ul>
            </div>
          </div>

          <div className="text-center pt-4 border-t border-blue-200">
            <p className="text-blue-800 font-medium">
              🎯 All core requirements successfully implemented using RAD
              methodology
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
