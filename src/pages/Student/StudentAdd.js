import { Box, Grid, Typography, TextField, Card } from "@mui/material";
import Button from '@mui/material/Button';
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Autocomplete from "@mui/material/Autocomplete";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { ThemeProvider } from '@mui/material/styles';
import ClassService from "../../services/ClassService";
import StudentService from "../../services/StudentService";
import InputMask from 'react-input-mask'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import { wait } from "@testing-library/user-event/dist/utils";

const deleteclass = () => {
  let productService = new ClassService();
  productService.deleteClasses(21)
    .then((result) => console.log(result));
}

const updateclass = () => {
  let productService = new ClassService();
  productService.deleteClasses(21)
    .then(
      (result) =>
        console.log(result));
}



const StudentAdd = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [eMail, setEMail] = useState("");
  const [identityNumber, setidentityNumber] = useState("");
  const [birthDate, setBirthDate] = useState(dayjs('1990-04-17'));
  const [address, setAddress] = useState("");
  const [motherName, setMotherName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [parentPhoneNumber, setParentPhoneNumber] = useState("");
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");



  const addStudent = () => {
    var contract = {
      name: name,
      surname: surname,
      identityNumber: identityNumber,
      birthDate: birthDate,
      motherName: motherName,
      fatherName: fatherName,
      telephone: phoneNumber,
      eMailAddress: eMail,
      address: address,
      parentPhoneNumber: parentPhoneNumber,
      classId: 0
    }

    let productService = new StudentService();
    productService.AddStudent(contract)
      .then((result) => {
        if (result.data.success) {
          setErrorMessage(result.data.message)
        } else {
          setErrorMessage(result.data.message)
        }
        setOpen(true);
        console.log(errorMessage)
      });
  }
  const closeAlert = () => {
    setOpen(false);
  }

  return (
    <Grid sx={{ height: '100%', width:'100%' }} display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="row" >
      <Box sx={{ height: '10%' }}>
        <Collapse in={open} sx={{mt:10}}>
          <Alert severity="success" sx={{fontSize:20}} onClose={closeAlert} >{errorMessage}</Alert>
        </Collapse>
      </Box>
      <Box sx={{ height: '90%', width: 900 }} >
        <Header title="YENİ ÖĞRENCİ TANIMI" subtitle="Yeni Bir Öğrenci Profili Oluşturma" />
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
              autoFocus
              value={name}
              onChange={e => setName(e.target.value)}
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
              value={surname}
              onChange={e => setSurname(e.target.value)}
            />
          </Grid>
          <Grid item xs={6} md={3} >
            <InputMask
              mask="999 999 99 99"
              disabled={false}
              maskChar=" "
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}
            >
              {() => <TextField variant="outlined" label="Telefon Numarası" sx={{ width: '100%' }} />}
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
              value={eMail}
              onChange={e => setEMail(e.target.value)}
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
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Doğum Tarihi"
                sx={{ width: '100%' }}
                value={birthDate}
                onChange={(e) => setBirthDate(e)}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6} md={6}>
            <TextField
              required
              fullWidth
              id="address"
              label="Adres"
              name="address"
              autoComplete="address"
              inputProps={{ maxLength: 80 }}
              value={address}
              onChange={e => setAddress(e.target.value)}
            />
          </Grid>


          <Grid item xs={6} md={3}>
            <TextField
              required
              fullWidth
              id="motherName"
              label="Anne Adı"
              name="motherName"
              autoComplete="motherName"
              value={motherName}
              onChange={e => setMotherName(e.target.value)}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextField
              required
              fullWidth
              id="fatherName"
              label="Baba Adı"
              name="fatherName"
              autoComplete="fatherName"
              value={fatherName}
              onChange={e => setFatherName(e.target.value)}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <InputMask
              mask="999 999 99 99"
              value={parentPhoneNumber}
              disabled={false}
              maskChar=" "
              onChange={e => setParentPhoneNumber(e.target.value)}
            >
              {() => <TextField variant="outlined" label="Veli Telefon Numarası" sx={{ width: '100%' }} />}
            </InputMask>
          </Grid>
          <Grid item xs={6} md={3} ></Grid>
          <Grid item xs={6} md={3} ></Grid>
          <Grid item xs={6} md={6}>
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
        </Grid>
      </Box >

    </Grid>

  );
};

export default StudentAdd;
