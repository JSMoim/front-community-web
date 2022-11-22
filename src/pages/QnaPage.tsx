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
import ImageIcon from "@mui/icons-material/Image";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import AdUnitsIcon from "@mui/icons-material/AdUnits";

export type BoardProps = {
  title: string;
  contents: string;
  avatar: string;
};

function createBoard() {
  let returnElements: JSX.Element[] = [];
  for (let i = 0; i < 6; i++) {
    returnElements.push(
      <Grid item xs={20} sm={10} md={5}>
        <div
          style={{
            padding: "20px",
          }}
        >
          <Card>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="black">
                HOME
              </Typography>
              <List>
                {boards.map((v, i) => {
                  return (
                    <ListItemButton>
                      <ListItemIcon>{v.avatar}</ListItemIcon>
                      <ListItemText>{v.title}</ListItemText>
                      <ListItemText>{v.contents}</ListItemText>
                    </ListItemButton>
                  );
                })}
              </List>
            </CardContent>
          </Card>
        </div>
      </Grid>
    );
  }
  return returnElements;
}

function QnaPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  let boards: BoardProps[] = [
    {
      title: "게시글 1",
      contents: "내용 1",
      avatar: "😀",
    },

    {
      title: "게시글 2",
      contents: "내용 2",
      avatar: "😀",
    },

    {
      title: "게시글 3",
      contents: "내용 3",
      avatar: "😀",
    },
  ];

  return (
    <><Box
      sx={{
        bgcolor: "background.paper",
        display: "flex",
      }}
    >
      <Stack
        direction="row"
        justifyContent={"center"}
        alignItems={"center"}
        spacing={2}
        sx={{ flexGrow: 1, overflow: "hidden" }}
      >
        
        <Tabs value={value} onChange={handleChange} centered sx={{}}>
          <Tab label="기술" value="tech" />

          <Tab label="커리어" />
          <Tab label="기타" />
          <Tab label="전체" />
        </Tabs>
   
      </Stack>
     
    </Box>
  );
}

export default QnaPage;
