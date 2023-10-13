'use client'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { Input, Button, NextUIProvider } from '@nextui-org/react'
import Link from 'next/link'
import { Login } from '@/utils/auth'
import { AuthContext } from '@/components/context/auth-context'

export default function LoginPage() {
  const isAuthenticated = useContext(AuthContext).isAuthenticated
  const loggingIn = useContext(AuthContext).authLogin

  const handleLogin = () => {
    const email = (document.getElementById('email') as HTMLInputElement)?.value
    const password = (document.getElementById('password') as HTMLInputElement)
      ?.value

    if (Login(email, password) == true) {
      console.log('yes bisa login yes')
      loggingIn()
      window.location.replace('/')
    }
  }

  if (isAuthenticated) {
    window.location.replace('/')
  }

  return (
    <div className="h-[100vh] w-full ">
      <div className="opacity-90 fill-black">
        <Image
          src="/homepage/bromo.jpg"
          alt="bromo"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
        />
      </div>
      <div className="absolute w-full h-full flex justify-center items-center">
        <div className="block text-black bg-white w-fit h-fit lg:w-[650px] lg:h-[500px] xl:w-[650px] xl:h-[500px] rounded-3xl">
          <NextUIProvider>
            <div className="py-6 px-0 lg:py-12 lg:px-2 xl:py-12 xl:px-2">
              <p className="text-center font-bold text-3xl lg:text-4xl xl:text-4xl">
                Login
              </p>
              <div className="py-4 md:py-6 lg:py-12 xl:py-12 px-4 md:px-12 lg:px-16 xl:px-16 space-y-8">
                <div className="px-6 py-4 lg:py-12 lg:px-16 xl:py-12 xl:px-16 space-y-8">
                  <Input
                    variant="faded"
                    type="email"
                    label="Email"
                    id="email"
                  />
                  <Input
                    variant="faded"
                    type="password"
                    label="Password"
                    id="password"
                  />
                  <div>
                    <Link href="/register">
                      <p className="text-end hover:underline text-xs">
                        Do not have an account yet? Register Here
                      </p>
                    </Link>
                  </div>
                  <Button
                    className="bg-[#3F6C29] text-white w-full py-8 font-bold"
                    onClick={handleLogin}>
                    Login
                  </Button>
                </div>
              </div>
            </div>
          </NextUIProvider>
        </div>
      </div>
    </div>
  )
}
