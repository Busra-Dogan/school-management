import { Box, Grid, Typography, TextField, Card } from "@mui/material";
import Button from '@mui/material/Button';
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Autocomplete from "@mui/material/Autocomplete";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ReactPhoneInput from "react-phone-input-material-ui";
import PhoneInput from "react-phone-input-material-ui";
import { ThemeProvider } from '@mui/material/styles';
import ClassService from "../../services/ClassService";
import StudentService from "../../services/StudentService";
import InputMask from 'react-input-mask'

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
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [identityNumber, setidentityNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [parentPhoneNumber, setParentPhoneNumber] = useState("");

  const addStudent = () => {
    var contract = {
      systemDate: '2023-10-08T18:19:58.536Z',
      updateSystemDate: '2023-10-08T18:19:58.536Z',
      name: name,
      surname: 'Doğan',
      identityNumber: 'string',
      birthDate: '2023-10-08T18:19:58.536Z',
      motherName: 'string',
      fatherName: 'string',
      phoneNumber: 'string',
      eMailAddress: 'string',
      address: 'string',
      parentPhoneNumber: 'string',
      classId: 0
    }

    let productService = new StudentService();
    productService.AddStudent(contract)
      .then((result) => console.log(result));
  }

  return (
    <Box style={{ maxWidth: 1000, marginBottom: 80 }}>
      <Header title="YENİ ÖĞRENCİ TANIMI" subtitle="Yeni Bir Öğrenci Profili Oluşturma" />
      <Box height={20} ></Box>
      <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
        <Grid item xs={6} >
          <Typography>Kimlik Bilgileri</Typography>
        </Grid>
        <Grid item xs={6} >
          <Typography>İletişim Bilgileri</Typography>
        </Grid>

        <Grid item xs={6} md={3} >
          <TextField
            autoComplete="given-name"
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="Adı"
            value={name}
            onChange={e => setName(e.target.value)}
            autoFocus
          />
        </Grid>
        <Grid item xs={6} md={3} >
          <TextField
            autoComplete="given-name"
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="Soyadı"
            autoFocus
          />
        </Grid>
        <Grid item xs={6} md={3} >
        <InputMask
            mask="(0)999 999 99 99"
            value={phoneNumber}
            disabled={false}
            maskChar=" "
            onChange={e => setPhoneNumber(e.target.value)}
          >
            {() => <TextField variant="outlined" label="Telefon Numarası"/>}
          </InputMask>
        </Grid>


        <Grid item xs={6} md={3} >
          <TextField
            required
            fullWidth
            id="email"
            label="Email Adresi"
            name="email"
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={6} md={3} >
          <TextField
            name="identityNumber"
            required
            fullWidth
            id="identityNumber"
            label="Kimlik Numarası"
            inputProps={{ maxLength: 11 }}
            value={identityNumber}
            onChange={e => setidentityNumber(e.target.value)}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <TextField
            required
            fullWidth
            id="email"
            label="Doğum Tarihi"
            name="email"
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField
            required
            fullWidth
            id="email"
            label="Adres"
            name="email"
            autoComplete="email"
          />
        </Grid>


        <Grid item xs={6} md={3}>
          <TextField
            required
            fullWidth
            id="email"
            label="Anne Adı"
            name="email"
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <TextField
            required
            fullWidth
            id="email"
            label="Baba Adı"
            name="email"
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <InputMask
            mask="(0)999 999 99 99"
            value={parentPhoneNumber}
            disabled={false}
            maskChar=" "
            onChange={e => setParentPhoneNumber(e.target.value)}
          >
            {() => <TextField variant="outlined" label="Veli Telefon Numarası"/>}
          </InputMask>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          onClick={() => { addStudent(); }}
          sx={{ mt: 3, mb: 2 }}
        >
          KAYDET
        </Button>
      </Grid>
    </Box >
  );
};

export default StudentAdd;
