# Edvance UMS - Thesis Screens Context & Documentation

## System Overview

**Project Name:** Edvance University Management System (UMS)  
**Technology Stack:** React 18+ with TypeScript, Vite, shadcn/ui, Tailwind CSS  
**Architecture Pattern:** Role-Based Access Control (RBAC) with three user types
**Total Screens:** 15 main pages + supporting components

---

## Table of Contents for Thesis

### 1. Introduction & System Architecture

### 2. Authentication & Access Control

### 3. Student Features & Dashboard

### 4. Lecturer Features & Dashboard

### 5. Administrative Features & Dashboard

### 6. Academic Management Features

### 7. Notification & Announcement System

### 8. System Implementation Details

### 9. Conclusion & Future Enhancements

---

## Detailed Screen Inventory

### **AUTHENTICATION LAYER** (2 screens)

#### 1. **Login Page** (`LoginPage.tsx`)

- **Purpose:** Role-based authentication gateway
- **User Roles Supported:** Student, Lecturer, Admin
- **Key Features:**
  - Email/password input fields
  - Role selection dropdown
  - Credential validation with error handling
  - Navigation to role-specific dashboards
- **UI Components:** Card, Input fields, Select dropdown, Button, Error messages
- **Suggested Thesis Placement:** Chapter 2 (Authentication & Access Control)
- **Screenshots Need:** Login form with role selection, error state with invalid credentials

#### 2. **Registration Page** (`RegistrationPage.tsx`)

- **Status:** Placeholder (deactivated)
- **Note:** User creation is handled exclusively via Admin panel for control and security
- **Suggested Thesis Placement:** Mentioned in Chapter 2 as design decision for admin-controlled user creation

---

### **STUDENT PORTAL** (4 screens)

#### 3. **Student Dashboard** (`StudentDashboard.tsx`)

- **Purpose:** Personalized student home page with academic overview
- **Key Information Displayed:**
  - **Student Profile:** Name, ID, program, avatar
  - **Academic Overview:** Current GPA, attendance percentage
  - **Quick Stats:** Enrolled subjects, completed assignments, upcoming exams
  - **Upcoming Classes:** Next 3-4 scheduled classes with time, location, type
  - **Recent Grades:** Latest 3 grades with marks and letter grades
  - **Announcements:** Feed of system announcements with priority levels
- **Interactive Features:** Quick action buttons for common tasks
- **UI Indicators:** Color-coded grade badges (A=green, B=blue, C=yellow)
- **Suggested Thesis Placement:** Chapter 3 (Student Features)
- **Screenshots Need:** Full dashboard view showing all sections, GPA display, grade cards

#### 4. **Subject Enrollment** (`SubjectEnrollment.tsx`)

- **Purpose:** Curriculum browsing and enrollment management
- **Key Features:**
  - **Subject Catalog:** Browse all available subjects with details
  - **Advanced Filtering:** Search by keyword, department, academic year
  - **Subject Details Modal:** Credits, instructor, schedule, capacity, prerequisites
  - **Enrollment Management:** Enroll/drop subjects with instant feedback
  - **Conflict Detection:** Automated timetable clash detection
  - **Status Indicators:** Show available slots, waitlist status
- **Data Displayed Per Subject:**
  - Subject code, name, department, credits
  - Instructor name, schedule details, room location
  - Enrollment capacity and current enrollments
  - Prerequisites and required academic standing
- **Suggested Thesis Placement:** Chapter 3 (Student Features)
- **Screenshots Need:** Subject list with filters, subject detail dialog, enrollment modal with conflict warning

#### 5. **Grades Page** (`GradesPage.tsx`)

- **Purpose:** Comprehensive grade tracking and performance analytics
- **Key Sections:**
  - **GPA Overview Card:** Current GPA, GPA trend (up/down), semester history
  - **Grade Table:** All grades by semester with subject, marks, grade letter
  - **Semester Tabs:** Toggle between current and historical semesters
  - **Year Filter:** View grades across multiple academic years
  - **Performance Analytics:** Grade distribution chart, performance trends
  - **Download Option:** Export grades as report
