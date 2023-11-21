import React from "react";

const reviews = [
  {
    name: "Hendrik Lim",
    rating: 5,
    review:
      "Temanmuncak emang juara banget! Gampang banget cari alat dan proses peminjaman cepet. Alatnya juga bagus, gaada masalah.",
  },
  {
    name: "Budi Pratama",
    rating: 5,
    review:
      "Temanmuncak keren abis! Gue bisa nyewa alat dengan mudah, UI-nya user-friendly banget. Prosesnya lancar, alatnya juga oke. Gak ribet, pokoknya top lah!",
  },
  {
    name: "Andy Surya",
    rating: 5,
    review:
      "Aplikasi Temanmuncak bener-bener membantu buat rencana hiking. Peminjaman lancar, alatnya juga gaada masalah. Seneng deh, bikin perjalanan makin seru!",
  },
];

export default function Review() {
  return (
    <div className="bg-white px-4 sm:px-12 md:px-20 lg:px-24 xl:px-32 py-12 md:py-16 lg:py-20">
      <h2 className="text-3xl mb-8 text-center text-black">Review</h2>
      <div className="flex flex-wrap justify-center gap-8 text-black">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-md shadow-md mb-8 md:w-1/2 lg:w-1/3 xl:w-1/4"
          >
            <div className="flex items-center mb-4">
              <div>
                <p className="text-2xl font-bold">{review.name}</p>
                {Array.from({ length: review.rating }, (_, starIndex) => (
                  <span key={starIndex}>⭐️</span>
                ))}
              </div>
            </div>
            <p className="text-gray-700">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
