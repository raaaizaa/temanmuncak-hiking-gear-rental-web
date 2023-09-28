'use client'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export default function Page() {
  const route = useRouter()

  useEffect(() => {
    route.push('/account')
  }, [])
    return (
    <></>
  )
}
