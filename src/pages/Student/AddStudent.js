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
  const ALPHA_DASH_REGEX = /^[a-zA-Z]+$/;
  const NUMERIC_DASH_REGEX = /^[0-9 ]*$/;
  const [classes, setClasses] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
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
  const [isError, setIsError] = useState(false);
  const [errorMessages, setErrorMessages] = useState({
    name: "",
    lastName: "",
    identityNumber: "",
    address: "",
    motherName: "",
    fatherName: "",
    parentPhoneNumber: "",
    class: "",
  });

  useEffect(() => {
    let classService = new ClassService();
    classService.getAllClasses().then((result) => {
      setClasses(result.data.data);
    });
  }, []);

  function validateBeforeAdd() {
    let msgName = "";
    let msgSurname = "";
    let msgIdentityNumber = "";
    let msgAddress = "";
    let msgMotherName = "";
    let msgFatherName = "";
    let msgParentPhoneNumber = "";
    let msgSelectedClass = "";
    setIsError(false);
    if (name === "") {
      setIsError(true);
      msgName = "Adı alanı boş geçilemez!";
    } else if (!ALPHA_DASH_REGEX.test(name)) {
      setIsError(true);
      msgName = "Geçerli bir ad giriniz!";
    }
    if (surname === "") {
      setIsError(true);
      msgSurname = "Soyisim alanı boş geçilemez!";
    } else if (!ALPHA_DASH_REGEX.test(surname)) {
      setIsError(true);
      msgSurname = "Geçerli bir soyisim giriniz!";
    }
    if (identityNumber === "") {
      setIsError(true);
      msgIdentityNumber = "Kimlik Numarası alanı boş geçilemez!";
    } else if (!NUMERIC_DASH_REGEX.test(identityNumber)) {
      setIsError(true);
      msgIdentityNumber = "Geçerli bir kimlik numarası giriniz!";
    }

    if (address === "") {
      setIsError(true);
      msgAddress = "Adres alanı boş geçilemez!";
    }
    if (motherName === "") {
      setIsError(true);
      msgMotherName = "Anne Adı alanı boş geçilemez!";
    } else if (!ALPHA_DASH_REGEX.test(motherName)) {
      setIsError(true);
      msgMotherName = "Geçerli bir Anne Adı giriniz!";
    }

    if (fatherName === "") {
      setIsError(true);
      msgFatherName = "Baba Adı alanı boş geçilemez!";
    } else if (!ALPHA_DASH_REGEX.test(fatherName)) {
      setIsError(true);
      msgFatherName = "Geçerli bir Baba Adı giriniz!";
    }

    if (parentPhoneNumber === "") {
      setIsError(true);
      msgParentPhoneNumber = "Veli Telefon Numarası alanı boş geçilemez!";
    }
    if (selectedClass === null) {
      setIsError(true);
      msgSelectedClass = "Sınıf alanı boş geçilemez!";
    }

    setErrorMessages({
      name: msgName,
      lastName: msgSurname,
      identityNumber: msgIdentityNumber,
      address: msgAddress,
      motherName: msgMotherName,
      fatherName: msgFatherName,
      parentPhoneNumber: msgParentPhoneNumber,
      class: msgSelectedClass,
    });
    return isError;
  }

  const addStudent = () => {
    let isSuccess = validateBeforeAdd();
    if (isSuccess === false) {
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
        classId: selectedClass.id,
      };

      let studentService = new StudentService();
      studentService.AddStudent(contract).then((result) => {
        if (result.data.success) {
          setAlertMessage(result.data.message);
        } else {
          setAlertMessage(result.data.message);
        }
        setOpen(true);
      });
    }
  };
  const closeAlert = () => {
    setOpen(false);
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
          title="Yeni Öğrenci Tanımı"
          subtitle="Burada yeni öğrenci tanımı yapabilirsiniz."
        />
        <Grid container spacing={2}>
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
              onChange={(event) => {
                setName(event.target.value);
                errorMessages.name = "";
              }}
              error={errorMessages.name !== ""}
              helperText={errorMessages.name !== "" ? errorMessages.name : " "}
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
              onChange={(event) => {
                setSurname(event.target.value);
                errorMessages.lastName = "";
              }}
              error={errorMessages.lastName !== ""}
              helperText={
                errorMessages.lastName !== "" ? errorMessages.lastName : " "
              }
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <InputMask
              mask="999 999 99 99"
              disabled={false}
              maskChar=" "
              value={phoneNumber}
              onChange={(event) => {
                setPhoneNumber(event.target.value);
              }}
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
              onChange={(event) => {
                setidentityNumber(event.target.value);
                errorMessages.identityNumber = "";
              }}
              error={errorMessages.identityNumber !== ""}
              helperText={
                errorMessages.identityNumber !== ""
                  ? errorMessages.identityNumber
                  : " "
              }
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <LocalizationProvider required dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Doğum Tarihi"
                sx={{ width: "100%" }}
                value={birthDate}
                slotProps={{
                  textField: {
                    required: true,
                  },
                }}
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
              inputProps={{ maxLength: 100 }}
              value={address}
              onChange={(event) => {
                setAddress(event.target.value);
                errorMessages.address = "";
              }}
              error={errorMessages.address !== ""}
              helperText={
                errorMessages.address !== "" ? errorMessages.address : " "
              }
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
              onChange={(event) => {
                setMotherName(event.target.value);
                errorMessages.fatherName = "";
              }}
              error={errorMessages.motherName !== ""}
              helperText={
                errorMessages.motherName !== "" ? errorMessages.motherName : " "
              }
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
              onChange={(event) => {
                setFatherName(event.target.value);
                errorMessages.fatherName = "";
              }}
              error={errorMessages.fatherName !== ""}
              helperText={
                errorMessages.fatherName !== "" ? errorMessages.fatherName : " "
              }
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <InputMask
              mask="999 999 99 99"
              value={parentPhoneNumber}
              disabled={false}
              maskChar=" "
              onChange={(event) => {
                setParentPhoneNumber(event.target.value);
                errorMessages.parentPhoneNumber = "";
              }}
            >
              {() => (
                <TextField
                  variant="outlined"
                  required
                  label="Veli Telefon Numarası"
                  sx={{ width: "100%" }}
                  error={errorMessages.parentPhoneNumber !== ""}
                  helperText={
                    errorMessages.parentPhoneNumber !== ""
                      ? errorMessages.parentPhoneNumber
                      : " "
                  }
                />
              )}
            </InputMask>
          </Grid>
          <Grid item xs={6} md={3}>
            <Autocomplete
              id="combo-box-demo"
              disablePortal
              fullWidth
              options={classes?.map((option) => option.className)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
                  label="Sınıfı"
                  error={errorMessages.class !== "" && selectedClass === null}
                  helperText={
                    errorMessages.class !== "" && selectedClass === null
                      ? errorMessages.class
                      : " "
                  }
                />
              )}
              onInputChange={(newInputValue, value) => {
                let selectedClass = classes.find((obj) => {
                  return obj.className === value;
                });
                setSelectedClass(selectedClass);
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
              EKLE
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
