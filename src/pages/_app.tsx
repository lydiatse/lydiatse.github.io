import React from 'react';
import { AppProps } from 'next/app';
import '@fontsource/fira-code/400.css';
import '@fontsource/cabin/400.css';
import { ThemeProvider } from '@mui/material';
import { theme } from '../styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
