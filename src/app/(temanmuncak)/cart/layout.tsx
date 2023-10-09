'use client'
import { trekkingItem } from '@/components/constants/trekking-item'
import CartCard from '@/components/ui/cart-card/cart-card'
import React from 'react'

export default function Layout() {
  return (
    <div className="bg-white text-black px-4 sm:px-12 md:px-20 lg:px-24 xl:px-32">
      <div className="py-12">
        <p className="text-5xl font-bold text-center">Keranjang Anda</p>
        <div className="block py-6 ">
          <p className='w-1/4 text-center'>Destinasi Gunung: </p>
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
          {trekkingItem.map((data, index) => (
            <CartCard
              index={index}
              key={index}
              name={data.name}
              image={data.image}
              price={data.price}
              quantity={0}
            />
          ))}
        </div>
      </div>
    </div>
  )
}