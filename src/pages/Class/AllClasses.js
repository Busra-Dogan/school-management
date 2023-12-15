import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { DataGridPro } from "@mui/x-data-grid-pro";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import ClassService from "../../services/ClassService";
import axios from "axios";

const AllClasses = () => {
  const [classes, setClasses] = useState([]);
  const [cancelToken, setCancelToken] = useState(null);

  useEffect(() => {
    if (cancelToken) {
      cancelToken.cancel("Operation canceled by the user.");
    }
    const newCancelToken = axios.CancelToken.source();
    setCancelToken(newCancelToken);

    let productService = new ClassService();
    productService
      .getAllClasses()
      .then((result) => setClasses(result.data.data));
    console.log(classes);
    return () => {
      if (newCancelToken) {
        newCancelToken.cancel("Component unmounted.");
      }
    };
  }, []);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.2 },
    { field: "className", headerName: "Class Name", flex: 0.29 },
    {
      field: "quota",
      headerName: "Quota",
      type: "number",
      flex: 0.5,
      headerAlign: "center",
      align: "center",
      cellClassName: "name-column--cell",
    },
    {
      field: "schoolName",
      headerName: "SchoolName",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "whichGrade",
      headerName: "WhichGrade",
      headerAlign: "center",
      align: "center",
      flex: 0.25,
    },
    {
      field: "systemDate",
      headerName: "SystemDate",
      type: "datetime",
      flex: 0.5,
    },
  ];

  return (
    <Box m="20px" width={1500} height={1000}>
      <Header
        title="ALL CLASSES"
        subtitle="List of All Classes In the School"
      />
      <Grid container>
        <DataGrid
          rows={classes}
          columns={columns}
          pageSize={5}
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
              rowsPerPageOptions: [5, 10, 20],
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
    </Box>
  );
};

export default AllClasses;
