import React, { useState, useEffect } from "react";
import StudentService from "../../services/StudentService";
import axios from "axios";
import StudentNoteService from "../../services/StudentNoteService";
import { useSearchParams } from "react-router-dom";
import {
  Box,
  TextField,
  Typography,
  Button,
  Link,
  Grid,
  Stack,
} from "@mui/material";
import Header from "../../components/Header";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import { useNavigate } from "react-router-dom";

const StudentNotes = () => {
  const [studentNotes, setStudentNotes] = useState([]);
  const [updatedRows, setUpdatedRows] = useState([]);
  const [cancelToken, setCancelToken] = useState(null);
  const [studentName, setStudentName] = useState("");
  const [className, setClassName] = useState("");
  const [updateButtonDisabled, setUpdateButtonDisabled] = useState(true);

  const [searchParams] = useSearchParams();
  const infoId = searchParams.get("studentId");

  useEffect(() => {
    if (cancelToken) {
      cancelToken.cancel("Operation canceled by the user.");
    }
    const newCancelToken = axios.CancelToken.source();
    setCancelToken(newCancelToken);

    let studentService = new StudentNoteService();
    studentService.getStudentLectureById(infoId).then((result) => {
      setStudentNotes(result.data.data);
      setStudentName(result.data.data[0].studentName);
      setClassName(result.data.data[0].className);
    });
    return () => {
      if (newCancelToken) {
        newCancelToken.cancel("Component unmounted.");
      }
    };
  }, []);

  const columns = [
    { field: "lessonName", headerName: "Ders", flex: 1 },
    {
      field: "note1",
      headerName: "Not 1",
      flex: 0.1,
      editable: true,
      cellClassName: "cell",
      align: "center",
    },
    {
      field: "note2",
      headerName: "Not 2",
      flex: 0.1,
      editable: true,
      cellClassName: "cell",
      align: "center",
    },
    {
      field: "note3",
      headerName: "Not 3",
      flex: 0.1,
      editable: true,
      cellClassName: "cell",
      align: "center",
    },
    { field: "average", headerName: "Ortalama", flex: 0.3, align: "right" },
  ];

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setUpdatedRows([...updatedRows, updatedRow]);
    setUpdateButtonDisabled(false);
    console.log(updatedRows);
    return updatedRow;
  };

  const updateStudentNotes = () => {
    let studentService = new StudentNoteService();
    studentService.updateStudentLectureNotes(updatedRows).then((result) => {
      console.log(result.data);
      setUpdatedRows([]);
      setUpdateButtonDisabled(true);
      let studentServiceForNotes = new StudentNoteService();
      studentServiceForNotes.getStudentLectureById(infoId).then((result) => {
        setStudentNotes(result.data.data);
        setStudentName(result.data.data[0].studentName);
        setClassName(result.data.data[0].className);
      });
    });
  };

  return (
    <Grid
      sx={{ height: "100%", width: "100%" }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="row"
    >
      <Box width={"95%"} height={"90%"}>
        <Header title={studentName} subtitle={className + " Sınıfı"} />
        <Grid container marginBottom={"1%"} width={"75%"}>
          <DataGrid
            rows={studentNotes}
            columns={columns}
            paginationModel={{ pageSize: 15, page: 0 }}
            processRowUpdate={processRowUpdate}
            showCellVerticalBorder={true}
            showColumnVerticalBorder={true}
            showCellRightBorder={true}
            sx={{
              "& .name-column--cell": {
                color: "#94e2cd",
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "#94e2cd",
                borderBottom: "none",
              },
              "& .MuiDataGrid-virtualScroller": {
                backgroundColor: "#f2f0f0",
              },
              "& .MuiCheckbox-root": {
                color: `#1e5245 !important`,
              },
              "& .MuiDataGrid-cellContent": {
                fontWeight: "bold",
              },
            }}
          />
        </Grid>
        <Stack
          width={"75%"}
          direction="row"
          justifyContent="flex-end"
          spacing={2}
        >
          <Button
            variant="contained"
            component={Link}
            disabled={updateButtonDisabled}
            sx={{ backgroundColor: "#1F2A40" }}
            onClick={() => {
              updateStudentNotes();
            }}
          >
            Kaydet
          </Button>
        </Stack>
      </Box>
    </Grid>
  );
};

export default StudentNotes;
