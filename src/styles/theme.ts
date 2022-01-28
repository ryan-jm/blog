import '@fontsource/manrope/300.css';
import '@fontsource/manrope/400.css';
import '@fontsource/manrope/500.css';
import '@fontsource/manrope/700.css';

import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      paper: '#f2f2f2',
    },
    text: {
      primary: '#111111',
    },
  },
  typography: {
    fontFamily: ['Manrope', 'Roboto', 'sans-serif'].join(','),
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    // background: {
    //   paper: '#222',
    // },
    text: {
      primary: '#fff',
    },
  },
  typography: {
    fontFamily: ['Manrope', 'Roboto', 'sans-serif'].join(','),
  },
});
