import { Box, TextField, Button, Link, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import { useSearchParams } from "react-router-dom";
import StudentService from "../../services/StudentService";
import ClassService from "../../services/ClassService";
import Stack from "@mui/material/Stack";
import dayjs from "dayjs";
import InputMask from "react-input-mask";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import { useNavigate } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";

const StudentDetail = () => {
  const [searchParams] = useSearchParams();
  const infoId = searchParams.get("studentId");
  const [student, setStudent] = useState(null);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [eMail, setEMail] = useState("");
  const [identityNumber, setIdentityNumber] = useState("");
  const [birthDate, setBirthDate] = useState(dayjs("1990-04-17"));
  const [address, setAddress] = useState("");
  const [motherName, setMotherName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [parentPhoneNumber, setParentPhoneNumber] = useState("");
  const [openAlert, setOpenAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const navigate = useNavigate();
  const [cancelToken, setCancelToken] = useState(null);
  const [inputValue, setInputValue] = useState(null);
  const [classes, setClasses] = useState(null);

  useEffect(() => {
    let studentService = new StudentService();
    studentService.GetStudentById(infoId).then((result) => {
      setStudent(result.data.data);
      setName(result.data.data.name);
      setSurname(result.data.data.surname);
      setPhoneNumber(result.data.data.telephone);
      setEMail(result.data.data.eMailAddress);
      setIdentityNumber(result.data.data.identityNumber);
      setBirthDate(dayjs(result.data.data.birthDate));
      setAddress(result.data.data.address);
      setMotherName(result.data.data.motherName);
      setFatherName(result.data.data.fatherName);
      setParentPhoneNumber(result.data.data.parentPhoneNumber);
    });

    let classService = new ClassService();
    classService.getAllClasses().then((result) => {
      setClasses(result.data.data);
    });
  }, []);

  const updateStudentInfo = () => {
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
      id: infoId,
    };
    let studentService = new StudentService();
    studentService.UpdateStudent(contract).then((result) => {
      console.log(result.data);
      setAlertMessage(
        result.data.message +
          "Birazdan Öğrenci listesi sayfasına yönlendirileceksiniz."
      );
      setOpenAlert(true);
      setTimeout(() => {
        setOpenAlert(false);
        navigate("/student");
      }, 2000);
    });
  };

  return (
    <Grid
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="row"
    >
      <Box sx={{ width: "60%", height: "100%" }}>
        <Header
          title={name + " " + surname}
          subtitle="Öğrencinin Sistemde Kayıtlı Bilgileri"
        />
        <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={12}>
            <Stack xs={6} md={6} flexDirection="row" columnGap={2}>
              <TextField
                id="firstName"
                label="Adı"
                fullWidth
                value={name}
                name="firstName"
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                id="lastName"
                label="Soyadı"
                fullWidth
                value={surname}
                name="lastName"
                onChange={(e) => setSurname(e.target.value)}
              />
            </Stack>
          </Grid>

          <Grid item xs={6} md={6}>
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
          <Grid item xs={6} md={6}>
            <TextField
              id="eMail"
              label="EMail"
              fullWidth
              value={eMail}
              name="eMail"
              onChange={(e) => setEMail(e.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={12} md={12}>
            <Stack flexDirection="row" columnGap={2}>
              <TextField
                id="identityNumber"
                label="Kimlik Numarası"
                fullWidth
                value={identityNumber}
                name="identityNumber"
                inputProps={{ maxLength: 11 }}
                onChange={(e) => setIdentityNumber(e.target.value)}
              ></TextField>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Doğum Tarihi"
                  sx={{ width: "100%" }}
                  value={birthDate}
                  onChange={(e) => setBirthDate(e)}
                />
              </LocalizationProvider>
            </Stack>
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              id="address"
              label="Adres"
              fullWidth
              value={address}
              name="address"
              inputProps={{ maxLength: 80 }}
              onChange={(e) => setAddress(e.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={12} md={12}>
            <Stack flexDirection="row" columnGap={2}>
              <TextField
                id="motherName"
                label="Anne Adı"
                fullWidth
                value={motherName}
                name="motherName"
                onChange={(e) => setMotherName(e.target.value)}
              ></TextField>
              <TextField
                id="fatherName"
                label="Baba Adı"
                fullWidth
                value={fatherName}
                name="fatherName"
                onChange={(e) => setFatherName(e.target.value)}
              ></TextField>
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <InputMask
              mask="999 999 99 99"
              disabled={false}
              maskChar=" "
              value={parentPhoneNumber}
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
          <Grid item xs={6} md={6}>
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
          <Grid item xs={3} md={3}></Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <Button
                variant="contained"
                component={Link}
                sx={{ backgroundColor: "#1F2A40" }}
                onClick={() => {
                  updateStudentInfo();
                }}
              >
                Güncelle
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={3} md={3}></Grid>
          <Grid item xs={3} md={3}></Grid>

          <Grid item xs={6} md={6}>
            <Stack>
              <Collapse in={openAlert}>
                <Alert severity="success" sx={{ fontSize: 18 }}>
                  {alertMessage}
                </Alert>
              </Collapse>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default StudentDetail;
