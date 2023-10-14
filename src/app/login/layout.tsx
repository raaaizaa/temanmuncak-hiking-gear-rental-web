'use client'
import Image from 'next/image'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Input, Button, NextUIProvider } from '@nextui-org/react'
import Link from 'next/link'
import { Login } from '@/utils/auth'
import { AuthContext } from '@/components/context/auth-context'

export default function LoginPage() {
const loggingIn = useContext(AuthContext).authLogin
  const emailRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleLogin = () => {
    const email = emailRef.current?.value
    const password = passwordRef.current?.value

    if (Login(email, password) == true) {
      loggingIn()
      window.location.replace('/')
    }else{
      setError(true)
      setErrorMessage('Invalid Account!')
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
          <p className="text-center font-light text-white">Login</p>
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
        </div>
        <div className="flex justify-end">
          <Link href="/register">
            <p className="text-sm hover:underline">Did not have an account yet?</p>
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <Button
            variant="bordered"
            className="hover:bg-white hover:text-[#3F6C29] bg-[#3F6C29] text-white w-fullfont-bold w-full"
            onClick={handleLogin}>
            Login
          </Button>
        </div>
      </div>
    </div>
  )
}
