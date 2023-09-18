import { Box, Grid, Typography, TextField } from "@mui/material";
import Button from '@mui/material/Button';
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Autocomplete from "@mui/material/Autocomplete";
import React, { useEffect } from "react";
import Header from "../../components/Header";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ReactPhoneInput from "react-phone-input-material-ui";
import PhoneInput from "react-phone-input-material-ui";

import ClassService from "../../services/ClassService";
const deleteclass = () => {
  let productService = new ClassService();
  productService.deleteClasses(21)
    .then((result) => console.log(result));
}

const updateclass = () => {
  let productService = new ClassService();
  productService.deleteClasses(21)
    .then((result) => console.log(result));
}

const StudentAdd = () => {
  return (
    <Box>
      <Header title="ADD NEW STUDENT" subtitle="Create a Student Profile" />
      <Grid container>
        <Grid item sm={4}>
          <Container maxWidth="md">
            <Typography>Kimlik Bilgileri</Typography>
            <Box component="form" noValidate sx={{ mt: "20px" }}>
              <Grid container spacing={4}>
                <Grid item sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="identityNumber"
                    label="IdentityNumber"
                    name="identityNumber"
                  />
                </Grid>
                <Grid item sm={6}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="Birth Date"> </DatePicker>
                  </LocalizationProvider>
                </Grid>
                <Grid item sm={6}>
                  <PhoneInput
                    defaultCountry="TR"
                    addInternationalOption={false}
                    component={TextField}
                    placeholder="(555) 555 55 55"
                    withCountryCallingCode={false}
                    country="TR"
                    
                  />
                  <Button variant="outlined" onClick={() => { deleteclass() }}>Outlined</Button>
                  <Button variant="outlined" onClick={() => { updateclass() }}>UPDATE</Button>

                </Grid>
              </Grid>
            </Box>
          </Container>
        </Grid>
        <Grid item sm={4}></Grid>
        <Grid item sm={4}>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StudentAdd;
