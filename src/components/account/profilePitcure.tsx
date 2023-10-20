import React, { useState, ChangeEvent } from "react";

export default function ProfilePicture() {
  const [imageURL, setImageURL] = useState<string>(
    "https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg"
  );

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        setImageURL(reader.result);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-1/2 p-8 border border-solid border-lightgray-500 rounded-lg mx-5">
      <img className="mb-5" src={imageURL} alt="" width={100} />
      <label
        htmlFor="fileInput"
        className="bg-[#3F6C29] hover:bg-[#2D5124] text-white py-2 px-4 rounded cursor-pointer transition duration-300"
      >
        Pilih Foto
      </label>
      <input
        type="file"
        id="fileInput"
        accept=".jpg, .jpeg, .png"
        className="hidden"
        onChange={handleImageChange}
      />
      <p style={{ width: 100, fontSize: 12 }} className="mt-5">
        Besar file: maksimum 10 Megabytes. Ekstensi file yang diperbolehkan:
        .JPG .JPEG .PNG
      </p>
    </div>
  );
}
