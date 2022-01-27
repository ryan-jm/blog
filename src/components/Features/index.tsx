import { Container, Grid, Typography, Box } from "@mui/material";
import * as React from "react";

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

const Features = () => {
  return (
    <Container>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        spacing={12}
      >
        <Grid item md={6}>
          <Typography variant="h6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            feugiat purus urna, sit amet dapibus odio maximus suscipit. Nam
            vestibulum, sem ut facilisis ullamcorper, lorem risus mollis risus,
            a maximus nisl sapien vitae justo.
          </Typography>
        </Grid>
        <Grid item md={4}>
          <Box sx={{ maxWidth: "100%" }}>
            <img src="/feature-1.svg" alt="feature one" width="100%" />
          </Box>
        </Grid>
        <Grid item md={4}>
          <Box sx={{ maxWidth: "100%" }}>
            <img src="/feature-2.svg" alt="feature two" width="100%" />
          </Box>
        </Grid>
        <Grid item md={8}>
          <Typography variant="h6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            feugiat purus urna, sit amet dapibus odio maximus suscipit. Nam
            vestibulum, sem ut facilisis ullamcorper, lorem risus mollis risus,
            a maximus nisl sapien vitae justo.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Features;

/*
<Typography variant="h5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          feugiat purus urna, sit amet dapibus odio maximus suscipit. Nam
          vestibulum, sem ut facilisis ullamcorper, lorem risus mollis risus, a
          maximus nisl sapien vitae justo. Donec tempor mi odio, sit amet
          accumsan elit cursus et. Etiam metus mi, ultrices sed velit ut,
          ullamcorper efficitur augue. Duis eu massa quis sem commodo sagittis.
          Suspendisse lorem orci, accumsan nec consequat nec, tincidunt nec sem.
          Aliquam eu nibh ligula. Duis convallis, urna at pellentesque interdum,
          quam massa fermentum mi, et ornare neque ex scelerisque dui.
          Pellentesque ac lectus sodales, interdum nisi at, aliquet libero.{' '}
        </Typography>
        <img src="http://placehold.it/300x300" alt="placeholder" />
*/
