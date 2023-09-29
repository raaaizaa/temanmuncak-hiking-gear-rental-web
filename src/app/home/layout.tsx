import Landing from '@/components/templates/homepage/landing'
import MountainGrid from '@/components/templates/homepage/mountain-grid'
import React from 'react'

export default function HomePage() {
  return (
    <div>
      <Landing />
      <div className="bg-white text-black px-4 sm:px-12 md:px-20 lg:px-24 xl:px-32">
        <MountainGrid />
      </div>
    </div>
  )
}
