import { Typography } from '@mui/material';
import React from 'react';

import Features from '../components/Features';
import Hero from '../components/Hero';

const Landing = () => {
  return (
    <>
      <Hero />
      <Features>
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
      </Features>
    </>
  );
};

export default Landing;
