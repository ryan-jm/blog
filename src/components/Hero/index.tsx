import { Box, Grid, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Box width="100%" mt={20} mx="auto">
      <Grid
        container
        spacing={6}
        direction="row"
        alignItems="center"
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
          sx={{
            maxWidth: "800px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <img src="/hero.svg" alt="hero" width="70%" />
        </Box>
      </Grid>
    </Box>
  );
};

export default Hero;
