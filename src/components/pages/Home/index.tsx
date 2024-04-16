"use client";
import Assets from "@/constants/assets.constant";
import React from "react";
import Image from "next/image";
import Layout from "@/components/Layout";
import Header from "./Header";
import WhyUs from "./WhyUs";

const HomePage = () => {
  return (
    <div className="w-full relative">
      <Header />
      <WhyUs />
    </div>
  );
};

export default HomePage;
