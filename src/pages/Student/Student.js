import {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import { Button,TextField } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";
;


const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'className',
    headerName: 'Class Name',
    width: 150,
    editable: false,
  },
  {
    field: 'classType',
    headerName: 'Class Type',
    type: 'number',
    width: 150,
    editable: false,
  },
  {
    field: 'quota',
    headerName: 'Qutoa',
    type: 'number',
    width: 110,
    editable: false,
  },
  {
    field: 'schoolId',
    headerName: 'School Id',
    type: 'number',
    width: 110,
    editable: false,
  },
  {
    field: 'systemDate',
    headerName: 'System Date',
    type: 'Date',
    width: 250,
    editable: false,
  },
  {
    field: 'whichGrade',
    headerName: 'Which Grade',
    type: 'number',
    width: 250,
    editable: false,
  }
];

export default function Student() {
  const [products, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)
  useEffect(() => {
    axios.get("https://localhost:7185/api/Class/getall").then((result) => setData(result.data.data));
  }, []);

  console.log(products);
  
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Box  sx={{ height: 200, width: '100%' }}/> 

      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
    <Box sx={{ height: 650, width: '100%' }}>
      <DataGrid
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        disableRowSelectionOnClick
      />
    </Box>
    </Grid>
    
    <Grid item xs={2}></Grid>
    </Grid>
  );
}
