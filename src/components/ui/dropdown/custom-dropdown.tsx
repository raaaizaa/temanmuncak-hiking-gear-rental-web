import React from 'react'
interface CustomDropdownProps {
  items: string[]
}
export default function CustomDropdown({ items }: CustomDropdownProps) {
  return (
    <select className='hover:scale-105 duration-75 ease-in-out w-full bg-slate-200 rounded-md py-1 '>
      {items.map((data, index) => (
        <option value={data} key={index}>
          {data}
        </option>
      ))}
    </select>
  )
}
