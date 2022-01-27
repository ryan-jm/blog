import { Container, Grid } from '@mui/material';
import * as React from 'react';

interface FeatureProps {
  children: React.ReactNode[];
}

interface FeatureCardProps {
  first: React.ReactNode;
  second: React.ReactNode;
}

const FeatureCard = ({ first, second }: FeatureCardProps) => {
  return (
    <Grid container justifyContent="center">
      <Grid item md={6}>
        {first}
      </Grid>
      <Grid item md={6}>
        {second}
      </Grid>
    </Grid>
  );
};

const Features = ({ children }: FeatureProps) => {
  return (
    <Container>
      {children.map((child, index) => {
        if (index % 2 === 0) {
          return <FeatureCard first={child} second={children[index + 1]} />;
        } else {
          return null;
        }
      })}
    </Container>
  );
};

export default Features;
