import Image from 'next/image'
import React from 'react'

export default function Landing() {
  return (
    <div className="h-screen w-screen ">
      <Image
        src="/homepage/bromo.jpg"
        alt="bromo"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
        className="-z-10 "
      />
      <div className="absolute text-white px-4 sm:px-12 md:px-20 lg:px-24 xl:px-32 bottom-0 left-0 py-24">
        <div className="block font-bold text-3xl md:text-4xl lg:text-6xl xl:text-8xl">
          <p>temanmuncak.</p>
          <p>solusi muncak, gak pake ribet.</p>
        </div>
      </div>
    </div>
  )
}
