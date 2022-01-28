// import { styled } from '@mui/material/styles';
import styled from "styled-components";
import { Container} from "@mui/material";
import { Link } from "react-router-dom";

export const StyledContainer = styled(Container)`
  padding-top:8rem;
  a{
    font-size:1.2rem;
    text-decoration: none;
    color:#aaa;
    :hover{
        color:#7847ff;
        font-weight:600;
    }
  }
  h2{
      font-size:30px;
  }
  img{
    border-radius:10px;
    margin:5px;
    width:100vh;
    height:260px;
    object-fit:cover;
  }
  div:last-child{
      width:100vh;
  }
  h6{
    text-indent: 2rem;
  }

`;