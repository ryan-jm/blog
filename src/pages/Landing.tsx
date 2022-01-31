import {Container, Grid } from "@mui/material";
import React from "react";
import Trending from "../components/Trending";
import Features from "../components/Features";
import Hero from "../components/Hero";

const Landing = () => {
  return (
    <Container sx={{mt:10}}>
      <Grid direction="column"
  justifyContent="center"
  alignItems="center" spacing={8} container >
        <Hero />
        <Trending />
        <Features />
      </Grid>
    </Container>
  );
};

export default Landing;
