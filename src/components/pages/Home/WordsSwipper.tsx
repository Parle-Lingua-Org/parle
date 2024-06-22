// Import Swiper React components
import { Swiper, SwiperRef, SwiperSlide, useSwiper } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
// import required modules
import { Navigation, Pagination, EffectCards } from "swiper/modules";
import { SwiperNextIcon, SwiperPrevIcon } from "@/components/icons";
import { twMerge } from "tailwind-merge";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import Image from "next/image";

interface IWords {
  color: string;
  words: string;
}

export const WordsSwipper = ({ data }: { data: IWords[] }) => {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[Navigation, EffectCards]}
      loop={true}
      className="mySwiper w-[80%] h-[220px] sm:w-[300px] md:h-[300px] relative"
      navigation={{
        prevEl: ".prev",
        nextEl: ".next",
      }}
    >
      {data.map((data, index) => (
        <SwiperSlide key={index}>
          <LearnWordsCard data={data} />
        </SwiperSlide>
      ))}

      <div className="z-20 prev -left-[13%] md:-left-[10%] absolute top-[40%] sm:top-[30%] cursor-pointer shadow-lg rounded-full">
        <SwiperPrevIcon />
      </div>
      <div className="z-20 next -right-[13%] md:-right-[10%] absolute top-[40%] sm:top-[30%] cursor-pointer shadow-lg rounded-full">
        <SwiperNextIcon />
      </div>
    </Swiper>
  );
};

interface ILearnWordsCard {
  data: IWords;
}
export const LearnWordsCard: React.FC<ILearnWordsCard> = ({ data }) => {
  return (
    <div
      className={`w-full h-full flex justify-center items-center`}
      style={{
        backgroundColor: data.color,
      }}
    >
      {/* <h1 className="font-sf-pro font-semibold text-sm">{data.words}</h1> */}
      <Image src={data.words} alt={data.words} className="object-contain h-full w-full" width={1000} height={1000}/>
    </div>
  );
};
