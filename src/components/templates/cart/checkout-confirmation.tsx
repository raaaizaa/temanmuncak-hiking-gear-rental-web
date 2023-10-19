'use client'
import CustomDropdown from '@/components/ui/dropdown/custom-dropdown'
import { Button } from '@nextui-org/react'
import { format } from 'date-fns'
import React, { useState } from 'react'
import { DayPicker } from 'react-day-picker'
import { FaRegQuestionCircle } from 'react-icons/fa'
import Success from '@/components/ui/success/success'
import { Checkout } from '@/utils/item-handler'

interface props {
  destination: string
  totalPrice: string
  onClick: () => void
}

export default function CheckoutConfirmation({
  destination,
  totalPrice,
  onClick,
}: props) {
  const [selectedDay, setSelectedDay] = useState<Date>()
  const [checkout, setCheckout] = useState(false)

  const footer = selectedDay ? (
    <p>
      Hari peminjaman:{' '}
      <span className="font-bold">{format(selectedDay, 'PPP')}</span>
    </p>
  ) : (
    <p>Pilih hari peminjaman</p>
  )

  const paymentItems = ['Tunai', 'Virtual Account', 'Transfer Bank']
  const deliveryItems = ['Ambil di Gunung', 'Delivery']

  const css = `

  .my-selected:not([disabled]) { 
    font-weight: bold; 
    color: red;
  }
  
  .my-selected:hover:not([disabled]) { 
    color: red;
  }
  
  .my-today { 
    font-weight: bold;
    
  }
  `

  const handleConfirmation = () => {
    setCheckout(true)
    Checkout()
    setTimeout(redirect, 1500)
  }

  const redirect = () => {
    window.location.replace('/cart')
  }

  return (
    <div className=" z-50 h-full w-full fixed bg-black/50 top-0 left-0 transition-all duration-200 ease-in flex justify-center items-center">
      <style>{css}</style>
      <div className="bg-white h-fit w-[350px] lg:w-[700px] xl:w-[700px] rounded-3xl px-12">
        <div className="py-4 lg:py-8 xl:py-8">
          <div className="block lg:flex xl:flex justify-center items-center lg:space-x-8 xl:space-x-8">
            <div className="block">
              <div className="pb-2">{footer}</div>
              <div className="border-2 rounded-xl p-2">
                <DayPicker
                  mode="single"
                  selected={selectedDay}
                  onSelect={setSelectedDay}
                  modifiersClassNames={{
                    selected: 'my-selected',
                    today: 'my-today',
                  }}
                  classNames={{
                    day: 'p-0 lg:p-4 xl:p-4 ',
                    caption:
                      'flex space-x-8 lg:justify-between xl:justify-between items-center p-0 lg:p-4 xl:p-4',
                  }}
                />
              </div>
            </div>
            <div className="w-full">
              <div className="xl:flex lg:flex justify-center items-center xl:visible lg:visible hidden">
                <FaRegQuestionCircle size={64} />
              </div>
              <div className="flex justify-center items-center">
                <p className="text-center text-black">
                  Kamu yakin mau checkout?
                </p>
              </div>
              <div>
                <div className="">
                  <div className="block items-center justify-center space-y-2 lg:space-y-4 xl:space-y-4 py-4 lg:items-start xl:items-start">
                    <div className="flex justify-center items-center">
                      <CustomDropdown items={paymentItems} />
                    </div>
                    <div className="flex justify-center items-center">
                      <CustomDropdown items={deliveryItems} />
                    </div>
                  </div>
                  <div className="py-4 space-y-4 items-end">
                    <hr />
                    <div>
                      <p className="font-bold">Total: Rp{totalPrice}</p>
                      <p>Destinasi: {destination}</p>
                    </div>
                    <div className="w-full">
                      <Button
                        className="w-full bg-[#3F6C29] text-white font-bold"
                        onClick={handleConfirmation}>
                        Checkout
                      </Button>
                    </div>
                    <div className="w-full">
                      <Button
                        className="w-full"
                        variant="bordered"
                        onClick={onClick}>
                        Batal
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {checkout && (
        <Success message="Pembayaranmu akan diproses!" onClick={onClick} />
      )}
    </div>
  )
}
