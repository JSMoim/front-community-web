import {
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import AdUnitsIcon from "@mui/icons-material/AdUnits";
import React from "react";
export type BoardProps = {
  title: string;
  contents: string;
  avatar: JSX.Element;
};

let boards: BoardProps[] = [
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

function MainPage() {
  return (
    <div>
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
    </div>
  );
}

export default MainPage;
