import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { IconButton, Typography, useTheme } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MenuItem from "./MenuItem";
import { styled } from '@mui/material/styles';
import * as React from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";



const LeftDrawer = () => {
  const drawerWidth = 240;

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  const [selected, setSelected] = useState("Dashboard");
  return (
    <Box >
      <MuiAppBar position="fixed" open={open} sx={{ backgroundColor: "#1F2A40" }}>
        <Toolbar>
          <IconButton
            color="success"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuOutlinedIcon />
          </IconButton>
        </Toolbar>
      </MuiAppBar>
      <ClickAwayListener
        mouseEvent="onMouseDown"
        touchEvent="onTouchStart"
        onClickAway={() => open}
      >
        <Drawer
          sx={{
            width: 220,
            "& .MuiDrawer-paper": {
              width: 220,
              boxSizing: "border-box",
            },
          }}
          anchor="left"
          open={open}
          variant={"persistent"}
          PaperProps={{ sx: { backgroundColor: "#1F2A40" } }}
        >
          <DrawerHeader>
            <IconButton color="success" onClick={handleDrawerClose} >
              <MenuOutlinedIcon />
            </IconButton>
          </DrawerHeader>
          <Box mb="25px">
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                alt="profile-user"
                width="100px"
                height="100px"
                src={`../../assets/user.png`}
                style={{ cursor: "pointer", borderRadius: "50%" }}
              />
            </Box>
            <Box textAlign="center">
              <Typography variant="h4" color="#e0e0e0" fontWeight="bold">
                Büşra Doğan
              </Typography>
              <Typography variant="h5" color="#4cceac">
                VP Full Admin
              </Typography>
            </Box>
          </Box>
          <Box role="persistent">
            <Box>
              <MenuItem
                title="Dashboard"
                to="/"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected} />
              <ListItem>
                <ListItemText>
                  <Typography variant="h7" color="#a3a3a3">
                    Öğrenci
                  </Typography>
                </ListItemText>
              </ListItem>
              <MenuItem
                title="Öğrenci Listesi"
                to="/contacts"
                icon={<ContactsOutlinedIcon color="#4cceac" />}
                selected={selected}
                setSelected={setSelected}
              />
              <MenuItem
                title="Öğrenci Ekle"
                to="/student/studentAdd"
                icon={<PeopleOutlinedIcon color="inherit" />}
                selected={selected}
                setSelected={setSelected}
              />
              <Divider />

              <ListItem>
                <ListItemText>
                  <Typography variant="h7" color="#a3a3a3">
                    Öğretmen
                  </Typography>
                </ListItemText>
              </ListItem>
              <MenuItem
                title="Öğretmen Listesi"
                to="/teacher"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected} />
              <MenuItem
                title="Öğretmen Ekle"
                to="/teacher/teacherAdd"
                icon={<CalendarTodayOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Divider />

              <ListItem>
                <ListItemText>
                  <Typography variant="h7" color="#a3a3a3">
                    Sınıf
                  </Typography>
                </ListItemText>
              </ListItem>
              <MenuItem
                title="Sınıf Ekle"
                to="/class/classAdd"
                icon={<PieChartOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <MenuItem
                title="Sınıf Listesi"
                to="/class"
                icon={<PieChartOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
          </Box>
        </Drawer>
      </ClickAwayListener>
    </Box>
  );
};

export default LeftDrawer;
