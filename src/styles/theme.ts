import '@fontsource/manrope/300.css';
import '@fontsource/manrope/400.css';
import '@fontsource/manrope/500.css';
import '@fontsource/manrope/700.css';

import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#eeeeee',
      paper: '#f2f2f2',
    },
    text: {
      primary: '#111',
      secondary: '#111',
    },
    primary: {
      main: '#4527a0',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: ['Manrope', 'Roboto', 'sans-serif'].join(','),
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#f2f2f2',
          color: '#111',
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: 'rgba(0,0,0,0.27)',
      paper: '#222',
    },
    text: {
      primary: '#fff',
      secondary: '#fff',
    },
    primary: {
      main: '#c6ff00',
      light: '#dce775',
    },
    secondary: {
      main: '#7c4dff',
      light: '#b388ff',
    },
  },
  typography: {
    fontFamily: ['Manrope', 'Roboto', 'sans-serif'].join(','),
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#222',
          color: '#fff',
        },
      },
    },
  },
});

// rgba(0, 0, 0, 0.87)
