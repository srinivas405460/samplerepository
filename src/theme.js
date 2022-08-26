import { createTheme } from '@mui/material/styles';

const commonProps = {
  letterSpacing: "16px"
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#2B934A",
      light: "#66B939",
    },
    secondary: {
      main: "#17692B",
    },
    info: {
      dark: "#000000",
      main: "#4A4A4A",
      light: "#F7F7F7",
    },
    warning: {
      main: "#F47D34",
      light: "#E0963A",
    },
    error: {
      main: "#FF0000",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: {
      fontSize: "35px",
      lineHeight: "55px",
      ...commonProps,
    },
    h2: {
      fontSize: "24px",
      fontWeight: "bold",
      lineHeight: "40px",
      ...commonProps,
    },
    h3: {
      fontSize: "20px",
      lineHeight: "30px",
      ...commonProps,
    },
    h4: {
      fontSize: "18px",
      lineHeight: "26px",
      ...commonProps,
    },
    body1: {
      fontSize: "16px",
      lineHeight: "24px",
    },
    body2: {
      fontSize: "14px",
      lineHeight: "24px",
    },
    button: {
      textTransform: "capitalize",
      fontSize: "16px",
    },
  },
});

export default theme;