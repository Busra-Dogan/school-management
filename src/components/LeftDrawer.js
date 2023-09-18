import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import { IconButton, Typography, useTheme, MenuItem } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  return (
    <Link to={to}>
      <ListItem>
        <ListItemButton
          style={{
            color: "#e0e0e0",
          }}
          onClick={() => setSelected(title)}
        >
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText>{title}</ListItemText>
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

const LeftDrawer = () => {
  const [selected, setSelected] = useState("Dashboard");
  return (
    <Drawer
      sx={{
        width: 220,
        "& .MuiDrawer-paper": {
          width: 220,
          boxSizing: "border-box",
        },
      }}
      anchor="left"
      open={true}
      variant={"persistent"}
      PaperProps={{ sx: { backgroundColor: "#1F2A40" } }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        ml="15px"
        mt="30px"
        mb="30px"
        mr="15px"
      >
        <Typography variant="h5" sx={{ color: "#e0e0e0" }}>
          ADMINIS
        </Typography>
        <IconButton>
          <MenuOutlinedIcon />
        </IconButton>
      </Box>

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
            Ed Roh
          </Typography>
          <Typography variant="h5" color="#4cceac">
            VP Fancy Admin
          </Typography>
        </Box>
      </Box>
      <Box role="persistent">
        <Box>
          <Item title="Dashboard" to="/" icon={<HomeOutlinedIcon />} />
          <ListItem>
            <ListItemText>
              <Typography variant="h7" color="#a3a3a3">
                Students
              </Typography>
            </ListItemText>
          </ListItem>
          <Item
            title="New Student"
            to="/student/studentAdd"
            icon={<PeopleOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Notes"
            to="/contacts"
            icon={<ContactsOutlinedIcon color="#4cceac" />}
            selected={selected}
            setSelected={setSelected}
          />

          <Divider />
          <ListItem>
            <ListItemText>
              <Typography variant="h7" color="#a3a3a3">
                Teachers
              </Typography>
            </ListItemText>
          </ListItem>
          <Item title="New Teacher" to="/form" icon={<PersonOutlinedIcon />} />
          <Item
            title="Calendar"
            to="/calendar"
            icon={<CalendarTodayOutlinedIcon />}
          />

          <Divider />

          <ListItem>
            <ListItemText>
              <Typography variant="h7" color="#a3a3a3">
                Classes
              </Typography>
            </ListItemText>
          </ListItem>
          <Item
            title="Class Add"
            to="/class/classAdd"
            icon={<PieChartOutlineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Class List"
            to="/class"
            icon={<PieChartOutlineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
        </Box>
      </Box>
    </Drawer>
  );
};

export default LeftDrawer;
