import React from "react";
import { Button } from "./ui/button";

const BookASession = () => {
  return (
    <div className=" w-full bg-[#1A1A1A] py-[60px] px-5 rounded-[32px] text-white flex flex-col justify-center items-center gap-8 ">
      <p className="font-sf-pro text-[28px] sm:text-[36px] md:text-[48px] lg:text-[72px] text-center font-semibold leading-[1.15] ">
        Aim at Enhancing Your <br className=" hidden md:flex " /> Outreach Among
        Your Target Demographics
      </p>
      <Button
        type="button"
        className=" shadow-xl bg-secondary text-white py-2.5 px-8 rounded-full "
        style={{
          boxShadow: "0px 4px 20px 0px rgba(32, 170, 144, 0.24)",
        }}
      >
        Book A Session
      </Button>
    </div>
  );
};

export default BookASession;
