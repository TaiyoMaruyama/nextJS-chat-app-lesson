import React from "react";
import { Call, Menu, PhotoCamera, PhotoLibrary } from "@mui/icons-material";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { ReceivedChatBubble } from "./chatBubbleFrame/ReceivedChatBubble";
import { SendChatBubble } from "./chatBubbleFrame/SendChatBubble";
import {
  CHAT_AREA_ACCESSORY,
  CHAT_AREA_HEIGHT,
  CHAT_AREA_WIDTH,
  chatDemo,
} from "@/app/consts/chat";

const ChatBubble = () => {
  return (
    <Box width={CHAT_AREA_WIDTH}>
      {/* チャットのヘッダー */}
      <Box
        id="chat-header"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ px: 2, bgcolor: "#0b031a" }}
        height={CHAT_AREA_ACCESSORY}
      >
        <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
          うーま
        </Typography>
        <Box id="icon-button-group">
          <IconButton>
            <Call sx={{ color: "white" }} />
          </IconButton>
          <IconButton>
            <Menu sx={{ color: "white" }} />
          </IconButton>
        </Box>
      </Box>
      {/* チャット一覧 */}
      <Box
        height={CHAT_AREA_HEIGHT}
        sx={{ p: 1, overflowY: "auto", bgcolor: "darkgray" }}
      >
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
      {/* チャットのテキスト入力部分 */}
      <Box
        width={CHAT_AREA_WIDTH}
        minHeight={CHAT_AREA_ACCESSORY}
        position="fixed"
        bottom={0}
        sx={{ bgcolor: "#0b031a" }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ p: 1 }}
        >
          <IconButton>
            <PhotoCamera sx={{ color: "white" }} />
          </IconButton>
          <IconButton>
            <PhotoLibrary sx={{ color: "white" }} />
          </IconButton>
          <TextField
            id="chat-text-input"
            fullWidth
            multiline
            maxRows={5}
            size="small"
            sx={{
              mr: 1,
              maxLines: 3,
              overflowWrap: "break-word",
              "& .MuiInputBase-root": {
                bgcolor: "white",
              },
            }}
          />
          <Button id="chat-send" variant="contained">
            送信
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatBubble;
