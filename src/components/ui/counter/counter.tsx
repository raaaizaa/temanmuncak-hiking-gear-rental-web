import React, { useState } from 'react'
import { Button } from '@nextui-org/react'

interface props {
  ref: React.RefObject<HTMLInputElement>
  label: string
  value: number
  onDecrement: () => void
  onIncrement: () => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Counter({
  ref,
  label,
  value,
  onDecrement,
  onIncrement,
  onChange,
}: props) {
  return (
    <div className="flex items-center gap-4">
      <p>{label}:</p>
      <Button className="bg-[#3F6C29] text-white" onClick={onDecrement}>
        -
      </Button>
      <input
        ref={ref}
        value={value}
        onChange={onChange}
        className="w-[32px] h-[32px] text-center bg-slate-100 rounded-lg"
      />
      <Button className="bg-[#3F6C29] text-white" onClick={onIncrement}>
        +
      </Button>
    </div>
  )
}
