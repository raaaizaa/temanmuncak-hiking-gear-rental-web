"use client";
import React, { useState } from "react";
import ProfileInfo from "./profileInfo";
import ProfilePicture from "./profilePitcure";
import AddressList from "./addressList";

type TabType = "editProfile" | "address" | "payment";

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState<TabType>("editProfile");

  const handleTabClick = (tab: TabType) => {
    setActiveTab(tab);
  };

  return (
    <div
      className="flex justify-center items-center p-9"
      style={{ backgroundColor: "#fff", color: "#000" }}
    >
      <div className="border border-solid border-lightgray-500 rounded-lg p-4 flex w-3/4">
        <div className="w-1/4 p-4 border-r border-solid border-lightgray-500">
          <h2 className="text-lg font-semibold mb-4">Your Profile</h2>
          <button
            onClick={() => handleTabClick("editProfile")}
            className={`hover:cursor-pointer hover:scale-110 ease-in duration-100 block mb-2 ${
              activeTab === "editProfile" ? "font-semibold text-[#3F6C29]" : ""
            }`}
          >
            Edit Profile
          </button>
          <button
            onClick={() => handleTabClick("address")}
            className={`hover:cursor-pointer hover:scale-110 ease-in duration-100 block mb-2 ${
              activeTab === "address" ? "font-semibold text-[#3F6C29]" : ""
            }`}
          >
            Daftar Alamat
          </button>
          <button
            onClick={() => handleTabClick("payment")}
            className={`hover:cursor-pointer hover:scale-110 ease-in duration-100 block ${
              activeTab === "payment" ? "font-semibold text-[#3F6C29]" : ""
            }`}
          >
            Pembayaran
          </button>
        </div>

        {activeTab === "editProfile" && (
          <div className="flex">
            <ProfilePicture />
            <ProfileInfo />
          </div>
        )}
        {activeTab === "address" && (
          <div className="flex w-3/4">
            <AddressList />
          </div>
        )}
      </div>
    </div>
  );
}