- **Visual Elements:**
  - Grade badges with color coding
  - Trending up/down indicators
  - GPA progression chart
  - Performance targets and achievement bars
- **Suggested Thesis Placement:** Chapter 3 (Student Features)
- **Screenshots Need:** Full grades view with analytics, semester toggle, GPA trend graph, download button

#### 6. **Calendar Page** (`CalendarPage.tsx`)

- **Purpose:** Academic schedule and event management
- **Key Features:**
  - **Dual View Modes:** Week view and Month view
  - **Event Types:** Lectures, labs, tutorials, exams, assignments
  - **Event Details:** Title, time, duration, location, instructor
  - **Navigation:** Previous/next period navigation, date picker
  - **Event Filtering:** Filter by event type
  - **Color Coding:** Different colors for each event type
- **Data Elements:**
  - Event title and type icon
  - Time and duration information
  - Room/location details
  - Instructor name
  - Additional notes or attachments
- **Suggested Thesis Placement:** Chapter 3 (Student Features)
- **Screenshots Need:** Week view of calendar with multiple events, month view layout, event detail tooltip

---

### **LECTURER PORTAL** (3 screens)

#### 7. **Lecturer Dashboard** (`LecturerDashboard.tsx`)

- **Purpose:** Instructor overview of teaching responsibilities and class management
- **Key Information:**
  - **Profile Section:** Name, ID, department, avatar, contact
  - **Class Statistics:** Total classes taught, total students, active enrollments
  - **Upcoming Classes:** Next scheduled classes with student count
  - **Recent Activities Feed:**
    - Grading activities ("Graded Assignment 3")
    - Material uploads ("Uploaded new material")
    - Announcements posted
  - **Class Performance Summary:** Attendance overview, grade distribution
  - **System Announcements:** Faculty-related announcements and deadlines
- **Quick Action Buttons:** Grade submission, upload materials, post announcement
- **Suggested Thesis Placement:** Chapter 4 (Lecturer Features)
- **Screenshots Need:** Full lecturer dashboard, upcoming classes widget, recent activities feed, class statistics

#### 8. **My Classes** (`MyClassesPage.tsx`)

- **Purpose:** Detailed class management and monitoring
- **Key Features Per Class:**
  - **Class Card Display:**
    - Course code, name, section, semester
    - Credits and enrollment numbers (active vs total)
    - Schedule details (days, times, rooms)
  - **Class Actions:**
    - View class roster/students
    - Upload course materials
    - View and manage grades
    - Post class announcements
    - Set assignments
  - **Attendance Monitoring:** Attendance percentage by student
  - **Grade Management:** View student grades, bulk upload marks
  - **Material Organization:** Organize materials by topic/week
- **Filtering & Sorting:** Filter by semester, search by course name
- **Suggested Thesis Placement:** Chapter 4 (Lecturer Features)
- **Screenshots Need:** List of classes with cards, class detail view, class action menu, student roster

#### 9. **Course/Materials Management** (`MaterialsPage.tsx`)

- **Purpose:** Upload and organize course materials
- **Key Features:**
  - **Material Organization:**
    - Organize by subject/course
    - Categorize by type (lectures, notes, assignments, etc.)
    - Organize by week/module
  - **Material Types Supported:**
    - PDF documents, video links
    - Lecture notes, slides
    - Assignment specifications
    - Reading materials
  - **File Operations:**
    - Upload new materials with metadata
    - Download materials
    - Preview materials
    - Edit material details
    - Share with specific classes
  - **Metadata Management:** Title, description, upload date, file size
  - **Search & Filter:** Find materials by name, type, class
- **Suggested Thesis Placement:** Chapter 4 (Lecturer Features) - can be combined with My Classes
- **Screenshots Need:** Material list/table view, upload dialog, organized by category view

---

### **ADMINISTRATOR PORTAL** (4 screens)

#### 10. **Admin Dashboard** (`AdminDashboard.tsx`)

