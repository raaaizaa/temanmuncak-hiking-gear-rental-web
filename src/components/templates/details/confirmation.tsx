'use client'
import Counter from '@/components/ui/counter/counter'
import { itemType } from '@/types/item'
import { AddItem } from '@/utils/add-item'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import React, { useState, useRef } from 'react'
import { FaRegSmileWink } from 'react-icons/fa'

interface props {
  id: number
  type: string
  item: string
  mountain: string
  image: string
  price: number
  setClick: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Confirmation({
  id,
  type,
  item,
  mountain,
  image,
  price,
  setClick,
}: props) {
  const [quantityCounter, setQuantityCounter] = useState(1)
  const [dayCounter, setDayCounter] = useState(1)
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const quantityRef = useRef<HTMLInputElement>(null)
  const daysRef = useRef<HTMLInputElement>(null)
  const [errorMessage, setErrorMessage] = useState('')
  const priceRupiah = Intl.NumberFormat().format(price)

  const handleClick = () => {
    const quantity = quantityRef.current?.value
    const days = daysRef.current?.value
    const storedItems = JSON.parse(localStorage.getItem('rentedItems') || '[]')

    if (quantity === '0' || days === '0') {
      setError(true)
      setErrorMessage('Jumlah hari atau barang tidak bisa 0!')
    } else if (
      storedItems.some((item: itemType) => item.mountain !== mountain)
    ) {
      setError(true)
      setErrorMessage(
        'Destinasi gunung harus sama dengan yang sudah ada pada keranjang!'
      )
    } else {
      let totalPrice = price * (quantity ? parseInt(quantity, 10) : 0)

      if (type !== 'sale' && days !== null) {
        totalPrice *= days ? parseInt(days, 10) : 0
      }

      const selectedItem: itemType = {
        id: id,
        type: type,
        name: item,
        mountain: mountain,
        image: image,
        quantity: quantity ? parseInt(quantity, 10) : 0,
        days: type === 'sale' ? null : days ? parseInt(days, 10) : 0,
        price: totalPrice,
      }

      if (AddItem(selectedItem)) {
        setSuccess(true)
      }
    }
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
    <div className="h-screen w-full fixed bg-black/50 top-0 z-50 left-0 transition-all duration-200 ease-in flex justify-center items-center">
      {!success && (
        <div className="bg-white h-fit w-fit lg:w-[750px] xl:w-[750px] rounded-3xl z-50 flex">
          <div className="block w-full h-full px-8 lg:px-12 xl:px-12 py-4 lg:py-8 xl:py-8">
            <p className="text-center text-xl lg:text-2xl xl:text-3xl font-bold">
              Tambah ke Keranjang
            </p>
            <p className="text-center text-base lg:text-base xl:text-xl ">
              Destinasi: {mountain}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {image && (
                  <Image src={image} alt={item} width={150} height={150} />
                )}
                <div className="block">
                  <p className="font-bold">{item}</p>
                  <p>Rp{priceRupiah}/hari</p>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="block lg:flex xl:flex w-full items-center pt-8 justify-between">
                <Counter
                  reference={quantityRef}
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
                {type !== 'sale' && (
                  <Counter
                    reference={daysRef}
                    label="Hari"
                    value={dayCounter}
                    onDecrement={() =>
                      setDayCounter(dayCounter > 0 ? dayCounter - 1 : 0)
                    }
                    onIncrement={() => setDayCounter(dayCounter + 1)}
                    onChange={handleDayChange}
                  />
                )}
              </div>
            </div>

            <div className="space-y-4 items-end pt-12">
              <div className="">
                <p className="text-red-600">{error ? errorMessage : ``}</p>
              </div>
              <div className="flex justify-center">
                <Button
                  variant="flat"
                  className="bg-[#3F6C29] text-white font-bold w-full py-8"
                  onClick={handleClick}>
                  Tambah
                </Button>
              </div>
              <div className="flex justify-center">
                <Button
                        variant="bordered"
                  className=" text-black font-bold w-full py-8"
                  onClick={() => setClick(false)}>
                  Batal
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      {success && (
        <div className="bg-white h-[400px] w-[350px] rounded-3xl z-50 flex items-center justify-center">
          <div className="block space-y-8">
            <div className="flex justify-center items-center">
              <FaRegSmileWink size={72} />
            </div>
            <div>
              <p className="text-xl">Barang berhasil ditambahkan!</p>
            </div>
            <Button
              className="bg-[#3F6C29] text-white w-full"
              onClick={() => setClick(false)}>
              Kembali
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
