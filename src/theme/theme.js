// theme.js یا theme.ts

import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0052A8",
    },
    background: {
      default:
        "#f8f8f8                                                                                                                       ",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fd0000ff",
    },
    background: {
      default: "#464646ff",
    },
  },
});
