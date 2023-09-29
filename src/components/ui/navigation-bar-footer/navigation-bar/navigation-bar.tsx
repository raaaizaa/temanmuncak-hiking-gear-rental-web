'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'
import Sidebar from '../../sidebar/sidebar'
import { navbarItem } from '@/components/constants/navbar-item'

export default function Navbar() {
  const [selectedItem, setSelectedItem] = useState('')
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }

  return (
    <div className="h-[64px] w-full bg-[#3F6C29] flex items-center px-4 sm:px-12 md:px-20 lg:px-24 xl:px-32 py-8 justify-between sticky top-0 left-0 z-50">
      <Link href="/">
        <Image
          src="/logo/temanmuncak.png"
          alt="temanmuncak"
          width={96}
          height={96}
          onClick={() => setSelectedItem('')}
        />
      </Link>
      <div className="hidden sm:flex space-x-8">
        {navbarItem.map((data, index) => (
          <Link key={index} href={data.href}>
            <p
              className={`${
                selectedItem === data.name
                  ? 'underline underline-offset-4 font-bold text-xl'
                  : ''
              } text-xl hover:font-bold transition-all ease-in duration-100 `}
              onClick={() => setSelectedItem(data.name)}>
              {data.name}
            </p>
          </Link>
        ))}
      </div>
      <div className="sm:hidden">
        <AiOutlineMenu
          size={32}
          onClick={handleClick}
          className="hover:cursor-pointer hover:scale-110 ease-in duration-100"
        />
      </div>
      {click && <Sidebar onClose={handleClick} isOpen={click} />}
    </div>
  )
}
