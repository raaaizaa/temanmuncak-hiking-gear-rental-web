import React from 'react'
import Image from 'next/image'
import { navbarItem } from '@/components/constants/navbar-item'
import Link from 'next/link'

export default function NavigationBar() {
  return (
    <div className="h-[64px] w-screen bg-[#3F6C29] flex items-center px-32 py-8 justify-between">
      <Image
        src="/logo/temanmuncak.png"
        alt="temanmuncak"
        width={96}
        height={96}
      />
      <div className="flex space-x-8">
        {navbarItem.map((data, index) => (
          <Link key={index} href={data.href}>
            <p>{data.name}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
