import React from 'react'
import {Header, Navbar, Footer} from './';


const Layout = ({ children }) => {
  return (
    <>
        <Header />
        <Navbar />
        
        {children}
        <Footer />
    </>
  )
}

export default Layout