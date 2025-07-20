import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { UserRole } from "@/types";

interface RegistrationPageProps {
  onBackToLogin: () => void;
}

export const RegistrationPage: React.FC<RegistrationPageProps> = ({
  onBackToLogin,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student" as UserRole,
    course: "",
    department: "",
    year: "",
    studentId: "",
    employeeId: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Validation
    if (!formData.name || !formData.email || !formData.password) {
      setError("Please fill in all required fields");
      setIsLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      setIsLoading(false);
      return;
    }

    // Role-specific validation
    if (formData.role === "student" && (!formData.course || !formData.year)) {
      setError("Please select course and year for student registration");
      setIsLoading(false);
      return;
    }

    if (
      (formData.role === "lecturer" || formData.role === "admin") &&
      !formData.department
    ) {
      setError("Please select department");
      setIsLoading(false);
      return;
    }

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert("Registration successful! Please login with your credentials.");
      onBackToLogin();
    } catch {
      setError("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-indigo-900">
            Create Account
          </CardTitle>
          <CardDescription>
            Register for Ai-Era University Management System
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Role Selection */}
            <div className="space-y-2">
              <Label htmlFor="role">Select Role *</Label>
              <Select
                value={formData.role}
                onValueChange={(value: UserRole) =>
                  handleInputChange("role", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="lecturer">Lecturer</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Role-specific fields */}
            {formData.role === "student" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="course">Course *</Label>
                  <Select
                    value={formData.course}
                    onValueChange={(value) =>
                      handleInputChange("course", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="computer-science">
                        Computer Science
                      </SelectItem>
                      <SelectItem value="information-technology">
                        Information Technology
                      </SelectItem>
                      <SelectItem value="software-engineering">
                        Software Engineering
                      </SelectItem>
                      <SelectItem value="data-science">Data Science</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="year">Year of Study *</Label>
                  <Select
                    value={formData.year}
                    onValueChange={(value) => handleInputChange("year", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Year 1</SelectItem>
                      <SelectItem value="2">Year 2</SelectItem>
                      <SelectItem value="3">Year 3</SelectItem>
                      <SelectItem value="4">Year 4</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="studentId">Student ID (Optional)</Label>
                  <Input
                    id="studentId"
                    placeholder="Enter student ID"
                    value={formData.studentId}
                    onChange={(e) =>
                      handleInputChange("studentId", e.target.value)
                    }
                    disabled={isLoading}
                  />
                </div>
              </div>
            )}

            {(formData.role === "lecturer" || formData.role === "admin") && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="department">Department *</Label>
                  <Select
                    value={formData.department}
                    onValueChange={(value) =>
                      handleInputChange("department", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="computer-science">
                        Computer Science
                      </SelectItem>
                      <SelectItem value="mathematics">Mathematics</SelectItem>
                      <SelectItem value="physics">Physics</SelectItem>
                      <SelectItem value="engineering">Engineering</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="employeeId">Employee ID (Optional)</Label>
                  <Input
                    id="employeeId"
                    placeholder="Enter employee ID"
                    value={formData.employeeId}
                    onChange={(e) =>
                      handleInputChange("employeeId", e.target.value)
                    }
                    disabled={isLoading}
                  />
                </div>
              </div>
            )}

            {/* Password fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="password">Password *</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password *</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    handleInputChange("confirmPassword", e.target.value)
                  }
                  disabled={isLoading}
                />
              </div>
            </div>

            {error && (
              <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>

              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={onBackToLogin}
                disabled={isLoading}
              >
                Back to Login
              </Button>
            </div>

            <div className="text-xs text-center text-gray-600 mt-4">
              <p>
                By creating an account, you agree to our Terms of Service and
                Privacy Policy.
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
