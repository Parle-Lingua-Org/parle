"use client";
import { BookASessionButton } from "@/components/Buttons";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Assets from "@/constants/assets.constant";
import Image from "next/image";
import React from "react";

const OurServices = () => {
  return (
    <div className="bg-primary">
      <Layout className="flex flex-col gap-[5%] items-center py-10">
        <h1 className="h2 text-center text-white pb-10">Our Services</h1>
        <div className="flex w-full rounded-[32px] bg-white h-[450px]">
          <div className="flex-[25%] border-r-[1px] border-grey50">
            <h1>Interpretation</h1>
          </div>
          <div className="flex-[45%] flex flex-col gap-4">
            <h1 className="text-lightText6 font-semibold font-sf-pro">
              Interpretation
            </h1>

            <p className="text-grey60">
              We pride ourselves on our large network of professionals
              (linguists, translators and interpreters) all of whom have native
              proficiency in the target languages and are highly trained in
              their domains, giving them the edge of knowing the required
              vernacular of the language pair. Our interpreters have thorough
              experience in the industry and are therefore very well-versed with
              the culture, history and belief systems of the target language,
              enabling you to communicate well and establish a healthy and
              professional relationship.
            </p>

            <div className="flex gap-5">
              <Button
                variant={"outline"}
                className="text-white rounded-[100px] py-2.5 px-8 scale-fast"
              >
                Read More
              </Button>
              <BookASessionButton />
            </div>
          </div>

          <div className="flex-[20%]">
            <Image
              src={Assets.interprete}
              width={500}
              height={500}
              alt="interprete"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default OurServices;
