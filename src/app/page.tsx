import { Grid, Typography } from '@mui/material';
import heroPic from '../../public/hero.png';
import Image from 'next/image';

export default function Home() {
  return (
    <Grid
      container
      alignItems="center"
      alignContent="center"
      justifyContent="center"
      spacing={8}
    >
      <Grid item sm={5}>
        <Image
          src={heroPic}
          style={{
            width: '100%',
            height: 'auto',
          }}
          alt="Lydia at the Grace Hopper Conference"
        />
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
  );
}
