import {Box, Grid } from "@mui/material";
import React from "react";
import Trending from "../components/Trending";
import Features from "../components/Features";
import Hero from "../components/Hero";

const Landing = () => {
  return (
    <Box p={10} mx={20}>
      <Grid container rowGap={12}>
        <Hero />
        <Trending />
        <Features />
      </Grid>
    </Box>
  );
};

export default Landing;
