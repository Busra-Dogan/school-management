import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const TopNavigation = () => {
  const [value, setValue] = React.useState(0);
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={12} md={12}>
            <BottomNavigation
              showLabels
              value={value}
              sx={{
                backgroundColor: "#1F2A40",
              }}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            >
              <BottomNavigationAction
                component={Link}
                to={{
                  pathname: "/student",
                }}
                label="Öğrenciler"
                icon={<RestoreIcon />}
                sx={{
                  "&.MuiBottomNavigationAction-root": {
                    color: "#e0e0e0",
                  },
                  "&.Mui-selected": {
                    color: "#e0e0e0",
                    fontWeight: "bold",
                  },
                }}
              />
              <BottomNavigationAction
                component={Link}
                to={{
                  pathname: "/student/studentAdd",
                }}
                sx={{
                  "&.MuiBottomNavigationAction-root": {
                    color: "#e0e0e0",
                  },
                  "&.Mui-selected": {
                    color: "#e0e0e0",
                    fontWeight: "bold",
                  },
                }}
                label="Öğrenci Ekle"
                icon={<PersonAddAlt1Icon />}
              />
              <BottomNavigationAction
                component={Link}
                to={{
                  pathname: "/teacherSyllabus",
                }}
                label="Ders Programı"
                sx={{
                  "&.MuiBottomNavigationAction-root": {
                    color: "#e0e0e0",
                  },
                  "&.Mui-selected": {
                    color: "#e0e0e0",
                    fontWeight: "bold",
                  },
                }}
                icon={<CalendarMonthIcon />}
              />
              {/* <BottomNavigationAction
                component={Link}
                to={{
                  pathname: "/teacher/teacherAdd",
                }}
                label="Öğretmen Ekle"
                sx={{
                  "&.MuiBottomNavigationAction-root": {
                    color: "#e0e0e0",
                  },
                  "&.Mui-selected": {
                    color: "#e0e0e0",
                    fontWeight: "bold",
                  },
                }}
                icon={<GroupAddIcon />}
              /> */}
            </BottomNavigation>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default TopNavigation;
