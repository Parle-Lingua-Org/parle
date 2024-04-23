"use client";
import { BookASessionButton } from "@/components/Buttons";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Assets from "@/constants/assets.constant";
import Image from "next/image";
import React, { useState } from "react";

const OurServices = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const servicesData = [
    {
      title: "Interpretation",
      desc: `We pride ourselves on our large network of professionals (linguists, translators and interpreters) all of whom have native proficiency in the target languages and are highly trained in their domains, giving them the edge of knowing the required vernacular of the language pair. Our interpreters have thorough experience in the industry and are therefore very well-versed with the culture, history and belief systems of the target language, enabling you to communicate well and establish a healthy and professional relationship.`,
      image: Assets.interprete,
    },
    {
      title: "Translation",
      desc: `With our several years of experience in the translation industry, it has yielded us an unrivalled level of expertise in all areas and domains that require this service. 
      From creative copy-writing in foreign languages to legal translation or from the translation of technical manuals to complex terminology laden documents for the financial services sector, we can translate it all: not to mention in budget and on time!`,
      image: Assets.translation,
    },
    {
      title: "Language Training",
      desc: `At Parle Lingua services, we not only understand this, but also provide language training solutions to meet these changing global demands. 
      We provide language trainings at corporate as well as individual level and ensure that wherever and whenever they are conducted, they are tailored according to our clients’ needs.`,
      image: Assets.training,
    },
    {
      title: "Voice Over/Dubbing",
      desc: `At Parle Lingua Services, we have our in house team of professional voice over artists who can competently help you convey your thoughts, ideas and visions in the words and languages of your prospects. 
      Parle Lingua Services offers impeccable voice over localisation services in multiple languages (English, French, Spanish). 
      Our top-grade voice productions can help you deliver the exact message which you wish to deliver to your target audience.`,
      image: Assets.voiceover,
    },
  ];

  const currentService = servicesData[currentServiceIndex];

  return (
    <div className="bg-primary">
      <Layout className="flex flex-col gap-[5%] items-center py-10">
        <h1 className="h2 text-center text-white pb-10">Our Services</h1>
        <div className="flex w-full rounded-[32px] bg-white h-[400px] overflow-auto">
          <div className="flex-[25%] border-r-[1px] border-grey50 flex flex-col justify-center font-sf-pro">
            {servicesData.map(({ title }, index) => (
              <div
                key={index}
                className={`border-r-[5px] text-base md:text-xl font-semibold text-[#0A1F44] h-[60px] md:h-[80px] w-full flex items-center pl-[30px] md:pl-[50px] transition duration-300 cursor-pointer hover:bg-[#3F4E9333]/20 ${
                  currentServiceIndex === index
                    ? "bg-[#3F4E9333] border-r-[#3F4E93]"
                    : "border-r-transparent"
                }`}
                onClick={() => {
                  setCurrentServiceIndex(index);
                }}
              >
                {title}
              </div>
            ))}
          </div>

          <div className="flex-[45%] flex flex-col justify-center gap-4 px-5 py-2">
            <h1 className="text-lightText6 text-xl font-semibold font-sf-pro">
              {currentService.title}
            </h1>

            <p className="text-grey60 text-sm md:text-base text-justify font-[300] md:leading-7 line-clamp-[9]">
              {currentService.desc}
            </p>

            <div className="flex gap-3">
              <Button className="text-purple1 border-purple1 border-[1px] bg-transparent rounded-[100px] py-4 px-9 scale-fast">
                Read More
              </Button>
              <BookASessionButton />
            </div>
          </div>

          <div className="flex-[20%] justify-center items-center pr-5 hidden md:flex">
            <Image
              src={currentService.image}
              width={500}
              height={500}
              alt={currentService.title}
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default OurServices;
