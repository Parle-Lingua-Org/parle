"use client";
import Layout from "@/components/Layout";
import Assets from "@/constants/assets.constant";
import Image from "next/image";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

const OurResources = () => {
  const swiperRef = React.useRef<SwiperType>();
  return (
    <Layout className="flex flex-col gap-4 items-center py-10">
      <h1 className="h2 text-center text-primary">Our Resources</h1>
      <p className="text-base text-lightText1">Practice with our flashcards</p>

      {/* <div className="flex justify-between gap-10 overflow-auto lg:max-w-[80%] pt-5">
        <Image
          src={Assets.learnWords}
          width={1000}
          height={1000}
          alt="Learn Words"
          className=""
        />
        <Image
          src={Assets.flashCards}
          width={1000}
          height={1000}
          alt="Learn Words"
          className=""
        />
      </div> */}
      <div className=" h-[500px] relative w-full flex items-center justify-center ">
        <div className=" absolute z-20 w-[300px] flex justify-between left-5 ">
          <button onClick={() => swiperRef.current?.slidePrev()}>Prev</button>
          <button onClick={() => swiperRef.current?.slideNext()}>Next</button>
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          // loop={true}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Navigation, Pagination]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="mySwiper"
        >
          <SwiperSlide className=" !w-[300px] border border-black rounded-xl bg-amber-100 flex flex-col items-center justify-center !h-[500px] text-center ">
            <div className="flex flex-col h-full items-center justify-center">
              Slide 1
            </div>
          </SwiperSlide>
          <SwiperSlide className=" !w-[300px] border border-black rounded-xl bg-amber-200 flex flex-col items-center justify-center !h-[500px] text-center ">
            <div className="flex flex-col h-full items-center justify-center">
              Slide 2
            </div>
          </SwiperSlide>
          <SwiperSlide className=" !w-[300px] border border-black rounded-xl bg-amber-300 flex flex-col items-center justify-center !h-[500px] text-center ">
            <div className="flex flex-col h-full items-center justify-center">
              Slide 3
            </div>
          </SwiperSlide>
          <SwiperSlide className=" !w-[300px] border border-black rounded-xl bg-amber-400 flex flex-col items-center justify-center !h-[500px] text-center ">
            <div className="flex flex-col h-full items-center justify-center">
              Slide 4
            </div>
          </SwiperSlide>
          <SwiperSlide className=" !w-[300px] border border-black rounded-xl bg-amber-500 flex flex-col items-center justify-center !h-[500px] text-center ">
            <div className="flex flex-col h-full items-center justify-center">
              Slide 5
            </div>
          </SwiperSlide>
          <SwiperSlide className=" !w-[300px] border border-black rounded-xl bg-amber-600 flex flex-col items-center justify-center !h-[500px] text-center ">
            <div className="flex flex-col h-full items-center justify-center">
              Slide 6
            </div>
          </SwiperSlide>
          <SwiperSlide className=" !w-[300px] border border-black rounded-xl bg-amber-700 flex flex-col items-center justify-center !h-[500px] text-center ">
            <div className="flex flex-col h-full items-center justify-center">
              Slide 7
            </div>
          </SwiperSlide>
          <SwiperSlide className=" !w-[300px] border border-black rounded-xl bg-amber-800 flex flex-col items-center justify-center !h-[500px] text-center ">
            <div className="flex flex-col h-full items-center justify-center">
              Slide 8
            </div>
          </SwiperSlide>
          <SwiperSlide className=" !w-[300px] border border-black rounded-xl bg-amber-900 flex flex-col items-center justify-center !h-[500px] text-center ">
            <div className="flex flex-col h-full items-center justify-center">
              Slide 9
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </Layout>
  );
};

export default OurResources;
