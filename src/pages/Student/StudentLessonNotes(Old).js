import { Box, TextField, Typography, Button, Link, Grid } from "@mui/material";
import Header from "../../components/Header";
import React, { useState, useEffect } from "react";
import StudentService from "../../services/StudentService";
import axios from "axios";
import Stack from "@mui/material/Stack";

const StudentLessonNotes = () => {
  const [students, setStudents] = useState([]);
  const [cancelToken, setCancelToken] = useState(null);
  const [student, setStudent] = useState(null);

  useEffect(() => {
    if (cancelToken) {
      cancelToken.cancel("Operation canceled by the user.");
    }
    const newCancelToken = axios.CancelToken.source();
    setCancelToken(newCancelToken);

    let studentService = new StudentService();
    studentService
      .getAllStudents()
      .then((result) => setStudents(result.data.data));
    return () => {
      if (newCancelToken) {
        newCancelToken.cancel("Component unmounted.");
      }
    };
  }, []);

  const updateStudentInfo = () => {
    var contract = student;
    let studentService = new StudentService();
    studentService.UpdateStudent(contract).then((result) => {
      console.log(result.data);
      setTimeout(() => {}, 2000);
    });
  };

  const updateFieldChanged = (index) => (e) => {
    console.log("index: " + index);
    var property = e.target.name;
    console.log("property name: " + e.target.name);
    let newArr = [...students]; // copying the old datas array
    // a deep copy is not needed as we are overriding the whole object below, and not setting a property of it. this does not mutate the state.
    newArr[index][property] = e.target.value; // replace e.target.value with whatever you want to change it to

    setStudents(newArr);
  };

  return (
    <Grid
      sx={{ height: "100%", width: "100%" }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box width={"95%"} height={"90%"}>
        <Header title="Büşra Doğan" subtitle="11/A Sınfı - 1. Dönem Notları" />
        <Grid container spacing={2} flexDirection="row">
          <Grid item xs={6} md={4}>
            <Typography sx={{ fontSize: 30, width: "100%" }} color={"GrayText"}>
              Ders
            </Typography>
          </Grid>
          <Grid item xs={6} md={1}>
            <Typography
              align="center"
              sx={{ fontSize: 30, width: "100%" }}
              color={"GrayText"}
            >
              Not 2
            </Typography>
          </Grid>
          <Grid item xs={6} md={1}>
            <Typography
              align="center"
              sx={{ fontSize: 30, width: "100%" }}
              color={"GrayText"}
            >
              Not 2
            </Typography>
          </Grid>
          <Grid item xs={6} md={1}>
            <Typography
              align="center"
              sx={{ fontSize: 30, width: "100%" }}
              color={"GrayText"}
            >
              Not 3
            </Typography>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography
              align="center"
              sx={{ fontSize: 30, width: "100%" }}
              color={"GrayText"}
            >
              Ortalama
            </Typography>
          </Grid>
          <Grid item xs={6} md={1}></Grid>
          <Grid item xs={6} md={2}>
            <Typography
              align="center"
              sx={{ fontSize: 30, width: "100%" }}
              color={"GrayText"}
            >
              Sonuç
            </Typography>
          </Grid>
        </Grid>

        {students.map((student, index) => (
          <Grid
            container
            spacing={2}
            rowSpacing={2}
            rowGap={2}
            flexDirection="row"
            key={student.id}
          >
            <Grid item xs={6} md={4}>
              <TextField
                name="name"
                fullWidth
                value={student.name}
                onChange={updateFieldChanged(index)}
              ></TextField>
            </Grid>
            <Grid item xs={6} md={1}>
              <TextField fullWidth value={student.name}>
                Matematik
              </TextField>
            </Grid>
            <Grid item xs={6} md={1}>
              <TextField fullWidth value={student.name}>
                Matematik
              </TextField>
            </Grid>
            <Grid item xs={6} md={1}>
              <TextField fullWidth value={student.name}>
                Matematik
              </TextField>
            </Grid>
            <Grid item xs={6} md={2}>
              <TextField fullWidth value={student.name}>
                Matematik
              </TextField>
            </Grid>
            <Grid item xs={6} md={1}></Grid>
            <Grid item xs={6} md={2}>
              <TextField fullWidth value={student.name}>
                Matematik
              </TextField>
            </Grid>
          </Grid>
        ))}

        <Grid
          container
          spacing={2}
          flexDirection="row"
          justifyContent="flex-end"
        >
          <Grid item xs={6} md={1}>
            <Stack direction="column" spacing={2}>
              <Button
                variant="contained"
                component={Link}
                sx={{ backgroundColor: "#1F2A40" }}
                onClick={() => {
                  updateStudentInfo();
                }}
              >
                Güncelle
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default StudentLessonNotes;
