import { Card, CardBody } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';
import {FaTrashAlt} from 'react-icons/fa'

interface props {
  index: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  day: number | null;
  handleClick: ()=> void
}

export default function ItemCartCard({
  index,
  name,
  price,
  image,
  quantity,
  day,
  handleClick
}: props) {
  const priceRupiah = Intl.NumberFormat().format(price);

  return (
    <div className="block sm:flex justify-between items-center py-4">
      <div className="flex items-center space-x-8">
        <div className="mb-4 sm:mb-0">
          <Image src={image} alt={name} width={128} height={128} />
        </div>
        <div>
          <p className="font-bold text-xl">{name}</p>
          <p>{quantity} pcs</p>
          <p>{day !== null ? `${day} hari` : ``}</p>
        </div>
      </div>
      <div className='flex justify-between lg:justify-center xl:justify-center items-center xl:space-x-12 lg:space-x-12'>
        <p>Harga: Rp{priceRupiah}</p>
        <FaTrashAlt size={32} onClick={handleClick} className='hover:scale-125 hover:cursor-pointer ease-in duration-75'/>
      </div>
    </div>
  );
}
