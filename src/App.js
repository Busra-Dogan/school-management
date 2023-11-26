import { Routes, Route, Navigate } from "react-router";
import Class from "./pages/Class/Class";
import ClassAdd from "./pages/Class/ClassAdd";
import StudentAdd from "./pages/Student/StudentAdd";
import Student from "./pages/Student/Student";
import TeacherSyllabus from "./pages/Teacher/TeacherSyllabus";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import StudentDetail from "./pages/Student/StudentDetail";
import StudentLessonNotes from "./pages/Student/StudentLessonNotes";
import StudentNotes from "./pages/Student/StudentNotes";
import BottomNavigation1 from "./components/BottomNavigation";
function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div>
          <div className="navigation">
            <BottomNavigation1></BottomNavigation1>
          </div>

          <main className="content">
            <Routes>
              <Route path="/class" element={<Class />} />
              <Route path="/class/classAdd" element={<ClassAdd />} />
              <Route path="/student" element={<Student />} />
              <Route path="/student/studentAdd" element={<StudentAdd />} />
              <Route path="/teacherSyllabus" element={<TeacherSyllabus />} />
              <Route path="/studentDetail" element={<StudentDetail />} />
              <Route
                path="/studentLessonNotes"
                element={<StudentLessonNotes />}
              />
              <Route
                path="/"
                element={<Navigate to="/student" replace={true} />}
              />
              <Route path="/studentNotes" element={<StudentNotes />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
