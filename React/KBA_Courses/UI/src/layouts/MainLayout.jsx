import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = ({children}) => {
  return (
   <>
    <Navbar />
    <Outlet />
    {/* <main>{children}</main> */}
   </>
  )
}

export default MainLayout