import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div className="flex bg-black w-screen justify-between px-32 items-center text-white">
      <div className="w-[250px]">
        <div className="flex justify-center items-center">
          <Image
            src="/logo/temanmuncak.png"
            alt="temanmuncak"
            width={192}
            height={192}
          />
        </div>
        <p className="text-justify">
          Didirikan pada tahun 2023, TemanMuncak merupakan sebuah layanan
          peminjaman alat mendaki gunung di Indonesia.
        </p>
      </div>
      <div>
        <p>Contact Us</p>
        <p>+62081314102381</p>
      </div>
    </div>
  )
}
