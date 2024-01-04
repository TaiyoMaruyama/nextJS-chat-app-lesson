import { GRADATION_1 } from "@/app/consts/chat";
import { AccountCircle } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React, { FC } from "react";

export const ReceivedChatBubble: FC<{
  text: string;
  time: string;
  read: boolean;
}> = ({ text, time, read }) => {
  return (
    <Box display="flex" sx={{ mb: 2 }}>
      <AccountCircle sx={{ fontSize: 36 }} />
      <Box
        maxWidth={500}
        sx={{
          borderRadius: 2,
          ...GRADATION_1,
          overflowWrap: "break-word",
          p: 1,
          mx: 1,
        }}
      >
        <Typography sx={{ fontSize: 14 }}>{text}</Typography>
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="flex-end">
        <Typography sx={{ fontSize: 12 }}>{time}</Typography>
      </Box>
    </Box>
  );
};
