import React from "react";
import MOCK_DATA from "./mock";
import { CardMedia, CardContent, Typography, Grid } from "@mui/material";
import {
  StyledCard,
  StyledTypography,
  StyledBox,
  StyledLink,
} from "./trending.style";

const Trending = () => {
  // use redux to fetch article data

  return (
    <Grid container width="100%">
      <Typography variant="h6">Trending</Typography>
      <StyledBox>
        {MOCK_DATA.map((item) => {
          return (
            <StyledLink to={`/article/${item.article_id}`}>
              <StyledCard key={item.article_id} elevation={0}>
                <img src={item.article_img} alt="img" />
                <CardContent>
                  <h4>{item.title}</h4>

                  <StyledTypography variant="body2" color="text.secondary">
                    {item.article_body}
                  </StyledTypography>
                  <Typography variant="caption">{item.created_at}</Typography>
                </CardContent>
              </StyledCard>
            </StyledLink>
          );
        })}
      </StyledBox>
    </Grid>
  );
};

export default Trending;
