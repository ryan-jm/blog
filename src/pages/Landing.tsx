import { Typography, Container, Grid } from "@mui/material";
import React from "react";
import Trending from "../components/Trending";
import Features from "../components/Features";
import Hero from "../components/Hero";

const Landing = () => {
  return (
    <Container>
      <Grid container rowGap={14}>
        <Hero />
        <Trending />
        <Features />
      </Grid>
    </Container>
  );
};

export default Landing;
