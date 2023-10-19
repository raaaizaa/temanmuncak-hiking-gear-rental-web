import { navbarItem } from '@/components/constants/navbar-item'
import Link from 'next/link'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

interface props {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: props) {
  return (
    <div
      className={
        isOpen
          ? 'h-full w-full fixed bg-black/50 top-0 left-0 transition-all duration-200 ease-in'
          : ''
      }>
      <div
        className={
          isOpen
            ? 'bg-white h-screen w-3/4 opacity-100 text-black top-0 right-0 fixed px-12 py-4'
            : 'fixed left-[-100%] top-0'
        }>
        <div className="flex justify-end">
          <AiOutlineClose
            size={32}
            onClick={onClose}
            className="hover:cursor-pointer hover:scale-110 ease-in duration-100"
          />
        </div>
        <div className="py-8">
          {navbarItem.map((data, index) => (
            <Link key={index} href={data.href} onClick={onClose}>
              <p className="text-2xl py-2 hover:underline hover:underline-offset-2">
                {data.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
