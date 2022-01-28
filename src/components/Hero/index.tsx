import { Box, Grid, Typography, Button } from "@mui/material";

const Hero = () => {
  return (
    <Box width="100%" mt={20}>
      <Grid
        container
        spacing={6}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        justifyItems="space-between"
      >
        <Box
          width="50%"
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            justifyItems: "space-between",
            flexDirection: "column",
          }}
        >
          <Typography fontSize="2rem" maxWidth="800px" fontWeight={300}>
            Lorem ipsum dolor sit amet, <b>consectetur</b> adipiscing elit.
            Vestibulum feugiat <b>purus</b>, sit amet dapibus odio maximus{" "}
            <b>suscipit.</b>
          </Typography>
          <br />
          <Button
            variant="outlined"
            disableElevation
            color="primary"
            sx={{
              width: "8rem",
              alignSelf: "center",
            }}
          >
            Get Started
          </Button>
        </Box>

        <Box
          width="40%"
          sx={{
            position: "relative",
            maxWidth: "100%",
            display: "flex",
            justifyContent: "flex-start",
            justifyItems: "space-between",
          }}
        >
          <img src="public/hero.svg" alt="hero" width="120%" />
        </Box>
      </Grid>
    </Box>
  );
};

export default Hero;
