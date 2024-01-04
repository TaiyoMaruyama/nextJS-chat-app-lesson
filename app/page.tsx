"use client";

import { Box } from "@mui/material";
import Sidebar from "./components/sideBar/Sidebar";
import ChatArea from "./components/chat/ChatArea";

export default function Home() {
  return (
    <Box>
      <Box display="flex">
        <Sidebar />
        <ChatArea />
      </Box>
    </Box>
  );
}
