import Layout from "@/components/Layout";
import VideoComponent from "@/components/icons/VideoIcon";
import AboutHeader from "@/components/pages/About/Header";
import AboutSection from "@/components/pages/About/Section";
import Assets from "@/constants/assets.constant";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="relative">
      <AboutHeader />
      <AboutSection />
    </div>
  );
};

export default AboutUs;
