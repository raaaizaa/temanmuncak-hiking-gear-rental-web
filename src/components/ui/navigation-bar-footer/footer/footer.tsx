import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlinePhone, AiOutlineInstagram } from 'react-icons/ai'

export default function Footer() {
  return (
    <div className="flex bg-black w-full justify-between px-4 sm:px-12 md:px-20 lg:px-24 xl:px-32 py-24 items-center text-white z-10">
      <div className="xl:w-[250px] lg:w-[250px] w-2/5">
        <div className="flex justify-center items-center pb-6">
          <Image
            src="/logo/temanmuncak.png"
            alt="temanmuncak"
            width={192}
            height={192}
          />
        </div>
        <p className="text-justify xl:text-base lg:text-base md:text-sm text-sm">
          Didirikan pada tahun 2023, TemanMuncak merupakan sebuah layanan
          peminjaman alat mendaki gunung di Indonesia.
        </p>
      </div>
      <div className="xl:text-base lg:text-base md:text-sm text-sm">
        <p>Contact Us</p>
        <div className="flex items-center justify-start space-x-1">
          <AiOutlinePhone size={24} />
          <p>+62081314102381</p>
        </div>
        <Link
          href="https://www.instagram.com/temanmuncak0/"
          target="__blank"
          className="hover:underline">
          <div className="flex items-center justify-start space-x-1">
            <AiOutlineInstagram size={24} />
            <p>@temanmuncak0</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
