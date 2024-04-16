import Layout from "@/components/Layout";
import Assets from "@/constants/assets.constant";
import Image from "next/image";
import React from "react";

const OurResources = () => {
  return (
    <Layout className="flex flex-col items-center py-10">
      <h1 className="h2 text-center text-primary">Our Resources</h1>
      <p className="text-base text-lightText1">Practice with our flashcards</p>

      <div className="flex justify-between gap-10 max-w-[80%] pt-5">
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
      </div>
    </Layout>
  );
};

export default OurResources;
