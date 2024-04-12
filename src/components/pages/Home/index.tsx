import Assets from "@/constants/assets.constant";
import React from "react";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="w-full relative px-10">
      <div className="w-full absolute top-0 left-0">
        <Image
          src={Assets.bgPattern}
          alt="pattern"
          className="w-full"
          width={1000}
          height={1000}
        />
      </div>

      <div className="w-full flex h-screen">
        <div className="w-[60%] flex flex-col items-center justify-center h-full">
          <h1 className="text-6xl text-primary leading-[5rem] font-extrabold">
            Leading Linguistic Service Provider You Can Trust
          </h1>
          <p className="text-lightText1 leading-9 text-lg">
            We will carefully listen first to what your exact demands are and
            then offer you with language solutions that perfectly fits those
            unique preferences.
          </p>
        </div>
        <div className="w-[40%] h-full">...</div>
      </div>
    </div>
  );
};

export default HomePage;
