import React from 'react';
import { Header } from '../organisms';

export interface LayoutProps {
  children: any;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

export default Layout;
