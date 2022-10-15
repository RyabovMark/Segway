import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiButtonBase: {},
    MuiTabs: {
      styleOverrides: {
        indicator: {
          display: "none",
        },
      },
    },
  },
  palette: {
    background: {
      default: "#E5E5E5",
    },
    primary: {
      main: "#009EFF",
    },
    secondary: {
      main: "#323941",
      grey: "#999999",
      greyOpacity: "rgba(153,153,153,0.25)",
    },
    text: {
      primary: "#323941",
      secondary: "#999999",
      blue: "#009EFF",
      opacity: "rgba(255,255,255,0.75)",
      white: "#ffffff",
      green: "#6ACD68",
      warning: "#a81e1e",
    },
  },
  values: {
    xl: 1536,
    lg: 1200,
    md: 900,
    sm: 600,
    xs: 0,
  },
});
