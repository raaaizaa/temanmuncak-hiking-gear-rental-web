'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { Input, Button, NextUIProvider } from '@nextui-org/react'
import Link from 'next/link'
import { register } from '@/utils/register'
import { useRouter } from 'next/router'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = () => {
    const email = (document.getElementById('email') as HTMLInputElement)?.value
    setEmail(email)

    const password = (document.getElementById('password') as HTMLInputElement)
      ?.value
    setPassword(password)

    const confirmPassword = (
      document.getElementById('confirmPassword') as HTMLInputElement
    )?.value

    if (register(email, password, confirmPassword) == true) {
      // useRouter().push('/login')
      console.log('yes bisa register yes')
    }
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
        <div className="block text-black bg-white w-fit lg:w-[650px] xl:w-[650px] rounded-3xl">
          <NextUIProvider>
            <div className="py-12 px-2">
              <p className="text-center font-bold text-3xl lg:text-4xl xl:text-4xl">
                Register
              </p>
              <div className="py-4 md:py-6 lg:py-12 xl:py-12 px-8 md:px-12 lg:px-16 xl:px-16 space-y-8">
                <Input variant="faded" type="email" label="Email" id="email" />
                <Input
                  variant="faded"
                  type="password"
                  label="Password"
                  id="password"
                />
                <Input
                  variant="faded"
                  type="password"
                  label="Confirm Password"
                  id="confirmPassword"
                />
                <div>
                  <Link href="/login">
                    <p className="text-end hover:underline text-xs">
                      Already have an account? Login Here
                    </p>
                  </Link>
                </div>
                <Button
                  className="bg-[#3F6C29] text-white w-full py-8 font-bold"
                  onClick={handleRegister}>
                  Register
                </Button>
              </div>
            </div>
          </NextUIProvider>
        </div>
      </div>
    </div>
  )
}
