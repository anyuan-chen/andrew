import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      lighter: "#162932",
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
    h4: {
      fontFamily: "Platform",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "1.2rem",
      letterSpacing: "0.04em",
      color: "white",
    },
    h5: {
      fontFamily: "Platform",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "1rem",
      lineHeight: "1.2rem",
      letterSpacing: "0.08em",
      color: "#9AA3A7",
    },

    nav: {
      fontFamily: "Platform",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "1.5rem",
      letterSpacing: "0.08em",
    },
    markdownh1: {
      fontFamily: "Platform",
      fontWeight: 500,
      color: "white",
      fontSize: "2rem",
    },
    caption: {
      fontFamily: "Platform",
      fontWeight: 400,
      color: "white",
      fontSize: "1rem",
      opacity: "0.5",
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

theme.typography.p = {
  fontFamily: "Inter",
  fontStyle: "normal",
  fontSize: "1.2rem",
  lineHeight: "2.2rem",
  color: "rgba(0,0,0,0.8)",
};

export default theme;
