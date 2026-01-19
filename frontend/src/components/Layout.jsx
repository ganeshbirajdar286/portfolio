import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'


function Layout() {
  return (
    <>
      <Navbar/>
      <Outlet></Outlet>
      
    </>
  )
}

export default Layout
