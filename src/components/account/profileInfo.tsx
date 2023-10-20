import React, { useState, ChangeEvent } from "react";

export default function ProfileInfo() {
  const [nama, setNama] = useState("Nama Anda");
  const [tanggalLahir, setTanggalLahir] = useState("DD-MM-YYYY");
  const [jenisKelamin, setJenisKelamin] = useState("Pria");
  const [nomorTelepon, setNomorTelepon] = useState("08588612921");
  const [email, setEmail] = useState("yourprofile@binus.ac.id");

  const handleNamaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNama(e.target.value);
  };

  const handleTanggalLahirChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTanggalLahir(e.target.value);
  };

  const handleJenisKelaminChange = (e: ChangeEvent<HTMLInputElement>) => {
    setJenisKelamin(e.target.value);
  };

  const handleNomorTeleponChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNomorTelepon(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="p-5">
      <div className="pb-3">
        <h2 className="text-lg font-semibold mb-2">Nama</h2>
        <input
          type="text"
          value={nama}
          onChange={handleNamaChange}
          className="text-sm text-gray-600 border rounded-md p-1"
        />
      </div>
      <div className="pb-3">
        <h2 className="text-lg font-semibold mb-2">Tanggal Lahir</h2>
        <input
          type="date"
          value={tanggalLahir}
          onChange={handleTanggalLahirChange}
          className="text-sm text-gray-600 border rounded-md p-1"
        />
      </div>
      <div className="pb-3">
        <h2 className="text-lg font-semibold mb-2">Jenis Kelamin</h2>
        <label>
          <input
            className="mx-1"
            type="radio"
            value="Pria"
            checked={jenisKelamin === "Pria"}
            onChange={handleJenisKelaminChange}
          />
          Pria
        </label>
        <label className="ml-3">
          <input
            className="mx-1"
            type="radio"
            value="Wanita"
            checked={jenisKelamin === "Wanita"}
            onChange={handleJenisKelaminChange}
          />
          Wanita
        </label>
      </div>
      <div className="pb-3">
        <h2 className="text-lg font-semibold mb-2">Nomor Telepon</h2>
        <input
          type="text"
          value={nomorTelepon}
          onChange={handleNomorTeleponChange}
          className="text-sm text-gray-600 border rounded-md p-1"
        />
      </div>
      <div className="pb-3">
        <h2 className="text-lg font-semibold mb-2">Email</h2>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="text-sm text-gray-600 border rounded-md p-1"
        />
      </div>
    </div>
  );
}
