import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ClassIcon from "@mui/icons-material/Class";
import Person2Icon from "@mui/icons-material/Person2";
import EventNoteIcon from "@mui/icons-material/EventNote";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { ClassSharp } from "@mui/icons-material";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid>
      <BottomNavigation
        style={{ backgroundColor: "#9CA3A7" }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="Siniflar"
          value="sinif"
          style={{ color: "#4F5457" }}
          icon={<ClassIcon />}
        />
        <BottomNavigationAction
          label="Öğretmenler"
          value="öğretmen"
          style={{ color: "#4F5457" }}
          icon={<Person2Icon />}
        />
        <BottomNavigationAction
          label="Ders Programı"
          value="dersProgram"
          style={{ color: "#4F5457" }}
          icon={<EventNoteIcon />}
        />
        <BottomNavigationAction
          label="Öğrenciler"
          value="öğrenci"
          style={{ color: "#4F5457" }}
          icon={<EmojiPeopleIcon />}
        />
        <BottomNavigationAction
          id="demo-positioned-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          label="Ekleme İşlemleri"
          value="ekleme"
          style={{ color: "#4F5457" }}
          icon={<AddCircleIcon />}
        ></BottomNavigationAction>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            style={{ width: 170, fontSize: 12 }}
            onClick={handleClose}
            component={Link}
            href="/student"
          >
            Yeni Öğrenci Kaydi
          </MenuItem>
          <MenuItem
            style={{ width: 170, fontSize: 12 }}
            onClick={handleClose}
            component={Link}
            href="/class/classList"
          >
            Yeni Sinif Kaydi
          </MenuItem>
          <MenuItem
            style={{ width: 170, fontSize: 12 }}
            onClick={handleClose}
            component={Link}
            href="/teacher"
          >
            Yeni Öğretmen Kaydi
          </MenuItem>
          <MenuItem
            style={{ width: 170, fontSize: 12 }}
            onClick={handleClose}
            component={Link}
            href="/class/classAdd"
          >
            Ders Programi Güncelleme
          </MenuItem>
        </Menu>
      </BottomNavigation>
    </Grid>
  );
}
