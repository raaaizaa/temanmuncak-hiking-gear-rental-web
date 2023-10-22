'use client'
import React, { useState } from 'react'
import ProfileInfo from './profile-info'
import ProfilePicture from './profile-picture'
import AddressList from './address-list'

type TabType = 'editProfile' | 'address' | 'payment'

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState<TabType>('editProfile')

  const handleTabClick = (tab: TabType) => {
    setActiveTab(tab)
  }

  return (
    <div className="flex justify-center p-9 xl:h-screen w-full bg-white text-black">
      <div className="border border-solid border-lightgray-500 rounded-lg p-4 block lg:flex xl:flex w-full lg:w-3/4 xl:w-3/4">
        <div className="w-full lg:w-1/4 xl:w-1/4 p- lg:p-4 xl:p-4 lg:border-r xl:border-r xl:border-solid lg:border-solid lg:border-lightgray-500 xl:border-lightgray-500 space-y-4 block">
          <div>
            <h2 className="text-lg font-semibold">Your Profile</h2>
          </div>
          <div className="xl:block lg:block flex justify-between items-center">
            <button
              onClick={() => handleTabClick('editProfile')}
              className={`hover:cursor-pointer hover:scale-110 text-base ease-in duration-100 block ${
                activeTab === 'editProfile'
                  ? 'font-semibold text-[#3F6C29]'
                  : ''
              }`}>
              Edit Profile
            </button>
            <button
              onClick={() => handleTabClick('address')}
              className={`hover:cursor-pointer hover:scale-110 text-base ease-in duration-100 block ${
                activeTab === 'address' ? 'font-semibold text-[#3F6C29]' : ''
              }`}>
              Daftar Alamat
            </button>
            <button
              onClick={() => handleTabClick('payment')}
              className={`hover:cursor-pointer hover:scale-110 text-base ease-in duration-100 block ${
                activeTab === 'payment' ? 'font-semibold text-[#3F6C29]' : ''
              }`}>
              Pembayaran
            </button>
          </div>
          <hr className="xl:hidden lg:hidden visible pt-8" />
        </div>

        {activeTab === 'editProfile' && (
          <div className="space-y-12 xl:space-y-0 lg:space-y-0 block lg:flex xl:flex h-fit">
            <ProfilePicture />
            <ProfileInfo />
          </div>
        )}
        {activeTab === 'address' && (
          <div className="flex w-full lg:w-3/4 xl:w-3/4">
            <AddressList />
          </div>
        )}
        {activeTab === 'payment' && (
          <div className="flex w-full lg:w-3/4 xl:w-3/4">
            <div className="h-screen">
              <p>Unavailable!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
