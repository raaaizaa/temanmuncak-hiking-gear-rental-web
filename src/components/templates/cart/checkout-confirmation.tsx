'use client'
import CustomDropdown from '@/components/ui/dropdown/custom-dropdown'
import { Button, Checkbox } from '@nextui-org/react'
import { format } from 'date-fns'
import React, { useState } from 'react'
import { DayPicker } from 'react-day-picker'
import { FaRegQuestionCircle } from 'react-icons/fa'
import Success from '@/components/ui/success/success'
import { Checkout } from '@/utils/item-handler'

interface props {
  destination: string
  totalPrice: string
  onClick: () => void
}

export default function CheckoutConfirmation({
  destination,
  totalPrice,
  onClick,
}: props) {
  const [selectedDay, setSelectedDay] = useState<Date>()
  const [checkout, setCheckout] = useState(false)
  const [showTnC, setShowTnC] = useState(false)
  const [checkbox, setCheckbox] = useState(false)

  const termsAndCondition = `
  1. Pemesanan dan Pembayaran:
  
  Pemesanan hiking gear dapat dilakukan melalui website kami.
  Pembayaran penuh harus dilakukan pada saat pemesanan.
  Hanya pembayaran yang sudah dikonfirmasi yang akan memastikan reservasi hiking gear.
  2. Jaminan Peminjaman:
  
  Setiap peminjam wajib memberikan jaminan berupa kartu kredit atau dokumen identitas yang berlaku.
  Jaminan akan dikembalikan sepenuhnya setelah pengembalian hiking gear dalam kondisi baik.
  3. Durasi Peminjaman:
  
  Durasi peminjaman dihitung mulai dari waktu pengambilan hingga waktu pengembalian sesuai kesepakatan.
  Perpanjangan peminjaman dapat dilakukan dengan persetujuan dari pihak penyedia.
  4. Kondisi Hiking Gear:
  
  Peminjam bertanggung jawab untuk menjaga dan menggunakan hiking gear dengan baik.
  Peminjam harus melaporkan kerusakan atau kehilangan segera kepada penyedia.
  5. Pembatalan dan Pengembalian:
  
  Pembatalan peminjaman harus dilakukan paling lambat 24 jam sebelum waktu peminjaman.
  Biaya pembatalan dapat dikenakan sesuai kebijakan yang berlaku.
  6. Tanggung Jawab Penggunaan:
  
  Peminjam bertanggung jawab sepenuhnya atas keamanan dan kenyamanan penggunaan hiking gear.
  Pihak penyedia tidak bertanggung jawab atas kecelakaan atau kerugian yang timbul selama penggunaan.
  7. Peraturan Pengembalian Terlambat:
  
  Pengembalian hiking gear harus dilakukan sesuai kesepakatan waktu.
  Biaya keterlambatan dapat dikenakan sesuai kebijakan yang berlaku.
  8. Perubahan Syarat dan Ketentuan:
  
  Pihak penyedia berhak untuk merubah syarat dan ketentuan tanpa pemberitahuan sebelumnya.
  Perubahan tersebut akan berlaku segera setelah diberitahukan.
  9. Kebijakan Privasi:
  
  Data pribadi peminjam akan dijaga kerahasiaannya sesuai dengan kebijakan privasi yang berlaku.
  Dengan melakukan pemesanan, Anda dianggap telah membaca, memahami, dan menyetujui semua syarat dan ketentuan yang tercantum di atas.
  
  Terakhir diperbarui pada November 2023.`

  const footer = selectedDay ? (
    <p>
      Hari peminjaman:{' '}
      <span className="font-bold">{format(selectedDay, 'PPP')}</span>
    </p>
  ) : (
    <p>Pilih hari peminjaman</p>
  )

  const paymentItems = ['Tunai', 'Virtual Account', 'Transfer Bank']
  const deliveryItems = ['Ambil di Gunung', 'Delivery']

  const css = `

  .my-selected:not([disabled]) { 
    font-weight: bold; 
    color: red;
  }
  
  .my-selected:hover:not([disabled]) { 
    color: red;
  }
  
  .my-today { 
    font-weight: bold;
    
  }
  `

  const handleConfirmation = () => {
    if(checkbox){
      setCheckout(true)
      Checkout()
      setTimeout(redirect, 1500)
    }else{
      alert('Baca dan setujui syarat dan ketentuannya dulu yuk!')
    }
  }

  const handleTnC = () => {
    setShowTnC(!showTnC)
  }

  const redirect = () => {
    window.location.replace('/cart')
  }

  return (
    <div className=" z-50 h-full w-full fixed bg-black/50 top-0 left-0 transition-all duration-200 ease-in flex justify-center items-center">
      <style>{css}</style>
      <div className="bg-white h-fit w-[350px] lg:w-[700px] xl:w-[700px] rounded-3xl px-12">
        <div className="py-4 lg:py-8 xl:py-8">
          <div className="block lg:flex xl:flex justify-center items-center lg:space-x-8 xl:space-x-8">
            <div className="block">
              <div className="pb-2">{footer}</div>
              <div className="border-2 rounded-xl p-2">
                <DayPicker
                  mode="single"
                  selected={selectedDay}
                  onSelect={setSelectedDay}
                  modifiersClassNames={{
                    selected: 'my-selected',
                    today: 'my-today',
                  }}
                  classNames={{
                    day: 'p-0 lg:p-4 xl:p-4 ',
                    caption:
                      'flex space-x-8 lg:justify-between xl:justify-between items-center p-0 lg:p-4 xl:p-4',
                  }}
                />
              </div>
            </div>
            <div className="w-full">
              <div className="xl:flex lg:flex justify-center items-center xl:visible lg:visible hidden">
                <FaRegQuestionCircle size={64} />
              </div>
              <div className="flex justify-center items-center">
                <p className="text-center text-black">
                  Kamu yakin mau checkout?
                </p>
              </div>
              <div>
                <div className="">
                  <div className="block items-center justify-center space-y-2 lg:space-y-4 xl:space-y-4 py-4 lg:items-start xl:items-start">
                    <div className="flex justify-center items-center">
                      <CustomDropdown items={paymentItems} />
                    </div>
                    <div className="flex justify-center items-center">
                      <CustomDropdown items={deliveryItems} />
                    </div>
                  </div>
                  <div className="py-4 space-y-4 items-end">
                    <hr />
                    <div>
                      <p className="font-bold">Total: Rp{totalPrice}</p>
                      <p>Destinasi: {destination}</p>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <input type="checkbox" id="t&c" name="t&c" onClick={() => setCheckbox(!checkbox)}/>
                      <label htmlFor="t&c" className="text-xs">
                        Saya setuju dengan{' '}
                        <span
                          className="hover:underline hover:cursor-pointer"
                          onClick={handleTnC}>
                          syarat ketentuan
                        </span>
                      </label>
                    </div>
                    <div className="w-full">
                      <Button
                        className="w-full bg-[#3F6C29] text-white font-bold"
                        onClick={handleConfirmation}>
                        Checkout
                      </Button>
                    </div>
                    <div className="w-full">
                      <Button
                        className="w-full"
                        variant="bordered"
                        onClick={onClick}>
                        Batal
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {checkout && (
        <Success message="Pembayaranmu akan diproses!" onClick={onClick} />
      )}
      {showTnC && (
        <div className="z-50 h-full w-full fixed bg-black/50 top-0 left-0 transition-all duration-200 ease-in flex justify-center items-center">
          <div className="bg-white h-fit w-fit mx-2 rounded-3xl px-12">
            <div className="flex justify-center items-center">
              <div className="py-8">
                <p className="text-2xl text-center font-bold">
                  Syarat dan Ketentuan TemanMuncak
                </p>
                <div className="h-[400px] overflow-scroll">
                  <p style={{ whiteSpace: 'pre-line' }} className="text-sm">
                    {termsAndCondition}
                  </p>
                </div>
                <Button
                  className="w-full bg-[#3F6C29] text-white font-bold mt-4"
                  onClick={handleTnC}>
                  Tutup
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
