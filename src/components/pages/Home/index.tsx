"use client";
import "./Home.scss";
import Header from "./Header";
import WhyUs from "./WhyUs";
import Testimonials from "./Testimonials";
import OurResources from "./OurResources";

const HomePage = () => {
  return (
    <div className="w-full relative ">
      <Header />
      <WhyUs />
      <OurResources />
      <Testimonials />
    </div>
  );
};

export default HomePage;
