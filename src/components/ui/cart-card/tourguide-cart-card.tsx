import React from 'react'
import { FaPersonHiking } from 'react-icons/fa6'
import { FaTrashAlt } from 'react-icons/fa'

interface props {
  onClick: () => void
}

export default function TourGuideCartCard({onClick}: props) {
  return (
    <div className="block sm:flex justify-between items-center py-4">
      <div className="flex items-center space-x-8">
        <div className="mb-4 sm:mb-0">
          <FaPersonHiking className="fill-slate-300"  size={128} />
        </div>
        <div>
          <p>Tour Guide</p>
        </div>
      </div>
      <div className='flex justify-between lg:justify-center xl:justify-center items-center xl:space-x-12 lg:space-x-12'>
      <p>Harga: Rp200.000</p>
        <FaTrashAlt size={32} onClick={onClick} className='hover:scale-125 hover:cursor-pointer ease-in duration-75'/>
      </div>
    </div>
  )
}
