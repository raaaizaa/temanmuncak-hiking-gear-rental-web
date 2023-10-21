import React, { useState, ChangeEvent } from 'react'
import './Modal.css'

export default function ProfileInfo() {
  const [addresses, setAddresses] = useState([
    {
      name: 'Universitas Bina Nusantara Kampus Anggrek',
      address:
        'Jl. Raya Kb. Jeruk No.27, RT.1/RW.9, Kb. Jeruk, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11530',
    },
    {
      name: 'Syahdan Campus - BINUS UNIVERSITY',
      address:
        'Jl. Kyai H. Syahdan No.9, Kemanggisan, Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11480',
    },
  ])

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newAddress, setNewAddress] = useState({
    name: '',
    address: '',
  })

  const openModal = () => {
    setIsModalOpen(true)
  }

  const initialAddress = {
    name: '',
    address: '',
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setNewAddress(initialAddress)
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }))
  }

  const addAddress = () => {
    setAddresses([...addresses, newAddress])
    closeModal()
  }

  return (
    <div className="flex flex-col">
      <button
        onClick={openModal}
        className="bg-[#3F6C29] hover:bg-[#2D5124] text-white py-2 px-4 rounded cursor-pointer transition duration-300 self-end my-2">
        Tambah Alamat
      </button>

      {isModalOpen && (
        <div className="bg-black/70 flex w-full h-full justify-center items-center top-0 left-0 fixed">
          <div className="bg-white p-5 rounded-xl text-center">
            <div className="flex justify-between align-center my-3">
              <h2 className="text-lg font-semibold mb-2">Tambah Alamat Baru</h2>
              <span
                className="cursor-pointer font-semibold mb-2"
                onClick={closeModal}>
                X
              </span>
            </div>

            <div className='space-y-4'>
              <input
                type="text"
                name="name"
                placeholder="Nama Tempat"
                value={newAddress.name}
                onChange={handleInputChange}
                className="w-full p-3 border-slate-400 border rounded-lg block"
              />
              <input
                type="text"
                name="address"
                placeholder="Alamat Lengkap"
                value={newAddress.address}
                onChange={handleInputChange}
                className="w-full p-3 border-slate-400 border rounded-lg block"
              />
              <button
                onClick={addAddress}
                className="bg-[#3F6C29] hover:bg-[#2D5124] w-full text-white py-2 px-4 rounded cursor-pointer transition duration-300">
                Tambah Alamat
              </button>
            </div>
          </div>
        </div>
      )}

      {addresses.map((address, index) => (
        <div
          key={index}
          className="p-8 border border-solid border-lightgray-500 rounded-lg my-4 xl:mx-4 lg:mx-4"
          style={{ minWidth: '99%' }}>
          <h2 className="text-lg font-semibold mb-2">{address.name}</h2>
          <p>{address.address}</p>
        </div>
      ))}
    </div>
  )
}
