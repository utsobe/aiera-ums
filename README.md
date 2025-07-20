# Ai-Era University Management System (UMS)

A modern, responsive university management system built with React, TypeScript, and shadcn/ui components following the Rapid Application Development (RAD) methodology.

![Ai-Era UMS](https://img.shields.io/badge/React-18.0+-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)
![Vite](https://img.shields.io/badge/Vite-5.0+-green.svg)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-latest-purple.svg)

## 🚀 Features

### 🎓 Student Features
- **Dashboard**: Personalized overview with GPA, attendance, and quick stats
- **Subject Enrollment**: Browse, enroll, and drop subjects with conflict detection
- **Grades Management**: View detailed grades, GPA calculation, and performance analytics
- **Academic Calendar**: Weekly/monthly view of classes, exams, and assignments
- **Schedule Management**: Real-time timetable with today's events

### 👨‍🏫 Lecturer Features (Coming Soon)
- Class management and attendance tracking
- Grade submission and student performance monitoring
- Course material uploads and distribution

### 👨‍💼 Admin Features (Coming Soon)
- User management (students, lecturers, staff)
- Course and department management
- System-wide announcements and notifications

## 🏗️ System Architecture

```
+-----------------------------+
|       Ai-Era Frontend      |
+-----------------------------+
| Role-Based UI Modules      |
| ├── Student Dashboard      |
| ├── Lecturer Dashboard     |
| ├── Admin Panel            |
+-----------------------------+
| Core Components             |
| ├── Login / Registration   |
| ├── Navigation Bar         |
| ├── Calendar Viewer        |
| ├── Notification System    |
| ├── Subject Enrollment UI  |
+-----------------------------+
| shadcn/ui Component Library |
+-----------------------------+
```

## 🛠️ Technology Stack

- **Frontend Framework**: React 18+ with TypeScript
- **Build Tool**: Vite 7.0+
- **UI Components**: shadcn/ui (based on Radix UI)
- **Styling**: Tailwind CSS 4.0+
- **Icons**: Lucide React
- **State Management**: React Context API
- **Development**: ESLint, TypeScript strict mode

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn package manager
- Modern web browser with ES6+ support

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd aiera-ums
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 👤 Test Credentials

### Student Account
- **Email**: john.student@aiera.edu
- **Password**: password123
- **Role**: Student

### Lecturer Account
- **Email**: sarah.lecturer@aiera.edu
- **Password**: password123
- **Role**: Lecturer

### Admin Account
- **Email**: admin@aiera.edu
- **Password**: password123
- **Role**: Admin

## 📱 Responsive Design

The application is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop computers (1024px+)
- 🖥️ Large screens (1920px+)

## 🎨 UI/UX Features

### Design Principles
- **Accessibility**: WCAG 2.1 compliant with proper contrast ratios
- **Consistency**: Unified color scheme and typography
- **Usability**: Intuitive navigation with minimal clicks
- **Performance**: Optimized loading and smooth transitions

### Component Library
Built using shadcn/ui components:
- Cards and layouts
- Forms and inputs
- Data tables
- Dialogs and modals
- Navigation elements
- Badges and status indicators

## 📊 Functional Requirements

### Core Features (Implemented)
- ✅ **FR1**: Role-based authentication (Student, Lecturer, Admin)
- ✅ **FR2**: Student dashboard with academic overview
- ✅ **FR3**: Subject enrollment with conflict detection
- ✅ **FR4**: Grade viewing and GPA calculation
- ✅ **FR5**: Academic calendar and timetable
- ✅ **FR6**: User registration system

### Upcoming Features
- 🔄 **FR7**: Lecturer grade submission
- 🔄 **FR8**: Admin user management
- 🔄 **FR9**: Course material uploads
- 🔄 **FR10**: Notification system

## 📐 Non-Functional Requirements

- ✅ **NFR1**: Responsive design for all device sizes
- ✅ **NFR2**: Consistent design system and branding
- ✅ **NFR3**: Accessibility compliance (ARIA labels, keyboard navigation)
- ✅ **NFR4**: Smooth navigation with loading states
- ✅ **NFR5**: Type-safe development with TypeScript
- ✅ **NFR6**: Modern component-based architecture

## 🚀 Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   └── Layout.tsx      # Main layout component
├── contexts/           # React Context providers
│   └── AuthContext.tsx # Authentication context
├── pages/              # Application pages
│   ├── LoginPage.tsx
│   ├── RegistrationPage.tsx
│   ├── StudentDashboard.tsx
│   ├── SubjectEnrollment.tsx
│   ├── GradesPage.tsx
│   └── CalendarPage.tsx
├── types/              # TypeScript type definitions
│   └── index.ts
├── lib/                # Utility functions
│   └── utils.ts
├── App.tsx             # Main application component
└── main.tsx           # Application entry point
```

## 🎯 Future Enhancements

### Phase 2 Development
1. **Backend Integration**
   - REST API development
   - Database design and implementation
   - Real-time notifications

2. **Advanced Features**
   - File upload system
   - Email notifications
   - Report generation
   - Mobile app development

3. **Performance Optimization**
   - Code splitting
   - Lazy loading
   - Caching strategies
   - PWA capabilities

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is part of an academic assignment for Ai-Era University. All rights reserved.

## 👥 Development Team

- **Project Lead**: [Your Name]
- **UI/UX Design**: Figma-based prototyping
- **Development**: React + TypeScript
- **Quality Assurance**: ESLint + TypeScript strict mode

## 📞 Support

For technical support or questions about the project:
- Create an issue in the repository
- Contact the development team
- Refer to the documentation

---

**Built with ❤️ using React, TypeScript, and shadcn/ui**
