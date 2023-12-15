import { Box, Grid, TextField, Card, CardContent } from "@mui/material";
import Button from "@mui/material/Button";
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
import { ThemeProvider } from "@mui/material/styles";

import ClassService from "../../services/ClassService";
const deleteclass = () => {
  let productService = new ClassService();
  productService.deleteClasses(21).then((result) => console.log(result));
};

const updateclass = () => {
  let productService = new ClassService();
  productService.deleteClasses(21).then((result) => console.log(result));
};

const ClassAdd = () => {
  return (
    <Container>
      <Grid container>
        <Grid container direction="column" item xs alignItems="center">
          <Grid item xs md={6}></Grid>
          <Grid item xs md={6} align="center">
            <Card style={{ maxWidth: 800, marginBottom: 80 }}>
              <Box px={2} pb={1}>
                <Header
                  title="ADD NEW STUDENT"
                  subtitle="Create a Student Profile"
                />
                <CardContent>
                  <Grid container direction="row" alignItems="stretch">
                    <Grid item xs={6}>
                      <TextField
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="Adı"
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="Adı"
                        autoFocus
                      />
                    </Grid>
                  </Grid>
                  <Grid container direction="row" alignItems="stretch">
                    <Grid item xs={6}>
                      <TextField
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="Adı"
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="Adı"
                        autoFocus
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ClassAdd;
