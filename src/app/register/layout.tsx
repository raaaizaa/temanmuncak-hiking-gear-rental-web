'use client'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { Input, Button } from '@nextui-org/react'
import { Register } from '@/utils/auth'
import Link from 'next/link'

export default function RegisterPage() {
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const emailRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)
  const confirmRef = useRef<HTMLInputElement | null>(null)

  function validateEmail(email: string | undefined) {
    if (email) {
      return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+.)+[a-zA-Z]{2,}))$/
      )
    }
    return false
  }

  const handleRegister = () => {
    const email = emailRef.current?.value
    const password = passwordRef.current?.value
    const confirmPassword = confirmRef.current?.value
    localStorage.removeItem('users')

    if (email === '' || password === '' || confirmPassword === '') {
      setError(true)
      setErrorMessage('All fields must be filled!')
    } else if (!validateEmail(email)) {
      setError(true)
      setErrorMessage('Email is not valid!')
    } else if (password !== confirmPassword) {
      setError(true)
      setErrorMessage('Password does not match!')
    } else {
      if (Register(email, password) === true) {
        window.location.replace('/login')
      }else{
        
      }
    }
  }

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-[#3F6C29]">
      <div className="space-y-8 w-[300px]">
        <div>
          <div className="flex justify-center items-center">
            <Image
              src="/logo/temanmuncak.png"
              alt="temanmuncak"
              width={256}
              height={256}
            />
          </div>
          <p className="text-center font-light text-white">Register</p>
        </div>
        <div className="text-sm">
          <Input
            ref={emailRef}
            variant="underlined"
            classNames={{ label: 'text-white' }}
            type="email"
            label="Email"
            isInvalid={error}
            errorMessage={errorMessage}
          />
          <Input
            ref={passwordRef}
            variant="underlined"
            classNames={{ label: 'text-white' }}
            type="password"
            label="Password"
            isInvalid={error}
            errorMessage={errorMessage}
          />
          <Input
            ref={confirmRef}
            label="Confirm Password"
            variant="underlined"
            classNames={{ label: 'text-white' }}
            type="password"
            isInvalid={error}
            errorMessage={errorMessage}
          />
        </div>
        <div className="flex justify-end">
          <Link href="/login">
            <p className="text-sm hover:underline">Already have an account?</p>
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <Button
            variant="bordered"
            className="hover:bg-white hover:text-[#3F6C29] bg-[#3F6C29] text-white w-fullfont-bold w-full"
            onClick={handleRegister}>
            Register
          </Button>
        </div>
      </div>
    </div>
  )
}
