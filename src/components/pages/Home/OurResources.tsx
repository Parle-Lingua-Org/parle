"use client";
import Layout from "@/components/Layout";

// import "./styles.css";

import { WordsSwipper } from "./WordsSwipper";

const OurResources = () => {
  const learnWordsData = [
    {
      color: "#FB8E87",
      words: "Lorem ipsum dolor",
    },
    {
      color: "#FFE263",
      words: "Lorem ipsum dolor",
    },
    {
      color: "#D49EF3",
      words: "Lorem ipsum dolor",
    },
    {
      color: "#FB8E87",
      words: "Lorem ipsum dolor",
    },
    {
      color: "#FB8E87",
      words: "Lorem ipsum dolor",
    },
  ];

  return (
    <Layout className="flex flex-col gap-4 items-center py-10">
      <h1 className="h2 text-center text-primary">Our Resources</h1>
      <p className="text-base text-lightText1">Practice with our flashcards</p>
      <div className="relative w-full my-16 flex items-center justify-center gap-5 flex-wrap">
        <div className="w-[90%] md:w-[510px] bg-[#8862D6] relative flex flex-col justify-center items-center rounded-[32px] px-5 md:px-[82px] py-8 md:py-10">
          <h1 className="h3 text-white font-sf-pro text-5xl font-semibold mt-[2px]">
            Learn Words
          </h1>
          <p className="text-[#DDDDDD] text-md mb-5">
            Learn different words in different languages.
          </p>

          <WordsSwipper data={learnWordsData} />
        </div>

        <div className="w-[90%] md:w-[510px] bg-[#00BF9D] relative flex flex-col justify-center items-center rounded-[32px] px-5 md:px-[82px] py-8 md:py-10">
          <h1 className="h3 text-white font-sf-pro text-5xl font-semibold mt-[2px]">
            Flash Cards
          </h1>
          <p className="text-[#DDDDDD] text-md mb-5">
            Get our flash cards for self paced practice.
          </p>

          <WordsSwipper data={learnWordsData} />
        </div>
      </div>
    </Layout>
  );
};

export default OurResources;
