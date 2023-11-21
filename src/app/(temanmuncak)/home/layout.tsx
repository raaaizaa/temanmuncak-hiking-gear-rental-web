"use client";
import { AuthContext } from "@/components/context/auth-context";
import Goals from "@/components/templates/homepage/goals";
import Landing from "@/components/templates/homepage/landing";
import MountainGrid from "@/components/templates/homepage/mountain-grid";
import Review from "@/components/templates/homepage/review";
import React, { useContext, useEffect } from "react";

export default function HomePage() {
  const isAuthenticated = useContext(AuthContext).isAuthenticated;
  useEffect(() => {
    if (!isAuthenticated) {
      window.location.replace("/login");
    }
  }, []);

  return (
    <div>
      <Landing />
      <div className="bg-white text-black px-4 sm:px-12 md:px-20 lg:px-24 xl:px-32">
        <MountainGrid />
      </div>
      <Goals />
      <Review />
    </div>
  );
}
