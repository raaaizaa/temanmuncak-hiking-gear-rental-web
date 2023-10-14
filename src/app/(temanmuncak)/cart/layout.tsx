'use client'
import { trekkingItem } from '@/components/constants/trekking-item'
import CartCard from '@/components/ui/cart-card/cart-card'
import { itemType } from '@/types/item';
import React, { useEffect, useState } from 'react'

export default function Layout() {
  const [cartItems, setCartItems] = useState<itemType[]>([]);
  const [mountain, setMountain] = useState('')

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('rentedItems') || '[]')
    const mountainName = storedItems.map((item:itemType) => item.mountain)
    console.log(mountainName)
    console.log(storedItems)
    setCartItems(storedItems)
    setMountain(mountainName)
  }, [])


  return (
    <div className="bg-white text-black px-4 sm:px-12 md:px-20 lg:px-24 xl:px-32">
      <div className="py-12">
        <p className="text-5xl font-bold text-center">Keranjang Anda</p>
        <div className="block py-6 ">
          <p className="w-1/4 text-center">Destinasi Gunung: {mountain[0]}</p>
          <hr />
          <div className="flex font-bold text-start py-6">
            <div className="w-1/4 text-center">
              <p>Nomor</p>
            </div>
            <div className="w-1/4 text-center">
              <p>Barang</p>
            </div>
            <div className="w-1/4 text-center">
              <p>Jumlah</p>
            </div>
            <div className="w-1/4 text-center">
              <p>Total Harga</p>
            </div>
          </div>
          <hr />
          {cartItems.map((item, index) => (
            <CartCard
              key={index}
              index={index + 1}
              name={item.name}
              image={item.image}
              price={item.price}
              day={item.days}
              quantity={item.quantity}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
