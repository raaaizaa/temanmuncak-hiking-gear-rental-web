import NavbarFooter from '@/components/ui/navigation-bar-footer/navbar-footer'
import React from 'react'

interface props {
  children: React.ReactNode
}

export default function Layout({ children }: props) {
  return <NavbarFooter>{children}</NavbarFooter>
}
