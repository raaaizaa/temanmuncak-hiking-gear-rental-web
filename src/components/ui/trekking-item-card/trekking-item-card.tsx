import { Button, Card, CardBody } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

interface props {
  name: string
  price: number
  image: string
}

export default function TrekkingItemCard({ name, price, image }: props) {
  return (
    <Card
      className="w-[250px] h-[450px] hover:scale-110 ease-in-out duration-100"
      isPressable>
      <Image src="" alt={name} />
      <CardBody className="bottom-0 absolute">
        <div className='pb-6'>
          <p className="font-bold text-xl">{name}</p>
          <p>Rp{price}</p>
        </div>
        <Button variant="solid" className="bg-[#3F6C29] text-white">
          Tambah ke keranjang
        </Button>
      </CardBody>
    </Card>
  )
}
