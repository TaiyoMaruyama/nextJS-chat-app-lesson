import { useTheme } from "@emotion/react";
import { Call, Menu } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import SendFrame from "./SendFrame";

const ChatArea = () => {
  const theme = useTheme();

  return (
    <Box flexGrow={1}>
      <Box
        id="chat-header"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ px: 2 }}
      >
        <Typography>EMMA</Typography>
        <Box id="icon-button-group">
          <IconButton>
            <Call />
          </IconButton>
          <IconButton>
            <Menu />
          </IconButton>
        </Box>
      </Box>
      <Box>
        <SendFrame />
      </Box>
    </Box>
  );
};

export default ChatArea;
