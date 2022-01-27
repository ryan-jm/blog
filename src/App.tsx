import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing';
import Article from './pages/Article';
import Header from "./components/Header";
import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';

import { useAppSelector } from './redux/hooks';
import { darkTheme, lightTheme } from './styles/theme';

function App() {
  const theme = useAppSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
      <BrowserRouter>
      <div className="App"> 
        <Header/>
        <Routes>
          <Route path="/" element={<Landing/>} />
            <Route path="/article" element={<Article />} />
            {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
