// import { styled } from '@mui/material/styles';
import { Button, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  font-family: "Manrope", sans-serif;
  text-decoration: none;
  maring-right: 2rem;
  h4 {
    color: #212121;
    text-decoration: none;
  }
`;
export const StyledToolbar = styled(Toolbar)`
  display: flex;
  font-family: "Manrope", sans-serif;
  background: #eee;
  justify-content: space-between;
  align-items: center;
  color: #212121;
  padding: 0.2rem 4rem;
`;

export const StyledButton = styled(Button)`
  font-family: "Manrope", sans-serif;
  height: 2.5rem;
  padding: 0 1.5rem;
  background: #212121;
  color: #fff;
`;
