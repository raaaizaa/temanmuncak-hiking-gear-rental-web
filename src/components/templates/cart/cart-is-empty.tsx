import Link from 'next/link'
import React from 'react'
import { FaRegSadCry } from 'react-icons/fa'

export default function CartIsEmpty() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="block space-y-4">
        <div className="flex justify-center items-center">
          <FaRegSadCry size={72} />
        </div>
        <p className="text-2xl text-center">Keranjangmu masih kosong...</p>
        <Link href="/#mountain-list">
          <p className="hover:underline">
            Ayo cari barang yang kamu mau biar keranjangmu nggak kosong!
          </p>
        </Link>
      </div>
    </div>
  )
}
