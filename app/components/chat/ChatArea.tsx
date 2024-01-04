import React from "react";
import { Call, Menu } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { ReceivedChatBubble } from "./chatBubbleFrame/ReceivedChatBubble";
import { SendChatBubble } from "./chatBubbleFrame/SendChatBubble";
import { chatDemo } from "@/app/consts/chat";

const ChatBubble = () => {
  return (
    <Box flexGrow={1}>
      <Box
        id="chat-header"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ px: 2 }}
      >
        <Typography sx={{ fontSize: 24, fontWeight: "bold", py: 1 }}>
          うーま
        </Typography>
        <Box id="icon-button-group">
          <IconButton>
            <Call />
          </IconButton>
          <IconButton>
            <Menu />
          </IconButton>
        </Box>
      </Box>
      <Box height={500} sx={{ mx: 1, overflowY: "auto" }}>
        {chatDemo.map((chat) =>
          chat.sendID === "xxxx" ? (
            <SendChatBubble
              text={chat.text}
              time={chat.time}
              read={chat.read}
            />
          ) : (
            <ReceivedChatBubble
              text={chat.text}
              time={chat.time}
              read={chat.read}
            />
          )
        )}
      </Box>
    </Box>
  );
};

export default ChatBubble;
