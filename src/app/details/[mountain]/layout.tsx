'use client'
import { mountainItem } from '@/components/constants/mountain-item'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface props {
  params: { mountain: string }
}

interface MountainType {
  name: string
  details: string
  height: string
  location: string
  image: string
}

function decodeName(name: string) {
  return decodeURIComponent(name)
}

function setMountain(mountainName: string) {
  const [mountain, setMountain] = useState<MountainType | undefined>()

  useEffect(() => {
    mountainName = decodeName(mountainName)

    if (mountainName) {
      const foundMountain = mountainItem.find(
        (item) => item.name === String(mountainName)
      )
      setMountain(foundMountain)
    }
  }, [mountainName])

  return mountain
}

export default function MountainDetail({ params }: props) {
  const mountain = setMountain(params.mountain)

  return (
    <div className="bg-white text-black px-4 sm:px-12 md:px-20 lg:px-24 xl:px-32 py-24">
      <div className="flex gap-32">
        <div className="w-1/2">
          <p className="text-5xl font-bold">{mountain?.name}</p>
          <div className="py-12">
            <p className="text-2xl font-bold">Letak</p>
            <p className="text-xl">{mountain?.location}</p>
            <p className="text-2xl font-bold">Tinggi</p>
            <p className="text-xl">{mountain?.height}</p>
          </div>
          <div className="text-justify py-4">
            <p>{mountain?.details}</p>
          </div>
        </div>
        <div className="w-1/2">
          {mountain?.image && (
            <Image
              src={mountain?.image}
              alt={mountain?.name}
              width={1000}
              height={1000}
              className='rounded-3xl'
            />
          )}
        </div>
      </div>
    </div>
  )
}
