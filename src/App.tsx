import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';

import { useAppSelector } from './redux/hooks';
import { darkTheme, lightTheme } from './styles/theme';

function App() {
  const theme = useAppSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
      <div className="App">
        <Container>
          {/* 
          
          <Hero />
          <Trending />
          <Features> 
            <p> This is a feature </p> <img src="displaying the feature" />
          </Features>
          
          */}
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
