'use client'
import { mountainItem } from '@/components/constants/mountain-item'
import { packetItem, trekkingItem } from '@/components/constants/trekking-item'
import TrekkingItemCard from '@/components/ui/trekking-item-card/trekking-item-card'
import { Button, Input, NextUIProvider } from '@nextui-org/react'
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

interface itemType {
  name: string
  price: number
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
  const [click, setClick] = useState(false)
  const [clickedItem, setclickedItem] = useState<itemType | undefined>()
  const [counter, setCounter] = useState(0)
  const mountain = setMountain(params.mountain)

  const handleClick = (item: itemType) => {
    setclickedItem(item)
    setClick(!click)
  }

  return (
    <div className="bg-white text-black ">
      <div className="flex-col-reverse flex lg:flex lg:flex-row xl:flex xl:flex-row gap-6 lg:gap-32 xl:gap-32 px-4 sm:px-12 md:px-20 lg:px-24 xl:px-32 py-12 lg:py-24 xl:py-24">
        <div className="w-full lg:w-1/2 xl:w-1/2">
          <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            {mountain?.name}
          </p>
          <div className="py-4 lg:py-12 xl:py-12">
            <p className="text-base lg:text-xl xl:text-2xl font-bold">Letak</p>
            <p className="text-base lg:text-base xl:text-xl">
              {mountain?.location}
            </p>
            <p className="text-base lg:text-xl xl:text-2xl font-bold">Tinggi</p>
            <p className="text-base lg:text-base xl:text-xl">
              {mountain?.height}
            </p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
              {trekkingItem
                .map((data, index) => (
                  <TrekkingItemCard
                    key={index}
                    name={data.name}
                    image={data.image}
                    price={data.price}
                    onClick={() => handleClick(data)}
                  />
                ))
                .slice(0, 4)}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white text-black px-4 sm:px-12 md:px-20 lg:px-24 xl:px-32 py-24">
        <p className="text-3xl text-center pb-12">Barang Lainnya</p>
        <div className="grid grid-cols-5 gap-16">
          {trekkingItem
            .map((data, index) => (
              <TrekkingItemCard
                key={index}
                name={data.name}
                image={data.image}
                price={data.price}
                onClick={() => handleClick(data)}
              />
            ))
            .slice(4, 16)}
        </div>
      </div>
      <div className="bg-[#3F6C29] flex justify-between items-center text-white px-4 sm:px-12 md:px-20 lg:px-24 xl:px-32 py-24">
        <p className="text-3xl font-bold ">Kami juga menjual</p>
        <div className="grid grid-cols-5 gap-6">
          {packetItem.map((data, index) => (
            <TrekkingItemCard
              key={index}
              name={data.name}
              image={data.image}
              price={data.price}
              onClick={() => handleClick(data)}
            />
          ))}
        </div>
      </div>
      {click && (
        <div className="h-screen w-full fixed bg-black/50 top-0 left-0 transition-all duration-200 ease-in flex justify-center items-center">
          <div className="bg-white h-[500px] w-[750px] rounded-3xl z-50 flex">
            <div className="block w-full h-full p-12">
              <p className="text-center text-3xl font-bold">
                Tambah ke Keranjang
              </p>
              <p className="text-center text-xl ">
                Destinasi: {mountain?.name}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {clickedItem?.image && (
                    <Image
                      src={clickedItem?.image}
                      alt={clickedItem?.name}
                      width={150}
                      height={150}
                    />
                  )}
                  <div className="block">
                    <p className="font-bold">{clickedItem?.name}</p>
                    <p>Rp{clickedItem?.price}/hari</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Button
                    className="bg-[#3F6C29] text-white"
                    onClick={() => setCounter(counter > 0 ? counter - 1 : 0)}>
                    -
                  </Button>
                  <input
                    value={counter}
                    onChange={(e) => {
                      const inputValue = parseInt(e.target.value, 10) || 0
                      setCounter(Math.max(0, inputValue))
                    }}
                    className="w-[32px] h-[32px] text-center bg-slate-100 rounded-lg"
                  />
                  <Button
                    className="bg-[#3F6C29] text-white"
                    onClick={() => setCounter(counter + 1)}>
                    +
                  </Button>
                </div>
              </div>
              <div className="space-y-4 items-end pt-12">
                <div className="flex justify-center">
                  <Button className="bg-[#3F6C29] text-white font-bold w-full py-8">
                    Tambah
                  </Button>
                </div>
                <div className="flex justify-center">
                  <Button
                    variant="flat"
                    className=" text-black font-bold w-full py-8"
                    onClick={() => setClick(false)}>
                    Batal
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
