"use client";
import "./Home.scss";
import Header from "./Header";
import WhyUs from "./WhyUs";
import Testimonials from "./Testimonials";

const HomePage = () => {
  return (
    <div className="w-full relative ">
      <Header />
      <WhyUs />
      <Testimonials />
    </div>
  );
};

export default HomePage;
