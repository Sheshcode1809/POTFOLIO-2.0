import React from 'react';
import { Navigation } from '@/components/Navigation';
// import { Footer } from '@/app/sections/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {children}
      </main>
      {/* <Footer /> */}
    </>
  );
};
