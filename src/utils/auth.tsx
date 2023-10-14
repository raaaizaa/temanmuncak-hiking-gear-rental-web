'use client'
import { userType } from '@/types/user'
import { useEffect, useState } from 'react'

function checkPassword(password: string, confirmPassword: string) {
  return password === confirmPassword
}

function checkUser(email: string, password: string) {
  const users = JSON.parse(localStorage.getItem('users') || '[]')
  return users.some(
    (user: userType) => user.email === email && user.password === password
  )
}

export function Register(
  email: string,
  password: string,
  confirmPassword: string
) {
  const passwordIsSame = checkPassword(password, confirmPassword)
  const userExist = checkUser(email, password)

  if (passwordIsSame) {
    if (!userExist) {
      const newUser: userType = { email, password }
      const users = JSON.parse(localStorage.getItem('users') || '[]')

      users.push(newUser)
      localStorage.setItem('users', JSON.stringify(users))
      alert('Registration Successful!')
      return true
    } else {
      alert('User already exists!')
      return false
    }
  } else {
    alert('Password does not match!')
    return false
  }
}

export function Login(email: string, password: string) {
  const users = JSON.parse(localStorage.getItem('users') || '[]')
  const foundUser = users.find((user: userType) => user.email === email)

  if (foundUser && foundUser.password === password) {
    alert('Success!')
    return true
  } else {
    alert('Invalid!')
    return false
  }
}
