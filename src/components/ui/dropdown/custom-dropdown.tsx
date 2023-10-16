import React from 'react'
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react'

interface CustomDropdownProps {
  selectedValue: string
  selectedKeys: Set<string>
  onSelectionChange: (keys: Set<string>) => void
  items: string[]
}

export default function CustomDropdown({
  selectedValue,
  selectedKeys,
  onSelectionChange,
  items,
}: CustomDropdownProps) {
  return (
    <Dropdown className="w-full">
      <DropdownTrigger>
        <Button variant="flat" className="w-full">
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        className="w-full"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={onSelectionChange}>
        {items.map((item) => (
          <DropdownItem className="w-full text-black" key={item}>
            {item}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}
