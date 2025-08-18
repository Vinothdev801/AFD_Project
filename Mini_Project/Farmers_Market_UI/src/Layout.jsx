import React from 'react'
import Navbar from './components/Navigation/Navgation'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Navbar />
      <div className="layout">
        <main className="main-content">
            <Outlet /> {/* page content */}
        </main>
        <Footer /> {/* always at bottom */}
    </div>
    </>
  )
}

export default Layout