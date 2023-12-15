import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Grid,
  Button,
  TextField,
  Autocomplete,
  Link,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import ParameterService from "../../services/ParameterService";
import TeacherSyllabus from "./TeacherSyllabus";
import Syllabus from "../../components/Syllabus";
import TeacherService from "../../services/TeacherService";

const AddTeacher = () => {
  const [cancelToken, setCancelToken] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [teacherSyllabus, setTeacherSyllabus] = useState([]);
  const [visible, setVisible] = useState("Hidden");
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    if (cancelToken) {
      cancelToken.cancel("Operation canceled by the user.");
    }
    const newCancelToken = axios.CancelToken.source();
    setCancelToken(newCancelToken);

    let parameterService = new ParameterService();
    parameterService
      .getParameterByParamType("LESSON")
      .then((result) => setLessons(result.data.data));

    return () => {
      if (newCancelToken) {
        newCancelToken.cancel("Component unmounted.");
      }
    };
  }, []);

  const addTeacher = () => {
    // var contract = {
    //   firstName: firstName,
    //   lastName: lastName,
    //   lessonId: selectedLesson.id,
    //   schoolId: 1,
    // };
    // let teacherService = new TeacherService();
    // teacherService.addTeacher(contract).then((result) => {
    setVisible("Visible");
    setDisable(true);
    //});
  };

  const columns = [
    { field: "day", headerName: "Gün", flex: 0.2 },
    {
      field: "lesson1",
      editable: true,
      headerName: "Ders 1",
      flex: 0.2,
      type: "singleSelect",
      valueOptions: lessons?.map((option) => option.lessons),
    },
    {
      field: "lesson2",
      editable: true,
      headerName: "Ders 2",
      flex: 0.2,
      type: "singleSelect",
      valueOptions: lessons?.map((option) => option.lessons),
    },
    {
      field: "lesson3",
      editable: true,
      headerName: "Ders 3",
      flex: 0.2,
      type: "singleSelect",
      valueOptions: lessons?.map((option) => option.lessons),
    },
    {
      field: "lesson4",
      editable: true,
      headerName: "Ders 4",
      flex: 0.2,
      type: "singleSelect",
      valueOptions: lessons?.map((option) => option.lessons),
    },
    {
      field: "lesson5",
      editable: true,
      headerName: "Ders 5",
      flex: 0.2,
      type: "singleSelect",
      valueOptions: lessons?.map((option) => option.lessons),
    },
    {
      field: "lesson6",
      editable: true,
      headerName: "Ders 6",
      flex: 0.2,
      type: "singleSelect",
      valueOptions: lessons?.map((option) => option.lessons),
    },
    {
      field: "lesson7",
      editable: true,
      headerName: "Ders 7",
      flex: 0.2,
      type: "singleSelect",
      valueOptions: lessons?.map((option) => option.lessons),
    },
    {
      field: "lesson8",
      editable: true,
      headerName: "Ders 8",
      flex: 0.2,
      type: "singleSelect",
      valueOptions: lessons?.map((option) => option.lessons),
    },
  ];

  return (
    <Grid
      sx={{ height: "100%", width: "100%" }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="row"
    >
      <Box sx={{ height: "100%", width: "80%" }}>
        <Header
          title="Öğretmen Ekle"
          subtitle="Sisteme Yeni Öğretmen ve Ders Programının Eklenmesi"
        />
        <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} md={3}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="Adı"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextField
              autoComplete="given-name"
              name="lastName"
              required
              fullWidth
              id="lastName"
              label="Soyadı"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <Autocomplete
              id="combo-box-demo"
              fullWidth
              options={lessons?.map((option) => option.paramDescription)}
              renderInput={(params) => <TextField {...params} label="Dersi" />}
              onInputChange={(event, newInputValue) => {
                setSelectedLesson(
                  lessons.find((obj) => {
                    return obj.paramDescription === newInputValue;
                  })
                );
              }}
            ></Autocomplete>
          </Grid>
          <Grid item xs={6} md={3} justifyContent="center">
            <Button
              fullWidth
              variant="contained"
              sx={{ backgroundColor: "#1F2A40", height: "100%" }}
              disabled={disable}
              onClick={() => {
                addTeacher();
              }}
            >
              Öğretmen Ekle
            </Button>
          </Grid>
          <Grid item xs={12} md={12} visibility={visible}>
            <Syllabus></Syllabus>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default AddTeacher;
