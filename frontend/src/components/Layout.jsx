import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { Outlet, useLocation } from 'react-router';
import { useTheme } from '../context/ThemeContext';

function Layout() {
  const { pathname } = useLocation();
  const { isDark } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-black text-white' : 'bg-white text-slate-900'}`}>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
