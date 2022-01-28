import React from 'react';
import { Container, Paper } from '@mui/material';
import { Link,useParams } from 'react-router-dom';

const Article = () => {

  const {id} = useParams();
  return <Container sx={{pt:10}}>
                <Link to={"/"}>
              <h4>Go back</h4>
            </Link>
            <Paper>
              <h5>Article body #{id}</h5>
            </Paper>
  </Container>;
};

export default Article;
