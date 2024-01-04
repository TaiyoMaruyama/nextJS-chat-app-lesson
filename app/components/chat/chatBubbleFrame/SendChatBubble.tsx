import { AccountCircle } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React, { FC } from "react";

export const SendChatBubble: FC<{
  text: string;
  time: string;
  read: boolean;
}> = ({ text, time, read }) => {
  return (
    <Box display="flex" justifyContent="flex-end" sx={{ mb: 2 }}>
      <Box display="flex" flexDirection="column" justifyContent="flex-end">
        {read && <Typography sx={{ fontSize: 14 }}>既読</Typography>}
        <Typography sx={{ fontSize: 12 }}>{time}</Typography>
      </Box>
      <Box
        maxWidth={500}
        sx={{
          borderRadius: 2,
          bgcolor: "darkblue",
          overflowWrap: "break-word",
          p: 1,
          mx: 1,
        }}
      >
        {text}
      </Box>
      <AccountCircle sx={{ fontSize: 36 }} />
    </Box>
  );
};
