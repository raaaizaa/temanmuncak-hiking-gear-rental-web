'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter()

  useEffect(() => {
    router.push('/cart')
  }, [])
    return (
    <div></div>
  )
}
