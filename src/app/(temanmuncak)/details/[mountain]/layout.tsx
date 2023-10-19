'use client'
import { mountainItem } from '@/components/constants/mountain-item'
import { packetItem, trekkingItem } from '@/components/constants/trekking-item'
import Confirmation from '@/components/templates/details/confirmation'
import TourGuideConfirmation from '@/components/templates/details/tourguide-confirmation'
import Error from '@/components/ui/error/error'
import Success from '@/components/ui/success/success'
import TourGuideCard from '@/components/ui/tour-guide-card/tour-guide-card'
import TrekkingItemCard from '@/components/ui/trekking-item-card/trekking-item-card'
import { partialItemType } from '@/types/item'
import { AddTourGuide } from '@/utils/item-handler'
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

export default function MountainDetail({ params }: props) {
  const [click, setClick] = useState(false)
  const [clickedItem, setclickedItem] = useState<partialItemType>()
  const [tourGuideConfirmation, setTourGuideConfirmation] = useState(Boolean)
  const [mountain, setMountain] = useState<MountainType | undefined>()
  const mountainName = decodeName(params.mountain)
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (mountainName) {
      const foundMountain = mountainItem.find(
        (item) => item.name === String(mountainName)
      )
      setMountain(foundMountain)
    }
  }, [mountainName])

  const handleItem = (item: partialItemType) => {
    setclickedItem(item)
    setClick(!click)
  }

  const handleTourGuide = () => {
    setTourGuideConfirmation(!tourGuideConfirmation)
  }

  const handleSuccess = () => {
    setTourGuideConfirmation(false)
    setSuccess(false)
    setMessage('')
  }

  const addTourGuide = () => {
    if (AddTourGuide(mountainName)) {
      setSuccess(true)
      setMessage('Tour Guide berhasil ditambahkan!')
    } else {
      setSuccess(false)
      setMessage('Gagal!')
    }
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
                    id={data.id}
                    type={data.type}
                    onClick={() => handleItem(data)}
                  />
                ))
                .slice(0, 4)}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-16 bg-slate-100 w-full h-fit text-black px-4 sm:px-12 md:px-20 lg:px-20 xl:px-28 py-24">
        <p className="text-3xl">
          Butuh tour guide untuk memandu perjalanan anda?
        </p>
        <div className="flex justify-center items-center">
          <TourGuideCard onClick={handleTourGuide} />
        </div>
      </div>
      <div className="flex items-center justify-center bg-white text-black px-4 sm:px-12 md:px-20 lg:px-20 xl:px-28 py-24">
        <div>
          <p className="text-3xl text-center pb-12">Barang Lainnya</p>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-16">
            {trekkingItem
              .map((data, index) => (
                <TrekkingItemCard
                  key={index}
                  id={data.id}
                  type={data.type}
                  name={data.name}
                  image={data.image}
                  price={data.price}
                  onClick={() => handleItem(data)}
                />
              ))
              .slice(4, 16)}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-[#3F6C29]">
        <div className=" lg:flex lg:justify-between lg:items-center xl:flex xl:justify-between xl:items-center text-white px-4 sm:px-12 md:px-20 lg:px-20 xl:px-16 py-24 gap-x-8">
          <p className="text-3xl font-bold text-center pb-8">
            Kami juga menjual
          </p>
          <div className="flex justify-center items-center">
            <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-16">
              {packetItem.map((data, index) => (
                <TrekkingItemCard
                  key={index}
                  id={data.id}
                  type={data.type}
                  name={data.name}
                  image={data.image}
                  price={data.price}
                  onClick={() => handleItem(data)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {click && (
        <Confirmation
          id={clickedItem?.id || 0}
          image={clickedItem?.image || ''}
          item={clickedItem?.name || ''}
          mountain={mountain?.name || ''}
          price={clickedItem?.price || 0}
          type={clickedItem?.type || ''}
          setClick={setClick}
        />
      )}
      {tourGuideConfirmation && (
        <TourGuideConfirmation
          onClick={addTourGuide}
          onClose={handleTourGuide}
        />
      )}
      {success && <Success message={message} onClick={handleSuccess} />}
      {!success && message && (
        <Error message={message} onClick={handleSuccess} />
      )}
    </div>
  )
}