- **Purpose:** System-wide overview and key metrics
- **Key Metrics Displayed:**
  - **User Statistics:** Total users, students, lecturers, admins
  - **Academic Statistics:** Total courses, subjects, enrollments
  - **System Health:** Pending requests, alerts, active sessions
  - **Recent Activities Feed:**
    - New registrations
    - Course updates
    - System backup status
    - Security alerts with priority levels
  - **System Alerts Panel:** Critical system alerts requiring attention
  - **Trend Indicators:** Growth metrics, performance trends
- **Quick Actions:** View detailed reports, manage users, configure system
- **Suggested Thesis Placement:** Chapter 5 (Admin Features)
- **Screenshots Need:** Full admin dashboard showing all widgets, system alerts section, activity feed

#### 11. **User Management** (`UserManagement.tsx`)

- **Purpose:** Create, update, and manage all system users
- **Key Features:**
  - **User Directory Table:** List all users with details
  - **User Fields:** Name, ID, email, phone, role, department, status
  - **Search & Filter:** Find users by name, email, role, department, status
  - **User Actions:**
    - Add new user (dialog form)
    - Edit existing user details
    - Delete user accounts
    - Change user role/department
    - Activate/deactivate accounts
    - Reset passwords
  - **Bulk Operations:** Export user list, bulk import from CSV
  - **Status Indicators:** Active, inactive, pending approval
  - **Avatar Display:** User profile pictures
- **Form Elements:** Comprehensive user creation/edit form with validation
- **Suggested Thesis Placement:** Chapter 5 (Admin Features)
- **Screenshots Need:** User list table, add/edit user dialog, search and filter options, bulk operations

#### 12. **Course Management** (`CourseManagement.tsx`)

- **Purpose:** Configure academic programs and courses
- **Key Features:**
  - **Course Listing:** All courses with details in table format
  - **Course Details:** Code, name, department, credits, description
  - **Course Actions:**
    - Add new course
    - Edit course details
    - Delete courses
    - Manage associated subjects
    - Assign instructors
  - **Subject Management:** Add/remove subjects to course
  - **Prerequisites:** Set and manage prerequisites
  - **Capacity Management:** Set course capacity limits
  - **Search & Filter:** By department, course code, status
  - **Status Indicators:** Active, inactive, archived
- **Data Validation:** Prevent duplicate courses, enforce requirements
- **Suggested Thesis Placement:** Chapter 5 (Admin Features)
- **Screenshots Need:** Course list table, add/edit course dialog, course details with subjects

#### 13. **Announcement Management** (`AnnouncementManagement.tsx`)

- **Purpose:** System-wide announcements and notifications
- **Key Features:**
  - **Announcement Listing:** All announcements in table/card format
  - **Announcement Fields:**
    - Title, content/description
    - Recipient type (system-wide, students only, lecturers, etc.)
    - Priority level (high, medium, low)
    - Publication status (draft, published, archived)
    - Scheduled time
  - **Announcement Actions:**
    - Create new announcements
    - Edit draft announcements
    - Publish announcements
    - Archive old announcements
    - Delete announcements
  - **Rich Text Editor:** Format announcement content
  - **Scheduling:** Schedule announcements for future publication
  - **Analytics:** View announcement read/view counts
  - **Search & Filter:** By date range, priority, status, recipient type
- **Suggested Thesis Placement:** Chapter 6 (Notification & Announcement System)
- **Screenshots Need:** Announcement list with status indicators, create/edit announcement dialog, rich text editor, scheduling options

#### 14. **Student Management (Lecturers' View)** (`StudentsPage.tsx`)

- **Purpose:** Monitor and manage enrolled students (for lecturers)
- **Key Features:**
  - **Student Directory:** List of all students in lecturer's classes
  - **Student Details:** Name, ID, email, phone, enrollment status
  - **Class Filter:** Filter students by class/course
  - **Year/Semester Filter:** View students by academic level
  - **Communication:**
    - Send direct messages to students
    - Send bulk announcements
    - Contact information display
  - **Performance Tracking:**
    - Individual student grades
    - Attendance records
    - Assignment submission status
  - **Quick Actions:** Email, message, view grades, view attendance
  - **Search:** Find specific students by name, ID, email
