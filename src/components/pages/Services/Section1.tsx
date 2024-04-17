import Layout from "@/components/Layout";
import SpeakerIcon from "@/components/icons/SpeakerIcon";
import Assets from "@/constants/assets.constant";
import Image from "next/image";
import React from "react";

const ServicesSection1 = () => {
  return (
    <div className=" relative bg-gradient-to-br from-[#2F53EB14] from-5% via-white to-[#2F53EB14] to-90% z-30 ">
      <Layout>
        <div className=" grid py-16 grid-cols-1 max-lg:justify-items-center lg:grid-cols-12 gap-8 ">
          <div className=" col-span-full lg:col-span-7 flex flex-col gap-6 ">
            <h3 className=" text-primary font-semibold text-4xl lg:text-[44.5px] ">
              1. Interpretation
            </h3>
            <div className=" text-[#1A1A1A99] flex flex-col gap-4 text-base lg:text-lg text-justify w-full max-w-[745px] ">
              <p>
                Experience exceptional interpretation services tailored to your
                needs. Our network of native-speaking professionals ensures
                accurate communication across various languages and industries.
              </p>
              <p>
                Benefit from interpreters well-versed in culture, history, and
                specialized domains, establishing seamless connections for
                effective communication and professional relationships.
              </p>
            </div>
            <div className=" flex flex-col max-lg:items-center gap-4  ">
              <h3 className=" text-xl lg:text-[27.5px] text-primary font-semibold ">
                Why Choose Us for Your Language Interpretation
              </h3>
              <div className=" font-semibold flex flex-wrap justify-center md:grid gap-4 w-fit md:grid-cols-2 ">
                <div className=" w-[220px] lg:w-[267px] flex gap-4 text-sm lg:text-base p-2 border justify-start items-center bg-[#F7F9FF] rounded-[10px] ">
                  <SpeakerIcon /> <p>Stringent Standards</p>
                </div>
                <div className=" w-[220px] lg:w-[267px] flex gap-4 text-sm lg:text-base p-2 border justify-start items-center bg-[#F7F9FF] rounded-[10px] ">
                  <SpeakerIcon fill="#00BF9D" /> <p>Native Expertise</p>
                </div>
                <div className=" w-[220px] lg:w-[267px] flex gap-4 text-sm lg:text-base p-2 border justify-start items-center bg-[#F7F9FF] rounded-[10px] ">
                  <SpeakerIcon fill="#FE8947" /> <p>Cultural Fluency</p>
                </div>{" "}
                <div className=" w-[220px] lg:w-[267px] flex gap-4 text-sm lg:text-base p-2 border justify-start items-center bg-[#F7F9FF] rounded-[10px] ">
                  <SpeakerIcon fill="#F65555" /> <p>Genuine Connections</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-span-full content-center lg:col-span-5 ">
            <Image
              src={Assets.interpretation}
              alt="hero-image-2"
              width={494}
              height={494}
              className=" scale-fast"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ServicesSection1;
