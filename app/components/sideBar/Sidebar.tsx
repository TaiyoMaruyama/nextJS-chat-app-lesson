import { List, ListItem, Divider, Box, ListItemButton } from "@mui/material";
import React from "react";

const Sidebar = () => {
  return (
    <Box width={280}>
      <List>
        <ListItemButton>うーま</ListItemButton>
        <ListItemButton>うーま</ListItemButton>
        <Divider></Divider>
        <ListItemButton>うーま</ListItemButton>
        <ListItemButton>うーま</ListItemButton>
        <ListItemButton>うーま</ListItemButton>
        <Divider></Divider>
        <ListItemButton>うーま</ListItemButton>
        <ListItemButton>うーま</ListItemButton>
        <ListItemButton>うーま</ListItemButton>
        <ListItemButton>うーま</ListItemButton>
      </List>
    </Box>
  );
};

export default Sidebar;
