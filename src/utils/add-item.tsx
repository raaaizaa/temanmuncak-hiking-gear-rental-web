'use client'
import { itemType } from '@/types/item'
import { tourGuideType } from '@/types/tourguide'

function checkMountain(items: itemType[], mountain: string) {
  if (isCartEmpty(items)) {
    return true // Cart is available, any mountain can be added
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
      // If there is no existing guide, add a new one
      const newGuide: tourGuideType = {
        mountain,
        rent: true,
      }
      tourGuide = [newGuide]

      console.log('new tour guide: ', tourGuide)
      // Update the localStorage with the modified tourGuide array
      localStorage.setItem('tourGuide', JSON.stringify(tourGuide))
      return true
    } else {
      console.log('tour guide already exist with the same mountain')
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
  console.log('items before added: ', items)

  if (cartIsEmpty || (mountainAvailable && !itemAvailable)) {
    const updatedItems = [...items, newItem]
    localStorage.setItem('rentedItems', JSON.stringify(updatedItems))
    console.log('items after added: ', updatedItems)
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
    console.log('items after added: ', updatedItems)
    return true
  } else {
    return false
  }
}
