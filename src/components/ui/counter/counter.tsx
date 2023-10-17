import React, { useState } from 'react'
import { Button } from '@nextui-org/react'

interface props {
  reference: React.RefObject<HTMLInputElement>
  label: string
  value: number
  onDecrement: () => void
  onIncrement: () => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Counter({
  reference,
  label,
  value,
  onDecrement,
  onIncrement,
  onChange,
}: props) {
  return (
    <div className="flex items-center justify-between space-x-8">
      <div>
        <p>{label}:</p>
      </div>
      <div>
        <Button className="bg-[#3F6C29] text-white w-[24px] h-[24px] lg:w-[36px lg:h-[36px] xl:w-[36px] xl:h-[36px]" onClick={onDecrement}>
          -
        </Button>
        <input
          ref={reference}
          value={value}
          onChange={onChange}
          className="w-[32px] h-[32px] text-center bg-slate-100 rounded-lg"
        />
        <Button className="bg-[#3F6C29] text-white w-[24px] h-[24px] lg:w-[36px lg:h-[36px] xl:w-[36px] xl:h-[36px]" onClick={onIncrement}>
          +
        </Button>
      </div>
    </div>
  )
}
