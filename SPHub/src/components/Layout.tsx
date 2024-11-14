import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTheme } from '../hooks/useTheme';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isDark } = useTheme();
  
  return (
    <div className={`min-h-screen flex flex-col ${isDark ? 'dark bg-gray-900' : 'bg-white'}`}>
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}