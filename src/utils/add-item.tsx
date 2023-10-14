'use client';
import { itemType } from '@/types/item';

function checkMountain(items: itemType[], mountain: string) {
  if (isCartEmpty(items)) {
    return true; // Cart is available, any mountain can be added
  }

  return items.some((item: itemType) => item.mountain === mountain);
}

function isCartEmpty(items: itemType[]) {
  return items.length === 0;
}

function checkItem(items: itemType[], id: number) {
  return items.some((item: itemType) => item.id === id);
}

export function AddItem(newItem: itemType) {
  const items = JSON.parse(localStorage.getItem('rentedItems') || '[]') as itemType[];
  const cartIsEmpty = isCartEmpty(items);
  const mountainAvailable = checkMountain(items, newItem.mountain);
  const itemAvailable = checkItem(items, newItem.id);
  console.log('items before added: ', items);

  if (cartIsEmpty || (mountainAvailable && !itemAvailable)) {
    const updatedItems = [...items, newItem];
    localStorage.setItem('rentedItems', JSON.stringify(updatedItems));
    console.log('items after added: ', updatedItems);
    return true;
  } else if (!cartIsEmpty && mountainAvailable && itemAvailable) {
    const updatedItems = items.map((existingItem) => {
      if (existingItem.id === newItem.id) {
        return {
          ...existingItem,
          quantity: newItem.quantity,
          days: newItem.days,
          price: newItem.price,
        };
      }
      return existingItem;
    });
    localStorage.setItem('rentedItems', JSON.stringify(updatedItems));
    console.log('items after added: ', updatedItems);
    return true;
  } else {
    return false;
  }
}
