import { GRADATION_3, SIDEBAR_WIDTH } from "@/app/consts/chat";
import { List, ListItem, Divider, Box, ListItemButton } from "@mui/material";
import React from "react";

const Sidebar = () => {
  return (
    <Box width={SIDEBAR_WIDTH} height="100vh" sx={{ ...GRADATION_3 }}>
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
