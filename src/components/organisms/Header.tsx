import React from 'react';
import { Divider, Grid, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconLink } from '../atoms';

export function Header() {
  return (
    <>
      <header style={{ margin: '1.5rem', padding: '0 1.5rem' }}>
        <Grid
          alignItems="center"
          alignContent="center"
          container
          spacing={2}
          direction="row"
          justifyContent="space-between"
        >
          <Grid item xs={9}>
            <Typography variant="h2" component="h1">
              &lt;Lydia Tse/&gt;
            </Typography>
          </Grid>
          <Grid
            alignItems="center"
            alignContent="center"
            item
            container
            xs={3}
            justifyContent="flex-end"
            spacing={4}
          >
            <Grid item>
              <IconLink
                href="https://github.com/lydiatse"
                icon={<GitHubIcon sx={{ fontSize: 40 }} />}
                text="GitHub"
              />
            </Grid>
            <Grid item>
              <IconLink
                href="https://www.linkedin.com/in/lydiatse/"
                icon={<LinkedInIcon sx={{ fontSize: 40 }} />}
                text="LinkedIn"
              />
            </Grid>
          </Grid>
        </Grid>
      </header>
      <Divider light sx={{ marginBottom: '5rem' }} />
    </>
  );
}

export default Header;
