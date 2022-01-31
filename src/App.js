// import { ThemeProvider } from "@mui/material/styles";
import styled, { ThemeProvider } from "styled-components";
import React,{useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from '@mui/material';
import { lightTheme, darkTheme, DarkModeStyles } from "./styles/darktheme";
import Header from "./components/Header";
import Article from "./pages/Article";
import Landing from "./pages/Landing";
import ModeSwitch from './components/shared/ModeSwitch'

// import { useAppSelector } from "./redux/hooks";
// import { darkTheme, lightTheme } from "./styles/theme";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  // const theme = useAppSelector((state) => state.theme);
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    console.log("theme changed");
    setTheme((prev) =>
      prev === "light" ? setTheme("dark") : setTheme("light")
    );
  };

  return (
    // <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>  {/* //  </ThemeProvider> */}
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
          </Routes>
        </StyledApp>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
