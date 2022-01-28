import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Article from './pages/Article';
import Create from './pages/Create';
import Landing from './pages/Landing';
import { useAppSelector } from './redux/hooks';
import { darkTheme, lightTheme } from './styles/theme';

function App() {
  const isDarkMode = useAppSelector((state) => state.theme.darkTheme);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Box>
          <Header />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/article" element={<Article />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
