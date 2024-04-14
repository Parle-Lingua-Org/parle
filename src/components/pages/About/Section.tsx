import BookASession from "@/components/BookASession";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Assets from "@/constants/assets.constant";
import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <div className=" flex flex-col gap-20 bg-primary py-12 ">
      <Layout className=" text-white py-8 flex flex-col gap-10 ">
        <h3 className=" text-center lg:text-left text-3xl sm:text-5xl lg:text-7xl font-semibold ">
          Our <br className=" hidden lg:block " /> Lead Linguist
        </h3>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-y-10 max-lg:place-items-center  ">
          <div className=" w-full max-w-full lg:max-w-[515px]  flex flex-col gap-6 text-justify ">
            <p>
              Jemima has got a strong vision to help eliminate multicultural
              communication barriers across board through innovative
              language-based solutions, exceptional customer service support and
              superior linguistic quality.
            </p>
            <p>
              As the lead linguist and General Manager of Parle Lingua Services,
              she is actively involved in guiding the company&apos;s strategic
              direction and future business operations.
            </p>
            <p>
              She is responsible for focusing on the big picture items that are
              vital to Parle Lingua Service&apos;s overall success, such as the
              development and maintenance of strategic alliance partnerships
              with companies both in and outside of the professional language
              services industry.
            </p>
            <p>
              Jemima is a graduate of The Universite Lumiere, Iyon, France with
              a Bachelor of Arts degree in Lingusitics and also an MBA in
              international hospitality management from EAE Business School in
              Spain.
            </p>
          </div>
          <div className=" flex flex-col gap-4 w-full justify-center items-center ">
            <Image
              src={Assets.jemima}
              alt="Jemima"
              className="rounded-[32px] w-full max-w-[450px] h-full max-h-[450px] object-cover "
              width={450}
              height={450}
            />
            <div className="flex flex-col gap-1.5 justify-center items-center">
              <h3 className=" text-2xl font-semibold ">Jemima Onyinye Ude</h3>
              <p className=" text-white/80 ">Lead Linguist, General Manager</p>
            </div>
          </div>
        </div>
      </Layout>
      <Layout>
        <BookASession />
      </Layout>
    </div>
  );
};

export default AboutSection;
