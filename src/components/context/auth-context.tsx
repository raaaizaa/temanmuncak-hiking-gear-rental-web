'use client'
import { ReactNode, createContext, useState, useEffect } from 'react'

export const AuthContext = createContext({
  isAuthenticated: false,
  authLogin: () => {},
  authLogout: () => {},
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setAuthenticated] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('isAuthenticated') === 'true' || false
    }
    return false
  })

  const authLogin = () => {
    setAuthenticated(true)
  }

  const authLogout = () => {
    setAuthenticated(false)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('isAuthenticated', String(isAuthenticated))
    }
  }, [isAuthenticated])

  return (
    <AuthContext.Provider value={{ isAuthenticated, authLogin, authLogout }}>
      {children}
    </AuthContext.Provider>
  )
}
