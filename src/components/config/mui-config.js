import { createTheme } from "@mui/material";
import { Colors } from "./colors";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 300,
      md: 900,
      lg: 1160,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: ["Lato", "sans-serif"].join(","),
    h1: {
      fontWeight: "700",
      fontSize: "px",
      letterSpacing: "0.01em",
      color: `${Colors.black}`,
    },
    h2: {
      fontWeight: "700",
      fontSize: "42px",
      color: `${Colors.h2Color}`,
    },
    h3: {
      fontWeight: "700",
      fontSize: "px",
      color: `${Colors.accent}`,
    },
    h4: {
      fontWeight: "400",
      fontSize: "18px",
      color: `${Colors.text}`,
    },
    body1: {
      fontWeight: "700",
      fontSize: "16px",
      lineHeight: "175%",
      color: `${Colors.subTextColor}`,
    },
    body2: {
      fontWeight: "400",
      fontSize: "px",
      color: `${Colors.text}`,
    },
  },
});
