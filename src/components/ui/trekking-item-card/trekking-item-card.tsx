import { itemType, partialItemType } from '@/types/item'
import { Button, Card, CardBody } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

interface props {
  id: number
  name: string
  price: number
  image: string
  type: string
  onClick: (item: partialItemType) => void;
}

export default function TrekkingItemCard({
  id,
  name,
  price,
  image,
  type,
  onClick,
}: props) {
  return (
    <Card className="w-[200px] h-[400px] hover:scale-110 ease-in-out duration-100">
      <Image src={image} alt={name} width={500} height={500} />
      <CardBody className="bottom-0 absolute">
        <div className="pb-6">
          <p className="font-bold text-xl">{name}</p>
          <p>Rp{price}/hari</p>
        </div>
        <div className="flex">
          <Button
            variant="solid"
            className="bg-[#3F6C29] text-white w-full"
            onClick={() => onClick({ id, name, price, image, type })}
            >
            Tambah ke keranjang
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}
