import React from 'react'
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import { Outlet } from 'react-router-dom'

const dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className='flex'>
      <Sidebar />
      <Outlet />

      </div>
    </div>
  )
}

export default dashboard
