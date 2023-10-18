'use client'
import CartIsEmpty from '@/components/templates/cart/cart-is-empty'
import CheckoutConfirmation from '@/components/templates/cart/checkout-confirmation'
import ItemCartCard from '@/components/ui/cart-card/item-cart-card'
import TourGuideCartCard from '@/components/ui/cart-card/tourguide-cart-card'
import { itemType } from '@/types/item'
import { Button } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'

export default function Layout() {
  const [cartItems, setCartItems] = useState<itemType[]>([])
  const [tourGuide, setTourGuide] = useState(false)
  const [empty, setEmpty] = useState(false)
  const [mountain, setMountain] = useState('')
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const totalPriceRupiah = Intl.NumberFormat().format(totalPrice)
  const [checkout, setCheckout] = useState(false)

  const handleRemoveItem = (itemName: string) => {
    const updatedCartItems = cartItems.filter((item) => item.name !== itemName)
    localStorage.setItem('rentedItems', JSON.stringify(updatedCartItems))
    setCartItems(updatedCartItems)

    const calculatedTotalPrice = updatedCartItems.reduce(
      (accumulator: number, currentItem: itemType) =>
        accumulator + currentItem.price,
      0
    )
    setTotalPrice(calculatedTotalPrice)
  }

  const handleRemoveTourGuide = () => {
    localStorage.removeItem('tourGuide')
    setTourGuide(false)
  }

  const handleCheckout = () => {
    setCheckout(!checkout)
  }

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('rentedItems') || '[]')
    const tourGuideItems = JSON.parse(localStorage.getItem('tourGuide') || '[]')

    if(tourGuideItems.length === 1){
      setTourGuide(true)
    }

    if (storedItems.length === 0) {
      setEmpty(true)
    } else {
      const mountainName = storedItems.map((item: itemType) => item.mountain)
      setMountain(mountainName)
      setCartItems(storedItems)
    }

    const calculatedTotalPrice = storedItems.reduce(
      (accumulator: number, currentItem: itemType) =>
        accumulator + currentItem.price,
      0
    )
    setTotalPrice(calculatedTotalPrice)
  }, [])

  return (
    <div className="bg-white text-black px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
      {!empty && (
        <div className="py-8 md:py-12 lg:py-16 xl:py-20 xl:px-32 lg:px-20">
          <p className="text-4xl md:text-5xl font-bold text-center">
            Keranjang Anda
          </p>
          <div className="block py-4 md:py-6 lg:py-8 xl:py-10">
            <p className="w-full text-center md:w-1/2 xl:w-1/3 mx-auto mb-4">
              Destinasi Gunung: {mountain[0]}
            </p>
            <hr className="mb-4" />
            {cartItems.map((item, index) => (
              <div key={index}>
                <ItemCartCard
                  index={index + 1}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  day={item.days}
                  quantity={item.quantity}
                  handleClick={() => handleRemoveItem(item.name)}
                />
                <hr />
              </div>
            ))}
            {tourGuide && (
              <div>
                <p className='text-xl'>Pemandu perjalanan anda, </p>
                <TourGuideCartCard onClick={handleRemoveTourGuide} />
                </div>
            )}
            <div className="flex justify-end">
              <div className='py-4 space-y-4'>
                <p>Total Harga: <span className='font-bold'>Rp{totalPriceRupiah}</span></p>
                <Button
                  className="bg-[#3F6C29] hover:scale-105 text-white font-bold w-full"
                  onClick={handleCheckout}>
                  Checkout
                </Button>
              </div>
            </div>
          </div>
          {checkout && (
            <CheckoutConfirmation 
            destination={mountain[0]}
            totalPrice={totalPriceRupiah}
            onClick={handleCheckout}/>
          )}
        </div>
      )}
      {empty && <CartIsEmpty />}
    </div>
  )
}
