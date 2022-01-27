import { Container, Grid, Typography, Box } from "@mui/material";
import type { ResponsiveStyleValue } from "@mui/system/styleFunctionSx";
import * as React from "react";

interface FeatureImageProps {
  src: string;
  alt: string;
  width?: string;
}

interface FeatureTextProps {
  children: React.ReactNode[] | React.ReactNode;
  id?: string;
  textAlign?: "justify" | "center" | "left" | "right";
}

const FeatureText = ({ children, textAlign = "left" }: FeatureTextProps) => {
  return (
    <Box width="100%" sx={{ textAlign }}>
      <Typography variant="h6">{children}</Typography>
    </Box>
  );
};

const FeatureImage = ({ src, alt, width = "100%" }: FeatureImageProps) => {
  return (
    <Box sx={{ maxWidth: width }}>
      <img src={src} width={width} alt={alt} />
    </Box>
  );
};

const Features = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      spacing={12}
      width="100%"
    >
      <Grid item md={6}>
        <FeatureText textAlign="justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          feugiat purus urna, sit amet dapibus odio maximus suscipit. Nam
          vestibulum, sem ut facilisis ullamcorper, lorem risus mollis risus, a
          maximus nisl sapien vitae justo.
        </FeatureText>
      </Grid>
      <Grid item md={4}>
        <FeatureImage src="/feature-1.svg" alt="feature one" />
      </Grid>
      <Grid item md={4}>
        <FeatureImage src="/feature-2.svg" alt="feature two" width="100%" />
      </Grid>
      <Grid item md={8}>
        <FeatureText textAlign="justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          feugiat purus urna, sit amet dapibus odio maximus suscipit. Nam
          vestibulum, sem ut facilisis ullamcorper, lorem risus mollis risus, a
          maximus nisl sapien vitae justo.
        </FeatureText>
      </Grid>
    </Grid>
  );
};

export default Features;
