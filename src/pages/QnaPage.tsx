import {
  Box,
  Card,
  CardContent,
  Grid,
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React from "react";
import { BoardProps } from "./MainPage";
import ImageIcon from "@mui/icons-material/Image";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import AdUnitsIcon from "@mui/icons-material/AdUnits";

function QnaPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        display: "flex",
      }}
    >
      <Stack
        direction="row"
        justifyContent={"center"}
        alignItems={"center"}
        spacing={4}
        sx={{ flexGrow: 1, overflow: "hidden" }}
      >
        <Tabs value={value} onChange={handleChange} centered sx={{}}>
          <Tab label="기술" />
          <Tab label="커리어" />
          <Tab label="기타" />
          <Tab label="전체" />
        </Tabs>
      </Stack>
    </Box>
  );
}

export default QnaPage;
