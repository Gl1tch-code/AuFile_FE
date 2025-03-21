import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./core/context/ThemeContext.tsx";
import Home from "./Pages/Home/index.tsx";
import "./index.css";
import RecentlyUploaded from "./Pages/RecentlyUploaded/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <ThemeProvider>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<RecentlyUploaded />} path="/recently-uploaded" />
          </Routes>
      </ThemeProvider>
    </HashRouter>
  </StrictMode>
);
