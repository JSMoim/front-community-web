import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import githubLogo from "@/assets/github.svg";
import "@/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "@/pages/MainPage";
import AboutPage from "@/pages/AboutPage";
import QnaPage from "@/pages/QnaPage";
import CommunityPage from "@/pages/CommunityPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="topnav">
        <a className="active" href="/">
          <img src="src/assets/unnamed.png" width={"40px"} height={"40px"} />
        </a>
        <a href="/qna">Q & A</a>
        <a href="/community">커뮤니티</a>
        <a href="/about">About</a>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/qna" element={<QnaPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
