import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Grid, Button, TextField, Stack } from "@mui/material";
import {
  GridRowModes,
  DataGrid,
  GridActionsCellItem,
  GridRowEditStopReasons,
  GridOverlay,
} from "@mui/x-data-grid";
import Autocomplete from "@mui/material/Autocomplete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import TeacherService from "../services/TeacherService";
import TeacherSyllabusService from "../services/TeacherSyllabusService";
import ClassService from "../services/ClassService";
import { styled } from "@mui/material/styles";

const Syllabus = () => {
  const [classes, setClasses] = useState([]);
  const [inputvalue, setInputvalue] = useState(null);
  const [teachers, setTeachers] = useState([]);
  const [teacherSyllabus, setTeacherSyllabus] = useState([]);
  const [visibleDataGrid, SetVisibleDataGrid] = useState("hidden");
  const [cancelToken, setCancelToken] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
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
  const StyledGridOverlay = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    "& .ant-empty-img-1": {
      fill: theme.palette.mode === "light" ? "#aeb8c2" : "#262626",
    },
    "& .ant-empty-img-2": {
      fill: theme.palette.mode === "light" ? "#f5f5f7" : "#595959",
    },
    "& .ant-empty-img-3": {
      fill: theme.palette.mode === "light" ? "#dce0e6" : "#434343",
    },
    "& .ant-empty-img-4": {
      fill: theme.palette.mode === "light" ? "#fff" : "#1c1c1c",
    },
    "& .ant-empty-img-5": {
      fillOpacity: theme.palette.mode === "light" ? "0.8" : "0.08",
      fill: theme.palette.mode === "light" ? "#f5f5f5" : "#fff",
    },
  }));
  const getTeacherSyllabus = (id) => {
    let teacherSyllabusService = new TeacherSyllabusService();
    teacherSyllabusService
      .getAllTeacherSyllabusByTeacherId(id)
      .then((result) => {
        setTeacherSyllabus(result.data.data);
        SetVisibleDataGrid(true);
      });
  };

  const updateTeacherSyllabus = (contract) => {
    let teacherSyllabusService = new TeacherSyllabusService();
    teacherSyllabusService.updateTeacherSyllabus(contract).then((result) => {
      //setTeacherSyllabus(result.data.data);
    });
  };

  const selectRowData = (value) => {
    setSelectedRow(value);
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
    updateTeacherSyllabus(newRow);
    setTeacherSyllabus(
      teacherSyllabus.map((row) => (row.id === newRow.id ? updatedRow : row))
    );

    return updatedRow;
  };

  function customNoRowsOverlay() {
    return (
      <StyledGridOverlay>
        <div>No Rows</div>
      </StyledGridOverlay>
    );
  }

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
      field: "actions",
      type: "actions",
      headerName: "İşlem",
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
    <Grid height="300px">
      <Box>
        <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={12}>
            <DataGrid
              rows={[]}
              columns={columns}
              editMode="row"
              rowModesModel={rowModesModel}
              onRowModesModelChange={handleRowModesModelChange}
              onRowEditStop={handleRowEditStop}
              processRowUpdate={processRowUpdate}
              onRowClick={(e) => selectRowData(e)}
              slots={{
                noRowsOverlay: customNoRowsOverlay,
              }}
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

export default Syllabus;
