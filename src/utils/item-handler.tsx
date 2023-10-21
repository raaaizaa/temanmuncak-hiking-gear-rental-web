'use client'
import { itemType } from '@/types/item'
import { tourGuideType } from '@/types/tourguide'

function checkMountain(items: itemType[], mountain: string) {
  if (isCartEmpty(items)) {
    return true
  }

  return items.some((item: itemType) => item.mountain === mountain)
}

function isCartEmpty(items: itemType[]) {
  return items.length === 0
}

function checkItem(items: itemType[], id: number) {
  return items.some((item: itemType) => item.id === id)
}

export function AddTourGuide(mountain: string) {
  const cartItems = JSON.parse(
    localStorage.getItem('rentedItems') || '[]'
  ) as itemType[]
  let tourGuide = JSON.parse(
    localStorage.getItem('tourGuide') || '[]'
  ) as tourGuideType[]

  const mountainAvailable = checkMountain(cartItems, mountain)

  if (mountainAvailable) {
    const existingGuide = tourGuide.length > 0 ? tourGuide[0] : null

    if (!existingGuide) {
      const newGuide: tourGuideType = {
        mountain,
        rent: true,
      }
      tourGuide = [newGuide]

      
      localStorage.setItem('tourGuide', JSON.stringify(tourGuide))
      return true
    } else {
    }
  }
}

export function AddItem(newItem: itemType) {
  const items = JSON.parse(
    localStorage.getItem('rentedItems') || '[]'
  ) as itemType[]
  const cartIsEmpty = isCartEmpty(items)
  const mountainAvailable = checkMountain(items, newItem.mountain)
  const itemAvailable = checkItem(items, newItem.id)
  

  if (cartIsEmpty || (mountainAvailable && !itemAvailable)) {
    const updatedItems = [...items, newItem]
    localStorage.setItem('rentedItems', JSON.stringify(updatedItems))
    return true
  } else if (!cartIsEmpty && mountainAvailable && itemAvailable) {
    const updatedItems = items.map((existingItem) => {
      if (existingItem.id === newItem.id) {
        return {
          ...existingItem,
          quantity: newItem.quantity,
          days: newItem.days,
          price: newItem.price,
        }
      }
      return existingItem
    })
    localStorage.setItem('rentedItems', JSON.stringify(updatedItems))
    return true
  } else {
    return false
  }
}

export function Checkout() {
  localStorage.removeItem('rentedItems')
  localStorage.removeItem('tourGuide')
}
