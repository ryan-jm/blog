import React from 'react';
import MOCK_DATA from './mock';
import { CardMedia,CardContent,Typography,Card } from '@mui/material';
import { StyledCard,StyledTypography,StyledBox} from './trending.style';

const Trending = () => {
  return <>
          <h3>TRENDING</h3>
          <StyledBox>
          {MOCK_DATA.map(item=>{
              return <StyledCard key={item.article_id} elevation={0}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.article_img}
                    alt="img"
                  />
                  <CardContent >
                      <h4>{item.title}</h4>
                    <StyledTypography variant="body2" color="text.secondary">
                        {item.article_body}
                    </StyledTypography>
                    <Typography variant="caption">
                        {item.created_at}
                    </Typography>
                  </CardContent>
                </StyledCard>
          })}
          </StyledBox>
  </>;
};

export default Trending;
