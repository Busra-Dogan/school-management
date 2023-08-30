import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Button, TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';

export default function ClassesList() {

  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 }
  ]
  return (
    <Grid container spacing={3}>
      <Grid item xs justifyContent="center">
        <Typography variant="h2" component="h2">Sınıflar</Typography>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 300, marginLeft:30 }}
          renderInput={(params) => <TextField {...params} label="Movie" />}
        />
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h1" component="h2">h1. Heading</Typography>
      </Grid><Grid item xs>
      </Grid>
    </Grid>
  );
}