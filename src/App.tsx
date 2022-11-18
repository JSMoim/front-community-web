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
import {
  Box,
  Tabs,
  Tab,
  Grid,
  Divider,
  Stack,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
  Chip,
} from "@mui/material";
import React from "react";
import { DefaultTheme } from "./themes/DefaultThemes";
import MainIcon from "@/assets/unnamed.png";
import { mainModule } from "process";
import { width } from "@mui/system";
import SignupPage from "@/pages/SignupPage";
import GithubIcon from "./assets/GithubIcon";

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <ThemeProvider theme={DefaultTheme}>
          <BrowserRouter>
            <Box
              sx={{
                bgcolor: "background.paper",
                display: "flex",
              }}
            >
              <Stack
                direction="row"
                justifyContent={"flex-start"}
                alignItems={"flex-start"}
                spacing={4}
                sx={{ flexGrow: 1 }}
              >
                {/* <div className="MainIcon">
      <a className="active" href="/">
        <img
          src="src/assets/unnamed.png"
          width={"40px"}
          height={"40px"}
        />
      </a>
    </div> */}
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                  TabIndicatorProps={{
                    style: {
                      backgroundColor: value == 0 ? "transparent" : "black",
                    },
                  }}
                >
                  <Tab
                    icon={<img src={MainIcon} width={"40px"} height={"40px"} />}
                    to="/"
                    component={Link}
                  />
                  <Tab label="Q&A" to="/qna" component={Link} />
                  <Tab label="커뮤니티" to="/community" component={Link} />
                  <Tab label="공지사항" to="/notice" component={Link} />
                </Tabs>
              </Stack>
              <Button
                sx={{ paddingLeft: "16px", paddingRight: "16px" }}
                onClick={handleClickOpen}
              >
                Login
              </Button>
              <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                  <Stack
                    sx={{
                      justifyItems: "center",
                      justifyContents: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={MainIcon}
                      width={"100px"}
                      height={"100px"}
                      style={{
                        display: "flex",
                        paddingBottom: "24px",
                        paddingTop: "12px",
                      }}
                    />
                    <Typography variant="h5" textAlign={"center"}>
                      <b>오신것을 환영합니다!</b>
                    </Typography>
                    <Stack direction={"row"}>
                      <Button
                        color="secondary"
                        variant="outlined"
                        sx={{ margin: "16px", width: "100px" }}
                      >
                        {<GithubIcon />}
                      </Button>
                      <Button
                        color="secondary"
                        variant="outlined"
                        sx={{ margin: "16px", width: "100px" }}
                      >
                        <svg
                          height="32"
                          aria-hidden="true"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="32"
                          data-view-component="true"
                          style={{ margin: "4px" }}
                        >
                          {" "}
                          <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />{" "}
                        </svg>
                      </Button>
                    </Stack>

                    <TextField
                      sx={{ width: "240px" }}
                      style={{ margin: "4px" }}
                      id="outlined-basic"
                      label="아이디"
                      variant="outlined"
                    />

                    <TextField
                      sx={{ width: "240px" }}
                      style={{ margin: "4px" }}
                      id="outlined-basic"
                      label="비밀번호"
                      variant="outlined"
                      type="password"
                    />
                    <Button
                      sx={{
                        width: "240px",
                      }}
                      style={{ margin: "4px" }}
                      variant="contained"
                    >
                      로그인
                    </Button>
                    <Stack
                      direction={"row"}
                      sx={{
                        justifyItems: "center",
                        justifyContents: "center",
                        alignItems: "center",
                        paddingTop: "15px",
                      }}
                    >
                      <Typography variant="button" sx={{ marginRight: "10px" }}>
                        <b>아직 회원이 아니신가요?</b>
                      </Typography>
                      <Link href="/signup" underline="hober">
                        <Typography variant="button">{"회원가입"}</Typography>
                      </Link>
                    </Stack>
                  </Stack>
                </DialogContent>
              </Dialog>
            </Box>

            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/qna" element={<QnaPage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/notice" element={<NoticePage />} />
              <Route path="/signup" element={<SignupPage />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
