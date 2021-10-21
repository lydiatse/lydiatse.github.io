import React from 'react';
import { Grid, Typography } from '@mui/material';
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
          <img src={heroPic} alt="Photo of Lydia" style={{ width: '30rem' }} />
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
