import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      lighter: "#556cd6",
      main: "#021923",
    },
    secondary: {
      main: "#9AA3A7",
      lighter: "#D8D8D8",
      darker: "#4B4B4B",
    },
  },
  typography: {
    h1: {
      fontFamily: "Platform",
      fontWeight: 400,
      color: "white",
    },
    h2: {
      fontFamily: "Platform",
      fontWeight: 500,
      color: "secondary.main",
    },
    nav: {
      fontFamily: "Platform",
      fontSstyle: "normal",
      fontWweight: "normal",
      fontSize: "1.5rem",
      letterSpacing: "0.08em",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  spacing: [0, "0.125rem", "0.25rem", "0.5rem", "1rem", "2rem", "4rem", "8rem"],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*, *::before, *::after": {
          transition: "none !important",
          animation: "none !important",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;
