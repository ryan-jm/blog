import React from "react";
import { AppBar, Toolbar, Stack, Button } from "@mui/material";
import { StyledLink, StyledToolbar, StyledButton } from "./header.styled";
const Header = () => {
  return (
    <div>
      <AppBar position="sticky">
        <StyledToolbar className="toolbar">
          <h4>Logo</h4>
          <h4>Search Box </h4>

          <div>
            <Stack direction="row" spacing={2}>
              <StyledLink to="/">
                <h4>Home</h4>
              </StyledLink>
              <StyledLink to={"/article"}>
                <h4>Post</h4>
              </StyledLink>
              <StyledLink to={"/"}>
                <h4>My Page</h4>
              </StyledLink>
            </Stack>
          </div>
          
          <StyledButton variant="outline">Login</StyledButton>
        </StyledToolbar>
      </AppBar>
    </div>
  );
};

export default Header;
