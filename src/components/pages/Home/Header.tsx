import { BookASessionButton } from "@/components/Buttons";
import { VideoComponentMain } from "@/components/icons/VideoIcon";
import Layout from "@/components/Layout";
import Assets from "@/constants/assets.constant";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="w-full h-[90vh] sm:h-[80vh] bg-parle bg-blend-multiply bg-no-repeat bg-cover bg-top mt-2">
        {/* <div className="w-full absolute top-0 left-0">
        <Image
          src={Assets.bgPattern}
          alt="pattern"
          className="w-full"
          width={1000}
          height={1000}
        />
      </div> */}
        <div className=" w-full h-full bg-[#f5f6fa]/50 pt-32 lg:pt-0">
          <Layout className="w-full flex flex-col lg:flex-row h-full justify-center items-center px-10 gap-2">
            <div className="lg:w-[60%] flex flex-col gap-6 justify-center h-full">
              <h1 className="text-3xl sm:text-5xl lg:text-[82px] max-lg:text-center text-primary lg:leading-[5rem] font-extrabold font-sf-pro">
                Leading Linguistic <br className=" hidden lg:block " /> Service
                Provider <br className=" hidden lg:block " /> You Can Trust
              </h1>
              <p className="text-lightText1 leading-9 text-lg max-lg:text-center lg:w-[80%]">
                We will carefully listen first to what your exact demands are
                and then offer you with language solutions that perfectly fits
                those unique preferences.
              </p>
            </div>
            <div className="lg:w-[40%] h-full flex flex-col justify-center items-center gap-5 relative">
              <Image
                src={Assets.heroImg1}
                alt="hero-image-1"
                unoptimized
                className="w-[80%] self-start scale-fast"
              />

              <Image
                src={Assets.heroImg2}
                alt="hero-image-2"
                unoptimized
                className="w-full scale-fast"
              />

              <Image
                src={Assets.heroImg3}
                alt="hero-image-3"
                unoptimized
                className="w-[80%] self-end scale-fast"
              />
            </div>
          </Layout>
        </div>
      </div>

      <Layout className="relative w-full flex flex-col h-full justify-center items-center  pb-10">
        <div className="w-full -mt-5 md:-mt-10 relative">
          <div className="w-full max-h-[450px] sm:h-[450px] overflow-hidden rounded-[32px]">
            <video
              autoPlay
              loop
              src={"/assets/videos/capital-africa.mp4"}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="mt-5" />
        <BookASessionButton />
        <div className="mt-10" />
        <div className="flex max-md:flex-col gap-y-4 header__stats">
          <div>
            <h1>58+</h1>
            <p>Clients have successfully launched their products</p>
          </div>

          <div>
            <h1>60+</h1>
            <p>Products & projects have been successfully delivered</p>
          </div>

          <div>
            <h1>9/10</h1>
            <p>Client satisfaction rate</p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Header;
