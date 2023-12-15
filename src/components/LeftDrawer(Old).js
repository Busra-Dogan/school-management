import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import MenuItem from "./MenuItem";
import { styled } from "@mui/material/styles";
import ClickAwayListener from "@mui/material/ClickAwayListener";

const LeftDrawer = () => {
  const drawerWidth = 240;

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <Box width={'100%'}>
      <AppBar position="static" sx={{ backgroundColor: "#1F2A40"}} >
        <Toolbar>
          <IconButton
            color="success"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
            aria-label="open drawer"
          >
            <MenuOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      </Box> */}

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
            {/* <IconButton color="success" onClick={handleDrawerClose} >
              <MenuOutlinedIcon />
            </IconButton> */}
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
              {/* <MenuItem
                title="Dashboard"
                to="/"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected} /> */}
              <ListItem>
                <ListItemText>
                  <Typography variant="h7" color="#a3a3a3">
                    Öğrenci
                  </Typography>
                </ListItemText>
              </ListItem>
              <MenuItem
                title="Öğrenciler"
                to="/student"
                icon={<ContactsOutlinedIcon color="success" />}
                selected={selected}
                setSelected={setSelected}
              />
              <MenuItem
                title="Öğrenci Ekle"
                to="/student/studentAdd"
                icon={<PeopleOutlinedIcon color="success" />}
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
