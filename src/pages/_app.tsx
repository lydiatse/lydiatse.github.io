import React from 'react';
import { AppProps } from 'next/app';
import '@fontsource/cabin/400.css';
import '@fontsource/cabin/700.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
