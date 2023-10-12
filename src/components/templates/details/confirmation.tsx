'use client'
import Counter from '@/components/ui/counter/counter'
import { itemType, partialItemType } from '@/types/item'
import { AddItem } from '@/utils/add-item'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface props {
  id: number
  item: string
  mountain: string
  image: string
  price: number
  setClick: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Confirmation({
  id,
  item,
  mountain,
  image,
  price,
  setClick,
}: props) {
  const [quantityCounter, setQuantityCounter] = useState(0)
  const [dayCounter, setDayCounter] = useState(0)

  const handleClick = () => {
    const quantity = (
      document.getElementById('quantityField') as HTMLInputElement
    )?.value
    const days = (document.getElementById('daysField') as HTMLInputElement)
      ?.value

    const totalPrice =
      price *
      (days ? parseInt(days, 10) : 0) *
      (quantity ? parseInt(quantity, 10) : 0)

    const selectedItem: itemType = {
      id: id,
      name: item,
      mountain: mountain,
      image: image,
      quantity: quantity ? parseInt(quantity, 10) : 0,
      days: days ? parseInt(days, 10) : 0,
      price: totalPrice,
    }

    console.log(selectedItem)

    AddItem(selectedItem)

    console.log('Added item to local storage:', selectedItem)
  }

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseInt(e.target.value, 10) || 0
    setQuantityCounter(Math.max(0, inputValue))
  }

  const handleDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseInt(e.target.value, 10) || 0
    setDayCounter(Math.max(0, inputValue))
  }

  return (
    <div className="h-screen w-full fixed bg-black/50 top-0 left-0 transition-all duration-200 ease-in flex justify-center items-center">
      <div className="bg-white h-[500px] w-[750px] rounded-3xl z-50 flex">
        <div className="block w-full h-full p-12">
          <p className="text-center text-3xl font-bold">Tambah ke Keranjang</p>
          <p className="text-center text-xl ">Destinasi: {mountain}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {image && (
                <Image src={image} alt={item} width={150} height={150} />
              )}
              <div className="block">
                <p className="font-bold">{item}</p>
                <p>Rp{price}/hari</p>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="flex items-center justify-between">
              <Counter
                id="quantityField"
                label="Kuantitas"
                value={quantityCounter}
                onDecrement={() =>
                  setQuantityCounter(
                    quantityCounter > 0 ? quantityCounter - 1 : 0
                  )
                }
                onIncrement={() => setQuantityCounter(quantityCounter + 1)}
                onChange={handleQuantityChange}
              />
              <Counter
                id="daysField"
                label="Total hari meminjam"
                value={dayCounter}
                onDecrement={() =>
                  setDayCounter(dayCounter > 0 ? dayCounter - 1 : 0)
                }
                onIncrement={() => setDayCounter(dayCounter + 1)}
                onChange={handleDayChange}
              />
            </div>
          </div>
          <div className="space-y-4 items-end pt-12">
            <div className="flex justify-center">
              <Button
                variant="flat"
                className="bg-[#3F6C29] text-white font-bold w-full py-8"
                onClick={() => handleClick()}>
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
  )
}
