"use client";
import "./Home.scss";
import Header from "./Header";
import WhyUs from "./WhyUs";
import Testomonials from "./Testomonials";

const HomePage = () => {
  return (
    <div className="w-full relative">
      <Header />
      <WhyUs />
      <Testomonials />
    </div>
  );
};

export default HomePage;
