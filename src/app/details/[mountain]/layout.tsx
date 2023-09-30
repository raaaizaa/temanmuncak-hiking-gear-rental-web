'use client'
import { mountainItem } from '@/components/constants/mountain-item'
import TrekkingItemCard from '@/components/ui/trekking-item-card/trekking-item-card'
import { NextUIProvider } from '@nextui-org/react'
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
    <div className="bg-white text-black ">
      <div className="flex-col-reverse flex lg:flex lg:flex-row xl:flex xl:flex-row gap-6 lg:gap-32 xl:gap-32 px-4 sm:px-12 md:px-20 lg:px-24 xl:px-32 py-12 lg:py-24 xl:py-24">
        <div className="w-full lg:w-1/2 xl:w-1/2">
          <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">{mountain?.name}</p>
          <div className="py-4 lg:py-12 xl:py-12">
            <p className="text-base lg:text-xl xl:text-2xl font-bold">Letak</p>
            <p className="text-base lg:text-base xl:text-xl">{mountain?.location}</p>
            <p className="text-base lg:text-xl xl:text-2xl font-bold">Tinggi</p>
            <p className="text-base lg:text-base xl:text-xl">{mountain?.height}</p>
          </div>
          <div className="text-justify py-4">
            <p>{mountain?.details}</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 xl:w-1/2">
          {mountain?.image && (
            <Image
              src={mountain?.image}
              alt={mountain?.name}
              width={1000}
              height={1000}
              className="rounded-3xl"
            />
          )}
        </div>
      </div>
      <div>
        <div className="bg-[#3F6C29] text-white px-4 sm:px-12 md:px-20 lg:px-24 xl:px-32 py-24">
          <p className="text-3xl font-bold text-center pb-12">
            Paling Sering Dipinjam
          </p>
          <div className="flex justify-center items-center">
            <NextUIProvider>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
                <TrekkingItemCard name="Tenda" price={15000} image="" />
                <TrekkingItemCard name="Tenda" price={15000} image="" />
                <TrekkingItemCard name="Tenda" price={15000} image="" />
                <TrekkingItemCard name="Tenda" price={15000} image="" />
              </div>
            </NextUIProvider>
          </div>
        </div>
      </div>
      {/* <div className="bg-white text-black px-4 sm:px-12 md:px-20 lg:px-24 xl:px-32 py-24">
        <p className="text-3xl text-center pb-12">Barang Lainnya</p>
        <NextUIProvider>
          <div className="grid grid-cols-5 gap-16">
            <TrekkingItemCard name="Tenda" price={15000} image="" />
            <TrekkingItemCard name="Tenda" price={15000} image="" />
            <TrekkingItemCard name="Tenda" price={15000} image="" />
            <TrekkingItemCard name="Tenda" price={15000} image="" />
            <TrekkingItemCard name="Tenda" price={15000} image="" />
            <TrekkingItemCard name="Tenda" price={15000} image="" />
            <TrekkingItemCard name="Tenda" price={15000} image="" />
            <TrekkingItemCard name="Tenda" price={15000} image="" />
            <TrekkingItemCard name="Tenda" price={15000} image="" />
            <TrekkingItemCard name="Tenda" price={15000} image="" />
            <TrekkingItemCard name="Tenda" price={15000} image="" />
            <TrekkingItemCard name="Tenda" price={15000} image="" />
            <TrekkingItemCard name="Tenda" price={15000} image="" />
            <TrekkingItemCard name="Tenda" price={15000} image="" />
            <TrekkingItemCard name="Tenda" price={15000} image="" />
          </div>
        </NextUIProvider>
      </div> */}
    </div>
  )
}
