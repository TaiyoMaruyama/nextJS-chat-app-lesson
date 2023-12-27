import { AccountCircle } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Badge,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { FC, useState } from "react";

const UserMenuPanel: FC<{ anchorEl: any; onClose: () => void }> = ({
  anchorEl,
  onClose,
}) => {
  return (
    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onClose}>
      <MenuItem onClick={onClose} dense>
        プロフィール
      </MenuItem>
      <MenuItem onClick={onClose} dense>
        画面設定
      </MenuItem>
      <MenuItem onClick={onClose} dense>
        ログアウト
      </MenuItem>
    </Menu>
  );
};

const AppHeader = () => {
  const [anchorEl, setAnchorEl] = useState<any>(null);

  return (
    <Box sx={{ flexGrow: 1, mb: 6, zIndex: 1000 }}>
      <AppBar elevation={0} sx={{ bgcolor: "dodgerblue" }}>
        <Toolbar variant="dense">
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold", flexGrow: 1 }}
          >
            My Chat App
          </Typography>
          <IconButton
            color="inherit"
            onClick={(event) => setAnchorEl(event.currentTarget)}
          >
            <AccountCircle />
          </IconButton>
          <UserMenuPanel
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppHeader;
