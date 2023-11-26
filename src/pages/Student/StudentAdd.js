import { Box, Grid, Typography, TextField, Card } from "@mui/material";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import ClassService from "../../services/ClassService";
import StudentService from "../../services/StudentService";
import InputMask from "react-input-mask";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import axios from "axios";

const StudentAdd = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [eMail, setEMail] = useState("");
  const [identityNumber, setidentityNumber] = useState("");
  const [birthDate, setBirthDate] = useState(dayjs("1990-04-17"));
  const [address, setAddress] = useState("");
  const [motherName, setMotherName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [parentPhoneNumber, setParentPhoneNumber] = useState("");
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [classes, setClasses] = useState(null);
  const [cancelToken, setCancelToken] = useState(null);
  const [inputValue, setInputValue] = useState(null);

  useEffect(() => {
    if (cancelToken) {
      cancelToken.cancel("Operation canceled by the user.");
    }
    const newCancelToken = axios.CancelToken.source();
    setCancelToken(newCancelToken);

    let classService = new ClassService();
    classService.getAllClasses().then((result) => {
      setClasses(result.data.data);
      console.log(classes);
    });
    return () => {
      if (newCancelToken) {
        newCancelToken.cancel("Component unmounted.");
      }
    };
  }, []);

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
      classId: inputValue.id,
    };

    let productService = new StudentService();
    productService.AddStudent(contract).then((result) => {
      if (result.data.success) {
        setAlertMessage(result.data.message);
      } else {
        setAlertMessage(result.data.message);
      }
      setOpen(true);
    });
  };
  const closeAlert = () => {
    setOpen(false);
  };

  return (
    <Grid
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="row"
    >
      <Box sx={{ height: "100%", width: "60%" }}>
        <Header
          title="YENİ ÖĞRENCİ TANIMI"
          subtitle="Yeni Bir Öğrenci Profili Oluşturma"
        />
        <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} md={3}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="Adı"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="Soyadı"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <InputMask
              mask="999 999 99 99"
              disabled={false}
              maskChar=" "
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            >
              {() => (
                <TextField
                  variant="outlined"
                  label="Telefon Numarası"
                  sx={{ width: "100%" }}
                />
              )}
            </InputMask>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Adresi"
              name="email"
              autoComplete="email"
              value={eMail}
              onChange={(e) => setEMail(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              name="identityNumber"
              required
              fullWidth
              id="identityNumber"
              label="Kimlik Numarası"
              inputProps={{ maxLength: 11 }}
              value={identityNumber}
              onChange={(e) => setidentityNumber(e.target.value)}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Doğum Tarihi"
                sx={{ width: "100%" }}
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
              onChange={(e) => setAddress(e.target.value)}
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
              onChange={(e) => setMotherName(e.target.value)}
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
              onChange={(e) => setFatherName(e.target.value)}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <InputMask
              mask="999 999 99 99"
              value={parentPhoneNumber}
              disabled={false}
              maskChar=" "
              onChange={(e) => setParentPhoneNumber(e.target.value)}
            >
              {() => (
                <TextField
                  variant="outlined"
                  label="Veli Telefon Numarası"
                  sx={{ width: "100%" }}
                />
              )}
            </InputMask>
          </Grid>
          <Grid item xs={6} md={3}>
            <Autocomplete
              id="combo-box-demo"
              fullWidth
              options={classes?.map((option) => option.className)}
              renderInput={(params) => <TextField {...params} label="Sınıfı" />}
              onInputChange={(event, newInputValue) => {
                setInputValue(
                  classes.find((obj) => {
                    return obj.className === newInputValue;
                  })
                );
                console.log(inputValue);
              }}
            ></Autocomplete>
          </Grid>
          <Grid item xs={6} md={3}></Grid>
          <Grid item xs={6} md={6}>
            <Button
              fullWidth
              variant="contained"
              sx={{ backgroundColor: "#1F2A40" }}
              onClick={() => {
                addStudent();
              }}
            >
              KAYDET
            </Button>
          </Grid>
          <Grid item xs={3} md={3}></Grid>
          <Grid item xs={3} md={3}></Grid>

          <Grid item xs={6} md={6}>
            <Collapse in={open}>
              <Alert
                severity="success"
                sx={{ fontSize: 18 }}
                onClose={closeAlert}
              >
                {alertMessage}
              </Alert>
            </Collapse>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default StudentAdd;
