import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import LabelBottomNavigation from "./components/Navigation";
import axios from "axios";
import Class from "./pages/Class/Class";
import ClassAdd from "./pages/Class/ClassAdd";
import StudentAdd from "./pages/Student/StudentAdd";
import Student from "./pages/Student/Student";
import Teacher from "./pages/Teacher/Teacher";
import TeacherAdd from "./pages/Teacher/TeacherAdd";
import LeftDrawer from "./components/LeftDrawer";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
      <LeftDrawer></LeftDrawer>
        <main className="content">
          <Routes>
            <Route path="/class" element={<Class />} />
            <Route path="/class/classAdd" element={<ClassAdd />} />
            <Route path="/student" element={<Student />} />
            <Route path="/student/studentAdd" element={<StudentAdd />} />
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/teacher/teacherAdd" element={<TeacherAdd />} />
          </Routes>
        </main>
      </div>
      </ThemeProvider>
      </ColorModeContext.Provider>
  );
}

export default App;
