import { Box, Grid, Typography } from '@mui/material';
import * as React from 'react';

import { useAppSelector } from '../../redux/hooks';

const Hero = () => {
  const logoPath = useAppSelector((state) => state.theme.logo);

  return (
    <Box>
      <Grid
        container
        spacing={8}
        width="100%"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        p={32}
      >
        <Typography variant="h4" component="h4">
          Lorem ipsum dolor sit amet, <b>consectetur</b>
          <br />
          adipiscing elit. Vestibulum feugiat purus <b>urna</b>,
          <br />
          sit amet dapibus odio maximus <b>suscipit</b>.
        </Typography>

        <img src={logoPath} alt="logo" width="30%" />
      </Grid>
    </Box>
  );
};

export default Hero;
