import React from 'react'
import { PiMountains } from 'react-icons/pi'
export default function Goals() {
  return (
    <div className="bg-[#3F6C29] px-4 sm:px-12 md:px-20 lg:px-24 xl:px-32 py-24">
      <div className="flex justify-center items-center">
        <PiMountains className="fill-white" size={128} />
      </div>
      <p className="text-center text-base md:text-xl lg:text-2xl xl:text-3xl font-light">
        Kedepannya, kami akan menjanjikan layanan kami <br />
        tersedia di 100+ gunung di Indonesia.
      </p>
    </div>
  )
}
