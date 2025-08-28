import React from 'react'
import Navbar from './components/Navigation/Navgation'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Navbar />
      <div className="layout" style={{background: "#f6f7f876"}}>
        <main className="main-content">
            <Outlet />
        </main>
        <Footer />
    </div>
    </>
  )
}

export default Layout