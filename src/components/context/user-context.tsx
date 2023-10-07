'use client'

// import { createContext, useContext, ReactNode, useState } from 'react'
import React, { useState, useContext, ReactNode } from 'react'

interface User {
  email: string
  password: string
}

interface UserContextProps {
  users: User[]
  addUser: (user: User) => void
}

const UserContext = React.createContext<UserContextProps | undefined>(undefined)

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[]>([])

  const addUser = (user: User) => {
    setUsers([...users, user])
  }

  return (
    <UserContext.Provider value={{ users, addUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
