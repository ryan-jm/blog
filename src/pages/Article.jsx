import React from "react";
import { Grid, Container, Box, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import MOCK_DATA from "../components/Trending/mock";
import { StyledContainer } from './article.styled';

const Article = () => {
  const { id } = useParams();
  const articleData = MOCK_DATA[id];
  console.log(articleData);

  return (
    <StyledContainer>
      <Link to={"/"}>
        <h4>Go back</h4>
      </Link>
      <Grid item>
          <h2>{articleData.title}</h2>
        </Grid>
      <Grid container spacing={2}>
        <Grid item>
          <img src={articleData.article_img} alt="img" />
        </Grid>
        <Grid item>
          <Box>
            <Typography variant="h6">{articleData.article_body}</Typography>
            </Box>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default Article;
