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
      className="mySwiper w-[80%] sm:w-[300px] h-[300px]"
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

      <div className="z-20 prev -left-[10%] absolute top-[30%] cursor-pointer">
        <SwiperPrevIcon />
      </div>
      <div className="z-20 next -right-[10%] absolute top-[30%] cursor-pointer">
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
      <h1 className="font-sf-pro font-semibold text-sm">{data.words}</h1>
    </div>
  );
};