- **Suggested Thesis Placement:** Chapter 4 (Lecturer Features)
- **Screenshots Need:** Student list table, student detail card, contact options, performance indicators

---

### **SUPPORTING FEATURES** (2 screens)

#### 15. **Feature Showcase** (`FeatureShowcase.tsx`)

- **Purpose:** Interactive feature documentation and status page
- **Features Listed:**
  - Role-Based Authentication
  - Subject Enrollment with conflict detection
  - Grades & GPA Tracking
  - Academic Calendar (Week/Month views)
  - Material Upload & Distribution
  - Announcement System
  - User Management
  - Course Management
  - Responsive Design (Mobile, Tablet, Desktop)
- **Status Indicators:** Each feature shows completion status
- **Icon & Description:** Visual icon and descriptive text for each
- **Suggested Thesis Placement:** Chapter 1 (Introduction) or Chapter 8 (Implementation Details)
- **Screenshots Need:** Features grid view with completion badges, status indicators

#### 16. **Protected Route & Layout** (`ProtectedRoute.tsx`, `Layout.tsx`)

- **Purpose:** Navigation and access control wrapper
- **Key Components:**
  - Navigation bar with role-specific menu
  - Sidebar/navigation menu
  - User profile dropdown
  - Logout functionality
  - Breadcrumb navigation
  - Role-based menu items visibility
- **Suggested Thesis Placement:** Chapter 2 (System Architecture) and Chapter 8 (Implementation)
- **Screenshots Need:** Navigation bar layout, sidebar menu, user profile menu

---

## Suggested Table of Contents for Thesis

### **Part 1: Introduction & Overview**

- Chapter 1: Introduction to Edvance UMS
  - System Purpose and Goals
  - Key Features Overview (Reference Feature Showcase)
  - Technology Stack

### **Part 2: System Design & Architecture**

- Chapter 2: Authentication & Access Control
  - Login/Registration System (LoginPage screenshots)
  - Role-Based Access Control (RBAC)
  - Protected Routes and Navigation

### **Part 3: Student Experience**

- Chapter 3: Student Portal Features
  - Dashboard Overview (StudentDashboard)
  - Subject Enrollment & Course Registration (SubjectEnrollment)
  - Grade Tracking & Performance Analytics (GradesPage)
  - Academic Calendar & Schedule Management (CalendarPage)

### **Part 4: Lecturer Experience**

- Chapter 4: Lecturer Portal Features
  - Lecturer Dashboard & Overview (LecturerDashboard)
  - Class Management (MyClassesPage)
  - Course Materials & Resources (MaterialsPage)
  - Student Performance Monitoring (StudentsPage)

### **Part 5: Administration & Management**

- Chapter 5: Administration Panel
  - Admin Dashboard & System Overview (AdminDashboard)
  - User Management System (UserManagement)
  - Course & Subject Configuration (CourseManagement)
  - Announcement & Notification System (AnnouncementManagement)

### **Part 6: Technical Implementation**

- Chapter 6: System Architecture & Components
  - Frontend Architecture & Technology Stack
  - UI Component Library (shadcn/ui, Tailwind CSS)
  - State Management Approach
  - Responsive Design & Mobile Support

### **Part 7: Conclusion & Future Scope**

- Chapter 7: Conclusion & Recommendations
  - System Achievements
  - Limitations & Challenges
  - Future Enhancements & Roadmap

---

## Screenshot Distribution Plan

### **Chapter 1: Introduction (1-2 screenshots)**

- Feature Showcase page showing all implemented features
- System architecture diagram

### **Chapter 2: Authentication (2-3 screenshots)**

- Login form with role selection
- Role selection dropdown detailed
- Error state with invalid credentials

### **Chapter 3: Student Features (4-5 screenshots)**

- Student Dashboard full view
- Subject Enrollment list with filters
- Subject detail modal
- Grades page with analytics
- Calendar week view

### **Chapter 4: Lecturer Features (4-5 screenshots)**

