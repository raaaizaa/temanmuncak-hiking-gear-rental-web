import { Button, Card, CardBody, CardFooter } from '@nextui-org/react'
import React from 'react'
import { FaPersonHiking } from 'react-icons/fa6'

interface props {
    onClick: () => void
}

export default function TourGuideCard({onClick}: props) {
  return (
    <Card className="hover:scale-110 ease-in-out duration-100">
      <CardBody>
        <FaPersonHiking size={192} className="fill-slate-300" />
      </CardBody>
      <CardFooter>
        <div className="text-start text-black p-5 w-full">
          <p className="font-bold text-xl">Tour Guide</p>
          <p className="text-base">Rpxxx.xxx,xx</p>
          <Button variant="flat" className="w-full mt-4" onClick={onClick}>
            Sewa
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
