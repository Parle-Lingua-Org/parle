import Layout from "@/components/Layout";
import Assets from "@/constants/assets.constant";
import Image from "next/image";
import React from "react";

const Testomonials = () => {
  return (
    <Layout className="h-[500px] bg-primary py-16 flex flex-col items-center">
      <h1 className="h2 text-white text-center">Testimonials/Reviews</h1>

      <p className="text-base text-lightText3">
        Don’t just take our word for it. Here are a few (of many) reviews of
        Parle Lingua.
      </p>

      <div className="flex overflow-hidden">
        <div className="px-12 py-6 rounded-[32px] bg-white">
          <p className="text-lightText1 leading-[28px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            bibendum auctor nisl ut molestie. Suspendisse potenti. Donec nec
            nulla vulputate, luctus tortor nec, consequat felis.
          </p>

          <div className="flex">
            <Image
              src={Assets.avater1}
              width={30}
              height={30}
              className=""
              alt="avater"
            />
            <div>
              <h1>Mike Warren</h1>
              <p>Product Manager at Zapier</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Testomonials;
