'use client'
import { itemType } from '@/types/item'
import { useEffect } from 'react'

// if there's another mountain in the localstorage, it won't adding new mountain
function checkMountain(mountain: string) {
  const item = JSON.parse(localStorage.getItem('rentedItems') || '[]')
  return item.some((item: itemType) => item.mountain === mountain)
}

function checkItem(id: number) {
  const item = JSON.parse(localStorage.getItem('rentedItems') || '[]')
  return item.some((item: itemType) => item.id === id)
}

function calculatePrice(price: number, days: number, quantity: number) {
  return price * days * quantity
}

export function AddItem(item: itemType) {
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('rentedItems') || '[]') as itemType[]
    const isMountainSame = checkMountain(item.mountain)
    const isItemExist = checkItem(item.id)
    
    if (isMountainSame) {
      // if there's item with the same id, the quantity, the days, and the price will be updated
      if (isItemExist) {
        const updatedItems = items.map((existingItem) => {
          if(existingItem.id === item.id){
            return{
              ...existingItem,
              quantity: item.quantity,
              days: item.days,
              price: calculatePrice(item.price, item.days, item.quantity)
            }
          }

          return existingItem
        })

        localStorage.setItem('rentedItems', JSON.stringify(updatedItems))
      }else{
        const updatedItems = [...items, item]
        localStorage.setItem('rentedItems', JSON.stringify(updatedItems))
      }
    }else{
      const updatedItems = [...items, item]
      localStorage.setItem('rentedItems', JSON.stringify(updatedItems))
    }
  }, [])

}
