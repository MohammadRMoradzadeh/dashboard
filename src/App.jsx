// src/App.tsx
import React from "react";
import {
  Box,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Grid,
} from "@mui/material";
import Sidebar from "./components/sideBar/SideBar";
import Dashboard from "./components/dashboard/Dashboard";
import { ThemeModeProvider } from "../src/components/themeContext/ThemeContext";
import { useTranslation } from "react-i18next";

function App() {
  const {
      i18n: { changeLanguage, language, dir },
    } = useTranslation();
  return (
    <ThemeModeProvider>
      <CssBaseline />
      <div dir={dir()}>
        <Box
          sx={{
            height: "100%",
            display: "flex",
          }}
        >
          <Sidebar />
          <Box
            sx={{
              height: "100%",
              minHeight: "100vh",
            }}
          >
            <Dashboard />
          </Box>
        </Box>
      </div>
    </ThemeModeProvider>
  );
}

export default App;
