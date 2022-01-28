import React from "react";
import { Container, Paper } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import MOCK_DATA from "../components/Trending/mock";

const Article = () => {
  
  const { id } = useParams();
  const articleData = MOCK_DATA[id];
  console.log(articleData);

  return (
    <Container sx={{ pt: 10 }}>
      <Link to={"/"}>
        <h4>Go back</h4>
      </Link>
      <Paper>
        <h5>Article body #{id}</h5>
      </Paper>
    </Container>
  );
};

export default Article;
