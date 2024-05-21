import type {} from "@mui/lab/themeAugmentation";

import {createTheme} from "@mui/material/styles";

export const Colors = {
  primary: "#00adb5",
  secondary: "rgba(156,0,199,0.69)",
  success: "#4caf50",
  info: "#00d5ff",
  danger: "#FF5722",
  warning: "#FFC107",
  dark: "#22414d",
  light: "#aaa",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",
  dove_gray: "#d5d5d5",
  body_bg: "#f3f6f9",
  white: "#fff",
  black: "#000",
};

const scrollBar = {
  '&::-webkit-scrollbar': {
    width: '0.3em',
    borderRadius: '5px',
  },
  '&::-webkit-scrollbar-track': {
    background: "#cbcbcb",
    borderRadius: '5px'
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#888',
    borderRadius: '5px'
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#555'
  }
}
export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        root: scrollBar,
      },
    },
    MuiStack: {
      styleOverrides: {
        root: scrollBar
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: scrollBar
      }
    }
  },
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary
    }
  }
});
