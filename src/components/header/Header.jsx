// import { AppBar, Box, Toolbar, Typography } from "@mui/material";
// src/pages/Dashboard.jsx (or Accounts.jsx) - UPDATED with header code for JS
import React, { useContext, useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import {
  Language as LanguageIcon,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "../themeContext/ThemeContext";
import { useTranslation } from "react-i18next";

const Header = () => {
  const {
    i18n: { changeLanguage, language },
    t,
  } = useTranslation();

  const [anchorElLang, setAnchorElLang] = useState(null);
  const openLangMenu = Boolean(anchorElLang);
  const handleClickLangMenu = (event) => {
    setAnchorElLang(event.currentTarget);
    console.log(event.currentTarget);
  };

  const onChangeLocale = (e) => {
    changeLanguage(e.target.value);
  };
  const handleCloseLangMenu = () => {
    setAnchorElLang(null);
  };

  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 4,
        height: "98px",
        px: 2,
        backgroundColor:
          theme.palette.mode === "dark" ? "#212529" : "#ffffffff",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          mb: { xs: 2, md: 0 },
          color: theme.palette.mode === "dark" ? "#465fff" : "#343a40",
        }}
      >
        {t("Accounts")}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          justifyContent: "flex-end",
        }}
      >
        <select
          name=""
          id=""
          value={language}
          onChange={onChangeLocale}
          style={{
            width: "48px",
            height: "48px",
            border: "none",
            outline: "none",
            backgroundColor: "transparent",
          }}
        >
          <option value="en">En</option>
          <option value="fa" id="">
            fa
          </option>
        </select>
        <Menu
          id="language-menu"
          anchorEl={anchorElLang}
          open={openLangMenu}
          onClose={handleCloseLangMenu}
          MenuListProps={{
            "aria-labelledby": "language-button",
          }}
        >
          <MenuItem onClick={handleCloseLangMenu}>English</MenuItem>
          <MenuItem onClick={handleCloseLangMenu}>فارسی</MenuItem>
          <MenuItem onClick={handleCloseLangMenu}>Deutsch</MenuItem>
        </Menu>
        <ToggleButton
          value="theme"
          selected={theme.palette.mode === "dark"}
          onChange={colorMode.toggleColorMode}
          sx={{
            border: "none",
            borderRadius: "8px",
            color: theme.palette.mode === "dark" ? "#ffb74d" : "#1565c0",
            backgroundColor:
              theme.palette.mode === "dark" ? "#3cff00ff" : "#ecf3ff",
          }}
        >
          {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
        </ToggleButton>
      </Box>
    </Box>
  );
};

export default Header;
