import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet, useLocation } from 'react-router'

function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar/>
      <Outlet></Outlet>
    </>
  )
}

export default Layout
