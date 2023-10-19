import { Button } from '@nextui-org/react'
import React from 'react'
import { FaRegQuestionCircle } from 'react-icons/fa'

interface props {
  onClose: () => void
  onClick: () => void
}

export default function TourGuideConfirmation({ onClose, onClick }: props) {
  return (
    <div className="h-full w-full fixed bg-black/50 top-0 z-50 left-0 transition-all duration-700 ease-in flex justify-center items-center">
      <div className=" bg-white h-[400px] rounded-3xl px-12 flex justify-center items-center">
        <div className="block">
          <div className="flex justify-center items-center">
            <FaRegQuestionCircle size={128} />
          </div>
          <p className="text-2xl">Yakin ingin sewa Tour Guide?</p>
          <Button
            className="w-full mt-12 bg-[#3F6C29] text-white font-bold"
            onClick={onClick}>
            Ya, sewa Tour Guide
          </Button>
          <Button
            className="w-full mt-4 font-bold"
            variant="bordered"
            onClick={onClose}>
            Batal
          </Button>
        </div>
      </div>
    </div>
  )
}
