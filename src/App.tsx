import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import "@/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "@/pages/MainPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
