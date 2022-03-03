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
      fontSize: "4rem",
    },
    h2: {
      fontFamily: "Platform",
      fontWeight: 500,
      color: "#9AA3A7",
      fontSize: "3rem",
    },
    h3: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "1.2rem",
      color: "white",
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

const options = {
  factor: 3,
};
theme = responsiveFontSizes(theme, options);
export default theme;
