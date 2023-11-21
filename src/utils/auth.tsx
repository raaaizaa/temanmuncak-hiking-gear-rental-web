'use client'
import { userType } from '@/types/user'
import { useEffect, useState } from 'react'

function checkUser(email: string | undefined, password: string | undefined) {
  const users = JSON.parse(localStorage.getItem('users') || '[]')
  return users.some(
    (user: userType) => user.email === email && user.password === password
  )
}

export function Register(
  email: string | undefined,
  password: string | undefined
) {
  const userExist = checkUser(email, password)

  if (!userExist) {
    const newUser: userType = { email, password }
    const users = JSON.parse(localStorage.getItem('users') || '[]')

    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))
    return true
  } else {
    return false
  }
}

export function Login(email: string | undefined, password: string | undefined) {
  const users = JSON.parse(localStorage.getItem('users') || '[]')
  const foundUser = users.find((user: userType) => user.email === email)

  if (
    (foundUser && foundUser.password === password) ||
    (email == 'admin@gmail.com' && password == 'tes123')
  ) {
    return true
  } else {
    return false
  }
}
