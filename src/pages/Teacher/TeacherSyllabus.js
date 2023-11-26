import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Grid, Button, TextField } from "@mui/material";
import {
  GridRowModes,
  DataGrid,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from "@mui/x-data-grid";
import Autocomplete from "@mui/material/Autocomplete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import Header from "../../components/Header";
import TeacherService from "../../services/TeacherService";
import TeacherSyllabusService from "../../services/TeacherSyllabusService";
import ClassService from "../../services/ClassService";

const TeacherSyllabus = () => {
  const [classes, setClasses] = useState([]);
  const [inputvalue, setInputvalue] = useState(null);
  const [teachers, setTeachers] = useState([]);
  const [teacherSyllabus, setTeacherSyllabus] = useState([]);

  const [selectedTeacher, SetSelectedTeacher] = useState(null);
  const [visibleDataGrid, SetVisibleDataGrid] = useState("hidden");

  const [cancelToken, setCancelToken] = useState(null);
  const [updateButtonDisabled, setUpdateButtonDisabled] = useState(true);
  const [selectedRow, setSelectedRow] = useState(null);
  const [open, setOpen] = useState(true);
  const [rowModesModel, setRowModesModel] = useState({});

  useEffect(() => {
    if (cancelToken) {
      cancelToken.cancel("Operation canceled by the user.");
    }
    const newCancelToken = axios.CancelToken.source();
    setCancelToken(newCancelToken);

    let teacherService = new TeacherService();
    teacherService
      .getAllTeachers()
      .then((result) => setTeachers(result.data.data));

    let classService = new ClassService();
    classService.getAllClasses().then((result) => setClasses(result.data.data));

    return () => {
      if (newCancelToken) {
        newCancelToken.cancel("Component unmounted.");
      }
    };
  }, []);

  const getTeacherSyllabus = (id) => {
    let teacherSyllabusService = new TeacherSyllabusService();
    teacherSyllabusService
      .getAllTeacherSyllabusByTeacherId(id)
      .then((result) => {
        setTeacherSyllabus(result.data.data);
        SetVisibleDataGrid(true);
      });
  };

  const updateTeacherSyllabus = (id) => {
    let teacherSyllabusService = new TeacherSyllabusService();
    teacherSyllabusService
      .getAllTeacherSyllabusByTeacherId(id)
      .then((result) => {
        setTeacherSyllabus(result.data.data);
        SetVisibleDataGrid(true);
      });
  };

  const selectRowData = (value) => {
    setSelectedRow(value);
    setUpdateButtonDisabled(false);
  };
  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };
  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };
  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setTeacherSyllabus(
      teacherSyllabus.map((row) => (row.id === newRow.id ? updatedRow : row))
    );
    return updatedRow;
  };
  const columns = [
    { field: "day", headerName: "Gün", flex: 0.2 },
    {
      field: "lesson1",
      editable: true,
      headerName: "Ders 1",
      flex: 0.2,
      type: "singleSelect",
      valueOptions: classes?.map((option) => option.className),
    },
    {
      field: "lesson2",
      editable: true,
      headerName: "Ders 2",
      flex: 0.2,
      type: "singleSelect",
      valueOptions: classes?.map((option) => option.className),
    },
    {
      field: "lesson3",
      editable: true,
      headerName: "Ders 3",
      flex: 0.2,
      type: "singleSelect",
      valueOptions: classes?.map((option) => option.className),
    },
    {
      field: "lesson4",
      editable: true,
      headerName: "Ders 4",
      flex: 0.2,
      type: "singleSelect",
      valueOptions: classes?.map((option) => option.className),
    },
    {
      field: "lesson5",
      editable: true,
      headerName: "Ders 5",
      flex: 0.2,
      type: "singleSelect",
      valueOptions: classes?.map((option) => option.className),
    },
    {
      field: "lesson6",
      editable: true,
      headerName: "Ders 6",
      flex: 0.2,
      type: "singleSelect",
      valueOptions: classes?.map((option) => option.className),
    },
    {
      field: "lesson7",
      editable: true,
      headerName: "Ders 7",
      flex: 0.2,
      type: "singleSelect",
      valueOptions: classes?.map((option) => option.className),
    },
    {
      field: "lesson8",
      editable: true,
      headerName: "Ders 8",
      flex: 0.2,
      type: "singleSelect",
      valueOptions: classes?.map((option) => option.className),
    },
    {
      field: "nameSurname",
      editable: true,
      type: "singleSelect",
      valueOptions: classes?.map((option) => option.className),
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];
  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setTeacherSyllabus(teacherSyllabus.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = teacherSyllabus.find((row) => row.id === id);
    if (editedRow.isNew) {
      setTeacherSyllabus(teacherSyllabus.filter((row) => row.id !== id));
    }
  };
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
          title="Ders Programı"
          subtitle="Seçili Öğretmenin Ders Programının Görüntülenmesi"
        />
        <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} md={3}>
            <Autocomplete
              id="combo-box-demo"
              fullWidth
              options={teachers?.map((option) => option.nameSurname)}
              renderInput={(params) => <TextField {...params} label="Sınıfı" />}
              onInputChange={(event, newInputValue) => {
                setInputvalue(
                  teachers.find((obj) => {
                    return obj.nameSurname === newInputValue;
                  })
                );
                getTeacherSyllabus();
              }}
            ></Autocomplete>
          </Grid>
          <Grid item xs={6} md={3} justifyContent="center">
            <Button
              fullWidth
              variant="contained"
              sx={{ backgroundColor: "#1F2A40", height: "100%" }}
              onClick={() => {
                getTeacherSyllabus(inputvalue.id);
              }}
            >
              Ders Programını Getir
            </Button>
          </Grid>
          <Grid item xs={12} md={12} visibility={visibleDataGrid}>
            <DataGrid
              rows={teacherSyllabus}
              columns={columns}
              editMode="row"
              rowModesModel={rowModesModel}
              onRowModesModelChange={handleRowModesModelChange}
              onRowEditStop={handleRowEditStop}
              processRowUpdate={processRowUpdate}
              onRowClick={(e) => selectRowData(e)}
              sx={{
                "& .MuiDataGrid-root": {
                  border: "none",
                },
                "& .MuiDataGrid-cell": {
                  borderBottom: "none",
                },
                "& .name-column--cell": {
                  color: "#94e2cd",
                },
                "& .MuiDataGrid-columnHeaders": {
                  backgroundColor: "#a4a9fc",
                  borderBottom: "none",
                },
                "& .MuiDataGrid-virtualScroller": {
                  backgroundColor: "#f2f0f0",
                },
                "& .MuiDataGrid-footerContainer": {
                  borderTop: "none",
                  backgroundColor: "#a4a9fc",
                },
                "& .MuiCheckbox-root": {
                  color: `#1e5245 !important`,
                },
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                  color: `#141414 !important`,
                },
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};
export default TeacherSyllabus;
