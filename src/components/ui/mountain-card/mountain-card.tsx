import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'

interface props {
  name: string
  location: string
  image: string
}

export default function MountainCard({ name, location, image }: props) {
  return (
    <Card
      className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[250px] xl:h-[250px] hover:scale-110 ease-in-out duration-100"
      isPressable>
      <Link href={`/details/${name}`}>
        <Image
          src={image}
          alt={name}
          width={250}
          height={250}
          quality={100}
          className="w-[250px] h-[250px]"
        />
        <CardHeader className="absolute text-center flex bottom-0 justify-center w-full bg-gradient-to-t from-black/100 to-transparent">
          <div className="block text-white">
            <p className="text-sm lg:text-base xl:text-base font-bold">
              {name}
            </p>
            <p className="text-xs lg:text-xs xl:text-sm">{location}</p>
          </div>
        </CardHeader>
      </Link>
    </Card>
  )
}
