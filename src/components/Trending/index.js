import React from "react";
import MOCK_DATA from "./mock";
import { CardContent, Typography, Grid } from "@mui/material";
import "react-multi-carousel/lib/styles.css";

import {
  StyledCard,
  StyledTypography,
  StyledBox,
  StyledLink,
} from "./trending.style";

const Trending = () => {
  // use redux to fetch article data

  return (
<div style={{display:"flex",flexDirection:"column"}}>
      <Typography ml={2} variant="h5"gutterBottom>Trending</Typography>
      <StyledBox>
          {MOCK_DATA.map((item) => {
            return (
              <StyledCard key={item.article_id} elevation={0}>
                <img src={item.article_img} alt="img" />
                <CardContent>
                  <StyledLink to={`/article/${item.article_id}`}>
                    <h4>{item.title}</h4>
                  </StyledLink>

                  <StyledTypography variant="body2" color="text.secondary">
                    {item.article_body}
                  </StyledTypography>
                  <Typography variant="caption">{item.created_at}</Typography>
                </CardContent>
              </StyledCard>
            );
          })}
      </StyledBox>
      </div>
  );
};

export default Trending;
