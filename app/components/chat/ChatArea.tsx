import React from "react";
import { Call, Menu } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { ReceivedChatBubble } from "./chatBubbleFrame/ReceivedChatBubble";
import { SendChatBubble } from "./chatBubbleFrame/SendChatBubble";

const chatDemo = [
  {
    key: 2134141,
    sendID: "xxxx",
    text: "yFxavYjMCCWtsFcYIcamoUfnevVBgviGyBzRBhfVMdaCPdiIFBKQkMMgozLwMtMhfyOCpycuXgFBgZRhGiuXPuVEkiViinfTnLwp",
    time: "09:00",
    read: true,
  },
  {
    key: 2134142,
    sendID: "yyyy",
    text: "yFxavYjMCCWtsFcYIcamoUfnevVBgviGy",
    time: "09:00",
    read: true,
  },
  {
    key: 2134143,
    sendID: "yyyy",
    text: "yFxavYjMCCWtsFcYIcamoUfnevVBgviGyBzRBhfVMdaCPdiIFBKQ",
    time: "09:00",
    read: true,
  },
  {
    key: 2134144,
    sendID: "xxxx",
    text: "yFxavYjMCCWtsFcYIcamoUfnkiViinfTnLwp",
    time: "09:00",
    read: true,
  },
  {
    key: 2134145,
    sendID: "yyyy",
    text: "yFxavYjMCCWtsFcYIcamMdaCPdiIFBKBgZRhGiuXPuVEkiViinfTnLwp",
    time: "09:00",
    read: true,
  },
  {
    key: 2134146,
    sendID: "yyyy",
    text: "yFxavYjMCCWtsFcYIcamoUfnevVBgviGyBzRBhfVMdaCPdiIFBhfyOCpycuXgFBgZRhGiuXPuVEkiViinfTnLwp",
    time: "09:00",
    read: true,
  },
  {
    key: 2134144,
    sendID: "xxxx",
    text: "yFxavYjMCCWtsFcYIcamoUfnkiViinfTnLwp",
    time: "09:00",
    read: true,
  },
  {
    key: 2134145,
    sendID: "yyyy",
    text: "yFxavYjMCCWtsFcYIcamMdaCPdiIFBKBgZRhGiuXPuVEkiViinfTnLwp",
    time: "09:00",
    read: true,
  },
  {
    key: 2134146,
    sendID: "yyyy",
    text: "yFxavYjMCCWtsFcYIcamoUfnevVBgviGyBzRBhfVMdaCPdiIFBhfyOCpycuXgFBgZRhGiuXPuVEkiViinfTnLwp",
    time: "09:00",
    read: true,
  },
  {
    key: 2134144,
    sendID: "xxxx",
    text: "yFxavYjMCCWtsFcYIcamoUfnkiViinfTnLwp",
    time: "09:00",
    read: true,
  },
  {
    key: 2134145,
    sendID: "yyyy",
    text: "yFxavYjMCCWtsFcYIcamMdaCPdiIFBKBgZRhGiuXPuVEkiViinfTnLwp",
    time: "09:00",
    read: true,
  },
  {
    key: 2134146,
    sendID: "yyyy",
    text: "yFxavYjMCCWtsFcYIcamoUfnevVBgviGyBzRBhfVMdaCPdiIFBhfyOCpycuXgFBgZRhGiuXPuVEkiViinfTnLwp",
    time: "09:00",
    read: true,
  },
  {
    key: 2134144,
    sendID: "xxxx",
    text: "yFxavYjMCCWtsFcYIcamoUfnkiViinfTnLwp",
    time: "09:00",
    read: true,
  },
  {
    key: 2134145,
    sendID: "yyyy",
    text: "yFxavYjMCCWtsFcYIcamMdaCPdiIFBKBgZRhGiuXPuVEkiViinfTnLwp",
    time: "09:00",
    read: true,
  },
  {
    key: 2134146,
    sendID: "yyyy",
    text: "yFxavYjMCCWtsFcYIcamoUfnevVBgviGyBzRBhfVMdaCPdiIFBhfyOCpycuXgFBgZRhGiuXPuVEkiViinfTnLwp",
    time: "09:00",
    read: true,
  },
  {
    key: 2134144,
    sendID: "xxxx",
    text: "yFxavYjMCCWtsFcYIcamoUfnkiViinfTnLwp",
    time: "09:00",
    read: true,
  },
  {
    key: 2134145,
    sendID: "yyyy",
    text: "yFxavYjMCCWtsFcYIcamMdaCPdiIFBKBgZRhGiuXPuVEkiViinfTnLwp",
    time: "09:00",
    read: true,
  },
  {
    key: 2134146,
    sendID: "yyyy",
    text: "yFxavYjMCCWtsFcYIcamoUfnevVBgviGyBzRBhfVMdaCPdiIFBhfyOCpycuXgFBgZRhGiuXPuVEkiViinfTnLwp",
    time: "09:00",
    read: true,
  },
  {
    key: 2134144,
    sendID: "xxxx",
    text: "yFxavYjMCCWtsFcYIcamoUfnkiViinfTnLwp",
    time: "09:00",
    read: true,
  },
  {
    key: 2134145,
    sendID: "yyyy",
    text: "yFxavYjMCCWtsFcYIcamMdaCPdiIFBKBgZRhGiuXPuVEkiViinfTnLwp",
    time: "09:00",
    read: true,
  },
  {
    key: 2134146,
    sendID: "yyyy",
    text: "yFxavYjMCCWtsFcYIcamoUfnevVBgviGyBzRBhfVMdaCPdiIFBhfyOCpycuXgFBgZRhGiuXPuVEkiViinfTnLwp",
    time: "09:00",
    read: true,
  },
  {
    key: 2134147,
    sendID: "xxxx",
    text: "OK",
    time: "09:00",
    read: true,
  },
];

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
