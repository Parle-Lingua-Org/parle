import Layout from "@/components/Layout";
import ReadMore from "@/components/ReadMore/ReadMore";
import Assets from "@/constants/assets.constant";
import Image from "next/image";
import React from "react";

const ServicesSection2 = () => {
  return (
    <div className=" bg-[#F7F9FF] py-8 ">
      <Layout>
        <div className=" grid py-16 grid-cols-1 lg:grid-cols-12 gap-8 ">
          <div className="max-lg:order-2 justify-self-center  lg:col-span-5 ">
            <Image
              src={Assets.translation}
              alt="hero-image-2"
              width={494}
              height={494}
              className=" scale-fast"
            />
          </div>
          <div className=" max-lg:order-1 col-span-full lg:col-span-7 justify-center  flex flex-col gap-6 ">
            <h3 className=" text-primary font-semibold text-4xl lg:text-[44.5px] ">
              2. Translation
            </h3>
            <div className="text-[#1A1A1A99] flex flex-col gap-4 text-base lg:text-lg text-justify w-full max-w-[745px] ">
              <p>
                Our translation services offer unparalleled expertise across
                various domains, from creative copy-writing to legal, technical,
                and financial documents.
              </p>
              <ReadMore>
                <p>
                  We ensure linguistic and cultural appropriateness, employing
                  native speakers and specialists in each field. With a focus on
                  accuracy, timeliness, and adaptability to client needs, we
                  consistently deliver high-quality translations that resonate
                  with target audiences worldwide.
                </p>
              </ReadMore>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ServicesSection2;
