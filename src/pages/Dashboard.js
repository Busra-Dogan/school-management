import React from "react";
import { Box, Grid, Button, TextField } from "@mui/material";
import Header from "../components/Header";

const Dashboard = () => {
  return (
    <Grid
      sx={{ height: "100%", width: "100%" }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="row"
    >
      <Header
        title="Ders Programı"
        subtitle="Seçili Öğretmenin Ders Programının Görüntülenmesi"
      />
    </Grid>
  );
};

export default Dashboard;
