import React, { useState, useEffect } from "react";
import { Box, Grid, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import axios from "axios";
import StudentService from "../../services/StudentService";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

const Student = () => {
  const [students, setStudents] = useState([]);
  const [cancelToken, setCancelToken] = useState(null);
  const [updateButtonDisabled, setUpdateButtonDisabled] = useState(true);
  const [selectedRow, setSelectedRow] = useState(null);
  const [open, setOpen] = useState(true);

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
    console.log(students);
    return () => {
      if (newCancelToken) {
        newCancelToken.cancel("Component unmounted.");
      }
    };
  }, []);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.2 },
    { field: "name", headerName: "Adı", flex: 0.5 },
    { field: "surname", headerName: "Soyadı", flex: 0.5 },
    {
      field: "identityNumber",
      headerName: "Kimlik Numarası",
      headerAlign: "left",
      align: "left",
      flex: 0.5,
    },
    {
      field: "birthDate",
      headerName: "Doğum Tarihi",
      headerAlign: "left",
      valueFormatter: (params) => dayjs(params.value).format("DD/MM/YYYY"),
      align: "left",
      flex: 0.5,
    },
    {
      field: "telephone",
      headerName: "Telefon Numarası",
      flex: 0.5,
    },
    {
      field: "eMailAddress",
      headerName: "EMail Adresi",
      flex: 0.75,
    },
    {
      field: "parentPhoneNumber",
      headerName: "Veli Telefon Numarası",
      flex: 0.5,
    },
    {
      field: "systemDate",
      headerName: "Kayıt Tarihi",
      type: "date-",
      valueFormatter: (params) => dayjs(params.value).format("DD/MM/YYYY"),
      flex: 0.5,
    },
  ];

  const selectRowData = (value) => {
    setSelectedRow(value);
    setUpdateButtonDisabled(false);
    console.log(selectedRow);
  };

  return (
    <Grid
      sx={{ height: "100%", width: "100%" }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box width={"95%"} height={"90%"}>
        <Header
          title="Tüm Öğrenciler"
          subtitle="Okuldaki kayıtlı tüm öğrencilerin bilgileri listelenmektedir. Yeni öğrenci tanımı için üst menüdeki Öğrenci Ekle'ye tıklayabilirsiniz."
        />
        <Grid container marginBottom={"1%"}>
          <DataGrid
            rows={students}
            columns={columns}
            onRowClick={(e) => selectRowData(e)}
            initialState={{
              pagination: { paginationModel: { pageSize: 12 } },
            }}
            pageSizeOptions={[12, 24, 36]}
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
        <Stack
          width={"100%"}
          direction="row"
          justifyContent="flex-end"
          spacing={2}
        >
          <Button
            variant="contained"
            disabled={updateButtonDisabled}
            component={Link}
            to={{
              pathname: "/studentNotes",
              search: `?studentId=${selectedRow?.id}`,
            }}
            sx={{ backgroundColor: "#1F2A40" }}
          >
            Not Girişi
          </Button>
          <Button
            variant="contained"
            disabled={updateButtonDisabled}
            component={Link}
            to={{
              pathname: "/studentDetail",
              search: `?studentId=${selectedRow?.id}`,
            }}
            sx={{ backgroundColor: "#1F2A40" }}
          >
            Güncelle
          </Button>
          <Button
            variant="contained"
            disabled={updateButtonDisabled}
            sx={{ backgroundColor: "#1F2A40" }}
          >
            Sil
          </Button>
        </Stack>
      </Box>
    </Grid>
  );
};

export default Student;
