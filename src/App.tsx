import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import githubLogo from "@/assets/github.svg";
import "@/App.css";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import MainPage from "@/pages/MainPage";
import NoticePage from "@/pages/NoticePage";
import QnaPage from "@/pages/QnaPage";
import CommunityPage from "@/pages/CommunityPage";
import { ThemeProvider } from "@emotion/react";
import { Box, Tabs, Tab, Grid, Divider, Stack, Button } from "@mui/material";
import React from "react";
import { DefaultTheme } from "./themes/DefaultThemes";

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ Width: 100, height: 100, bgcolor: "background.paper" }}>
        <Stack
          direction="row"
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          spacing={4}
        >
          <div className="MainIcon">
            <a className="active" href="/">
              <img
                src="src/assets/unnamed.png"
                width={"40px"}
                height={"40px"}
              />
            </a>
          </div>
          <ThemeProvider theme={DefaultTheme}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab label="Q&A" to="/qna" component={Link} />
              <Tab label="커뮤니티" to="/community" component={Link} />
              <Tab label="공지사항" to="/notice" component={Link} />
            </Tabs>
          </ThemeProvider>
        </Stack>
      </Box>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/qna" element={<QnaPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/notice" element={<NoticePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
