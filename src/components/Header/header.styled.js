// import { styled } from '@mui/material/styles';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Toolbar } from '@mui/material';
import { Button } from '@mui/material';

export const StyledLink = styled(Link)`
text-decoration:none,
maring-right:2rem;
h4{
    color:#212121;
    text-decoration:none,
}
`
export const StyledToolbar = styled(Toolbar)`
display:flex;
background:#eee;
justify-content:space-between;
align-items:center;
color:#212121;
padding:0.2rem 4rem;
`

export const StyledButton = styled(Button)`
height:2.5rem;
padding:0 1.5rem;
background:#212121;
color:#fff;

`