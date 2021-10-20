import { Box, Grid, Typography } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import { Layout } from '../components';

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
              backgroundColor: '#7299db',
              borderRadius: '50%',
              height: 500,
              mx: '2rem',
              width: 500,
            }}
          >
            <Image src="/hero.png" alt="me" width="200" height="300" />
          </Box>
        </Grid>
        <Grid item>
          <Typography variant="h2">Hi there, I'm a</Typography>
          <Typography variant="h2">Computer Scientist,</Typography>
          <Typography variant="h2">Teacher &amp;</Typography>
          <Typography variant="h2">Lifelong Learner.</Typography>
        </Grid>
      </Grid>
    </Layout>
  );
}
