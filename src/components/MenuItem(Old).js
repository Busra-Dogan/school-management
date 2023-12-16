import React from 'react'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
const MenuItem = ({ title, to, icon, selected, setSelected }) => {
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
  )
}
export default MenuItem;
