import { Typography, Container } from "@mui/material";
import React from "react";
import Trending from "../components/Trending";
import Features from "../components/Features";
import Hero from "../components/Hero";

const Landing = () => {
  return (
    <Container>
      <Hero />
      <Trending />
      <Features />
    </Container>
  );
};

export default Landing;
