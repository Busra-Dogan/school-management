import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import LabelBottomNavigation from './components/Navigation';
import axios from "axios";
import Class from './pages/Class/Class';
import ClassAdd from './pages/Class/ClassAdd';
import StudentAdd from "./pages/Student/StudentAdd";
import Student from "./pages/Student/Student";
import Teacher from "./pages/Teacher/Teacher";
import TeacherAdd from "./pages/Teacher/TeacherAdd";
import LeftDrawer from "./components/LeftDrawer";

function App() {


  return (
    <div className="App">
      {/* <LabelBottomNavigation></LabelBottomNavigation> */}
      <LeftDrawer></LeftDrawer>
      <Routes>
        <Route path="/class" element={<Class/>} />
        <Route path="/class/classAdd" element={<ClassAdd/>} />
        <Route path="/student" element={<Student/>} />
        <Route path="/student/studentAdd" element={<StudentAdd/>} />
        <Route path="/teacher" element={<Teacher/>} />
        <Route path="/teacher/teacherAdd" element={<TeacherAdd/>} />
      </Routes>
    </div>
  );
}

export default App;
