import { Routes, Route, Navigate } from "react-router";
import AllClasses from "./pages/Class/AllClasses";
import AddClass from "./pages/Class/AddClass";
import AddStudent from "./pages/Student/AddStudent";
import AllStudents from "./pages/Student/AllStudents";
import TeacherSyllabus from "./pages/Teacher/TeacherSyllabus";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import StudentDetail from "./pages/Student/StudentDetail";
import StudentNotes from "./pages/Student/StudentNotes";
import TopNavigation from "./components/TopNavigation";
import AddTeacher from "./pages/Teacher/AddTeacher";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div>
          <div className="navigation">
            <TopNavigation></TopNavigation>
          </div>

          <main className="content">
            <Routes>
              {/* <Route path="/" element={<Dashboard />} /> */}
              <Route
                path="/"
                element={<Navigate to="/student" replace={true} />}
              />
              <Route path="/class" element={<AllClasses />} />
              <Route path="/class/classAdd" element={<AddClass />} />
              <Route path="/student" element={<AllStudents />} />
              <Route path="/student/studentAdd" element={<AddStudent />} />
              <Route path="/teacherSyllabus" element={<TeacherSyllabus />} />
              <Route path="/teacher/teacherAdd" element={<AddTeacher />} />

              <Route path="/studentDetail" element={<StudentDetail />} />
              <Route path="/studentNotes" element={<StudentNotes />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