- Lecturer Dashboard
- My Classes page with class cards
- Class detail/roster view
- Materials upload interface
- Student list for a class

### **Chapter 5: Admin Features (3-4 screenshots)**

- Admin Dashboard with system stats
- User Management table
- Add user dialog
- Course Management page
- Announcement Management page

### **Chapter 6: Technical Implementation (2-3 screenshots)**

- Navigation layout/component structure
- Responsive design examples (mobile, tablet, desktop)
- UI component examples from shadcn/ui

---

## Key UI Patterns Used Across Screens

1. **Card-Based Layouts:** Dashboard cards for metrics and quick actions
2. **Data Tables:** User lists, grades, announcements using standardized table component
3. **Modal Dialogs:** For forms (add user, enroll subject, post announcement)
4. **Dropdown Menus:** Role selection, filtering, bulk actions
5. **Tab Navigation:** Semester selection, different views
6. **Badge Indicators:** Status indicators, priority levels, grade colors
7. **Search & Filter:** Available on most list/table pages
8. **Icon Integration:** Lucide icons for visual clarity
9. **Color Coding:** Grade badges, priority indicators, status states
10. **Responsive Grid:** Mobile-first design adapting to all screen sizes

---

## User Roles & Access Matrix

| Feature                   | Student | Lecturer      | Admin   |
| ------------------------- | ------- | ------------- | ------- |
| Dashboard (Role-specific) | ✓       | ✓             | ✓       |
| Subject Enrollment        | ✓       | -             | -       |
| Grades Viewing            | ✓ (own) | ✓ (class)     | ✓ (all) |
| Calendar/Schedule         | ✓       | ✓             | -       |
| My Classes                | -       | ✓             | -       |
| Materials Management      | -       | ✓             | -       |
| User Management           | -       | -             | ✓       |
| Course Management         | -       | -             | ✓       |
| Announcements (View)      | ✓       | ✓             | ✓       |
| Announcements (Create)    | -       | ✓             | ✓       |
| Student Monitoring        | -       | ✓ (own class) | ✓ (all) |

---

## Data Complexity Overview

### **Simple Data Models** (Good for early thesis chapters)

- User profiles (name, email, role)
- Announcements (title, content, date)

### **Moderate Complexity** (Middle thesis chapters)

- Grade tracking (subject, marks, GPA calculation)
- Subject enrollment (conflict detection, prerequisites)
- Class schedules (time slots, room assignments)

### **High Complexity** (Advanced thesis chapters)

- Academic calendar (recurring events, exam schedules)
- Course prerequisites and dependencies
- Timetable conflict resolution algorithms

---

## Performance & Scale Information

- **Typical User Base:** 1000+ students, 150+ lecturers, 11+ admins
- **Typical Course Load:** 80+ courses, 300+ subjects
- **Expected Concurrent Enrollment:** 2800+ active enrollments
- **Data Refresh:** Real-time for dashboards, periodic for reports

---

## Responsive Design Coverage

All screens are designed to be responsive across:

- **Desktop:** 1920px+ width
- **Tablet:** 768px - 1024px width
- **Mobile:** 320px - 767px width

---

## Technology Stack for Technical Chapters

- **Frontend Framework:** React 18+ with TypeScript
- **Build Tool:** Vite 5.0+
- **UI Component Library:** shadcn/ui (built on Radix UI primitives)
- **Styling:** Tailwind CSS 4.0+
- **Icons:** Lucide React
- **State Management:** React Context API
- **Development Tools:** ESLint, TypeScript strict mode

---

## Notes for Thesis Writing

1. **Start with authentication** (simple, foundational)
2. **Follow with student features** (most visible, largest user base)
3. **Then lecturer features** (builds on student features)
4. **Finally admin features** (most complex, policy-driven)
5. **Use Feature Showcase page** as reference for all features
6. **Include screenshots progressively** - don't cluster them all at once
7. **Explain user workflows** not just features
8. **Highlight role-based differences** in access and functionality
9. **Document business rules** like conflict detection, prerequisites
10. **Show data relationships** through entity diagrams if needed
