import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';
import { AppBar, IconButton, Stack } from '@mui/material';
import React from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { toggleTheme } from '../../redux/theme/themeSlice';
import { StyledButton, StyledLink, StyledToolbar } from './header.styled';

const Header = () => {
  const logoPath = useAppSelector((state) => state.theme.logo);
  const isDarkMode = useAppSelector((state) => state.theme.darkMode);
  const dispatch = useAppDispatch();

  return (
    <AppBar position="fixed" width="100%">
      <StyledToolbar className="toolbar">
        <img src={logoPath} alt="logo" />
        <h4>Search Box </h4>

        <div>
          <Stack direction="row" spacing={2}>
            <StyledLink to="/">
              <h4>Home</h4>
            </StyledLink>
            <StyledLink to={'/article'}>
              <h4>Post</h4>
            </StyledLink>
            <StyledLink to={'/'}>
              <h4>My Page</h4>
            </StyledLink>
          </Stack>
        </div>

        <StyledButton variant="outline">Login</StyledButton>
        <IconButton
          aria-label="switch-theme"
          size="large"
          onClick={() => dispatch(toggleTheme())}
        >
          {isDarkMode ? (
            <LightModeOutlined fontSize="inherit" />
          ) : (
            <DarkModeOutlined fontSize="inherit" />
          )}
        </IconButton>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
