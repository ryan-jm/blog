import { AppBar, Stack } from "@mui/material";

import { useAppSelector } from "../../redux/hooks";
import { StyledButton, StyledLink, StyledToolbar } from "./header.styled";

const Header = () => {
  const logoPath = useAppSelector((state) => state.theme.logo);

  return (
    <AppBar position="fixed" width="100%">
      <StyledToolbar className="toolbar">
        <img src={logoPath} alt="logo" />
          <Stack direction="row" spacing={2}>
            <StyledLink to="/">
              <h4>Home</h4>
            </StyledLink>
            <StyledLink to={"/article/1"}>
              <h4>Article</h4>
            </StyledLink>
            <StyledLink to={"/"}>
              <h4>Create</h4>
            </StyledLink>
          </Stack>
          <StyledButton>Login</StyledButton>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
