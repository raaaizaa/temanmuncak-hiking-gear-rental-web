import React, { ReactNode } from 'react'
import Navbar from './navigation-bar/navigation-bar'
import Footer from './footer/footer'

export default function NavbarFooter({children}: {children: ReactNode}) {
  return (
    <div>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}
