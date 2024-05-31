'use client';
import { ThemeProvider } from '@mui/material';
import { Header } from '../organisms';
import { theme } from '../../styles';
import '@fontsource/cabin/400.css';

export interface LayoutProps {
  children: any;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <main>{children}</main>
      </ThemeProvider>
    </>
  );
}

export default Layout;
