import styled, { ThemeProvider } from "styled-components";
import React,{useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from '@mui/material';
import { lightTheme, darkTheme, DarkModeStyles } from "./styles/darktheme";
import Header from "./components/Header";
import Article from "./pages/Article";
import Landing from "./pages/Landing";
import ModeSwitch from './components/shared/ModeSwitch'

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  const [theme, setTheme] = useState<void|string>("light");
  const themeToggler = () => {
    console.log("theme changed");
    setTheme((prev)=>
      prev === "light" ? setTheme("dark") : setTheme("light")
    );
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <BrowserRouter>
        <DarkModeStyles />
        <StyledApp className="App">
          <Header />
          <Box m={10} onClick={()=>{themeToggler()}}>
            <ModeSwitch />
          </Box>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/article:id" element={<Article />} />
          </Routes>
        </StyledApp>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
