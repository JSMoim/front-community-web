import {
  Card,
  CardContent,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { BoardProps } from "./MainPage";
import ImageIcon from "@mui/icons-material/Image";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import AdUnitsIcon from "@mui/icons-material/AdUnits";

export type BoardProps_Qna = {
  title: string;
  contents: string;
  avatar: JSX.Element;
};

let boards: BoardProps_Qna[] = [
  {
    title: "게시글 1",
    contents: "내용 1",
    avatar: <ImageIcon />,
  },

  {
    title: "게시글 2",
    contents: "내용 2",
    avatar: <AccessAlarmIcon />,
  },

  {
    title: "게시글 3",
    contents: "내용 3",
    avatar: <AdUnitsIcon />,
  },
];

function QnaPage() {
  return <div>QnaPage</div>;
  return (
    <Grid container spacing={2}>
      <Grid item xs={10}>
        <Card>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="black">
              Qna 게시판
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
      </Grid>
    </Grid>
  );
}

export default QnaPage;
