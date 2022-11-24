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
import { TabContext, TabPanel } from "@mui/lab";
import { TabList } from "@mui/lab";

export type BoardProps = {
  title: string;
  contents: string;
  avatar: string;
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

function createBoard(subCategory: String) {
  let returnElements: JSX.Element[] = [];
  for (let i = 0; i < 6; i++) {
    returnElements.push(
      <Grid item xs={20} sm={10} md={5}>
        <div
          style={{
            padding: "20px",
          }}
        >
          <Card
            onClick={() => {
              console.log("hi");
            }}
          >
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="black">
                {subCategory}
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
  const [value, setValue] = React.useState("tech");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  let subCategories: Map<string, string> = new Map([
    ["tech", "Tech"],
    ["career", "Career"],
    ["etc", "ETC"],
    ["all", "All"],
  ]);
  return (
    <div>
      <TabContext value={value}>
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
            spacing={2}
            sx={{ flexGrow: 1, overflow: "hidden" }}
          >
            <TabList value={value} onChange={handleChange}>
              <Tab label="기술" value={"tech"} />

              <Tab label="커리어" value={"career"} />
              <Tab label="기타" value={"etc"} />
              <Tab label="전체" value={"all"} />
            </TabList>
          </Stack>
        </Box>
        {Array.from(subCategories).map((e) => {
          return (
            <TabPanel value={e[0]}>
              <Grid
                container
                direction={"row"}
                justifyContent="center"
                alignItems="center"
              >
                {createBoard(e[1])}
              </Grid>
            </TabPanel>
          );
        })}
      </TabContext>
    </div>
  );
}

export default QnaPage;
