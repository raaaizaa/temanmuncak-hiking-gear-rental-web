'use client'
import { mountainItem } from '@/components/constants/mountain-item'
import MountainCard from '@/components/ui/mountain-card/mountain-card'
import React from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { motion } from 'framer-motion'

export default function MountainGrid() {
  return (
    <div className="w-full  bg-white py-24" id="mountain-list">
      <div className="flex justify-center items-center text-center px-4 lg:px-0 xl:px-0 pb-12">
        <p className="text-xl lg:text-2xl xl:text-3xl">
          Kami menyediakan layanan peminjaman pada gunung berikut:
        </p>
      </div>
      <div className="flex justify-center items-center">
        <NextUIProvider>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 xl:gap-16">
            {mountainItem.map((data, index) => (
              <MountainCard
                key={index}
                name={data.name}
                location={data.location}
                image={data.image}
              />
            ))}
          </div>
        </NextUIProvider>
      </div>
    </div>
  )
}
