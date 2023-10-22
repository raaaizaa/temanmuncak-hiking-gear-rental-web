'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export default function Landing() {
  return (
    <div className="h-[calc(100vh-64px)] w-full ">
      <Image
        src="/homepage/bromo.jpg"
        alt="bromo"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
      />
      <div className="absolute w-full text-white px-4 sm:px-12 md:px-20 lg:px-24 xl:px-32 bottom-0 left-0 py-24 bg-gradient-to-t from-black/70 to-transparent">
        <div className="block font-bold text-3xl md:text-4xl lg:text-6xl xl:text-7xl">
          <p>temanmuncak.</p>
          <p>solusi muncak, gak pake ribet.</p>
        </div>
      </div>
    </div>
  )
}
