// src/App.tsx
import React from "react";
import { Box, CssBaseline } from "@mui/material";
import Sidebar from "./components/sideBar/SideBar";
import Dashboard from "./components/dashboard/Dashboard";
import { ThemeModeProvider } from "../src/components/themeContext/ThemeContext";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";

function App() {
  const theme = useTheme();
  const {
    i18n: { changeLanguage, language, dir },
  } = useTranslation();
  return (
    <ThemeModeProvider>
      <CssBaseline />
      <div id="parent" dir={dir()}>
        <Box
          sx={{
            height: "100%",
            display: "flex",
          }}
        >
          <Sidebar />
          <Box
            display={"flex"}
            flexDirection={"column"}
            flexWrap={"wrap"}
            sx={{
              width: "100%",
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
