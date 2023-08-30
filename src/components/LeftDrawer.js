import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";
import { IconButton, Typography, useTheme, MenuItem } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  return (
    <MenuItem>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItem
        active={selected === title}
        style={{
          color: "#e0e0e0",
        }}
        onClick={() => setSelected(title)}
      >
        <Typography>{title}</Typography>
        <Link to={to} />
      </ListItem>
    </MenuItem>
  );
};

const LeftDrawer = () => {
  return (
    <Drawer
      anchor="left"
      open={true}
      variant={"persistent"}
      PaperProps={{ sx: { backgroundColor: "#1F2A40", width: "300px" } }}
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
          <Typography
            variant="h4"
            color="#e0e0e0"
            fontWeight="bold"
            sx={{ m: "10px 0 0 0" }}
          >
            Ed Roh
          </Typography>
          <Typography variant="h5" color="#4cceac">
            VP Fancy Admin
          </Typography>
        </Box>
      </Box>
      <Box sx={{ width: 250 }} role="persistent">
        <Box paddingLeft="10%">
          <Item title="Dashboard" to="/" icon={<HomeOutlinedIcon />} />

          <Typography
            variant="h6"
            color="#a3a3a3"
            sx={{ m: "15px 0 5px 20px" }}
          >
            Students
          </Typography>
          <Item title="New Student" to="/team" icon={<PeopleOutlinedIcon />} />

          <Item
            title="Notes"
            to="/contacts"
            icon={<ContactsOutlinedIcon />}
          />
        <Divider />
          <Typography
            variant="h6"
            color="#a3a3a3"
            sx={{ m: "15px 0 5px 20px" }}
          >
            Teachers
          </Typography>
          <Item title="New Teacher" to="/form" icon={<PersonOutlinedIcon />} />
          <Item
            title="Calendar"
            to="/calendar"
            icon={<CalendarTodayOutlinedIcon />}
          />

          <Divider />
          
          <Typography
            variant="h6"
            color="#a3a3a3"
            sx={{ m: "15px 0 5px 20px" }}
          >
            Classes
          </Typography>
          <Item
            title="Syllabus"
            to="/pie"
            icon={<PieChartOutlineOutlinedIcon />}
          />
        </Box>
      </Box>
    </Drawer>
  );
};

export default LeftDrawer;
