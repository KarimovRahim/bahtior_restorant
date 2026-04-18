import React from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '../contexts/ThemeContext';

const Layout = () => {
  return (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  );
};

export default Layout;