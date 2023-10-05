'use client'
import Image from 'next/image'
import React from 'react'
import { Input, Button, NextUIProvider } from '@nextui-org/react'
import Link from 'next/link'

export default function LoginPage() {
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
                  <Input variant="faded" type="email" label="Email" />
                  <Input variant="faded" type="password" label="Password" />
                  <div>
                    <Link href="/register">
                      <p className="text-end hover:underline text-xs">
                        Don't have an account yet? Register Here
                      </p>
                    </Link>
                  </div>
                  <Button className="bg-[#3F6C29] text-white w-full py-8 font-bold">
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
