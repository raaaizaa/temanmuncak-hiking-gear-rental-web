'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

interface props {
  params: { mountain: string }
}

export default function Page({ params }: props) {
  console.log(params.mountain)
  const router = useRouter()

  useEffect(() => {
    router.push(`/details/${params.mountain}`)
  }, [params.mountain])

  return <div></div>
}
