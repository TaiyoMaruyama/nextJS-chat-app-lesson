"use client";

import { Box } from "@mui/material";
import AppHeader from "./components/common/AppHeader";
import Sidebar from "./components/sideBar/Sidebar";
import ChatArea from "./components/chat/ChatArea";

export default function Home() {
  return (
    <Box>
      <AppHeader />
      <Box display="flex">
        <Sidebar />
        <ChatArea />
      </Box>
    </Box>
  );
}
