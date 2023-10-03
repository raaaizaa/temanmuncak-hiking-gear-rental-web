import { Card, CardBody } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

interface props {
  index: number
  name: string
  price: number
  image: string
  quantity: number
}

export default function CartCard({
  index,
  name,
  price,
  image,
  quantity,
}: props) {
  return (
    <div className="block">
      <div className="flex items-center">
        <p className='w-1/4 text-center items-center'>{index}</p>
        <div className='flex w-1/4 text-center items-center'>
          <Image src={image} alt={name} width={100} height={100} />
          <p>{name}</p>
        </div>
        <p className='w-1/4 text-center items-center'>{quantity}</p>
        <p className='w-1/4 text-center items-center'>{price}</p>
      </div>
      <hr />
    </div>
  )
}
