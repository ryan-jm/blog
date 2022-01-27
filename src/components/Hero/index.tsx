import { Box, Grid, Typography } from "@mui/material";
import * as React from "react";

import { useAppSelector } from "../../redux/hooks";

const Hero = () => {
  const logoPath = useAppSelector((state) => state.theme.logo);

  return (
    <Box>
      <Grid
        container
        spacing={6}
        width="100vw"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        p={14}
        sx={{ overflow: "hidden" }}
      >
        <Box
          width="50%"
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Typography fontSize="2rem" maxWidth="800px" fontWeight={300}>
            Lorem ipsum dolor sit amet, <b>consectetur</b> adipiscing elit.
            Vestibulum feugiat <b>purus</b>, sit amet dapibus odio maximus{" "}
            <b>suscipit.</b>
          </Typography>
        </Box>

        <Box
          width="50%"
          sx={{ maxWidth: "800px", display: "flex", justifyContent: "center" }}
        >
          <img src="/hero.svg" alt="hero" width="70%" />
        </Box>
      </Grid>
    </Box>
  );
};

export default Hero;
