import React from 'react';
import Image from 'next/image';
import { Box, Grid, Typography } from '@mui/material';
import { Layout } from '../components';
import heroPic from '../../public/hero.png';

export default function Home() {
  return (
    <Layout>
      <Grid
        container
        alignItems="center"
        alignContent="center"
        justifyContent="center"
        spacing={8}
      >
        <Grid item>
          <Box
            sx={{
              height: 500,
              mx: '2rem',
              width: 500,
            }}
          >
            <Image src={heroPic} alt="Photo of Lydia" />
          </Box>
        </Grid>
        <Grid item>
          <Typography variant="h2" component="p">
            Hi there! I&apos;m a
          </Typography>
          <Typography variant="h2" component="p">
            computer scientist,
          </Typography>
          <Typography variant="h2" component="p">
            teacher &amp;
          </Typography>
          <Typography variant="h2" component="p">
            lifelong learner.
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
}
