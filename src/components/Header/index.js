import { AppBar, Stack } from "@mui/material";
import React from "react";

import { useAppSelector } from "../../redux/hooks";
import { StyledButton, StyledLink, StyledToolbar } from "./header.styled";

const Header = () => {
  const logoPath = useAppSelector((state) => state.theme.logo);

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
            <StyledLink to={"/article/:id"}>
              <h4>Article</h4>
            </StyledLink>
            <StyledLink to={"/"}>
              <h4>Create</h4>
            </StyledLink>
          </Stack>
        </div>

        <StyledButton variant="outline">Login</StyledButton>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
