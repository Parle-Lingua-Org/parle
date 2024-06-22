"use client";
import Layout from "@/components/Layout";

// import "./styles.css";

import { WordsSwipper } from "./WordsSwipper";

const OurResources = () => {
  const learnWordsData = [
    {
      color: "#002554",
      words: "/assets/images/flashcards/D2_02.png",
    },
    {
      color: "#DB820C",
      words: "/assets/images/flashcards/D2_03.png",
    },
    {
      color: "#FDC501",
      words: "/assets/images/flashcards/D2_04.png",
    },
    {
      color: "#EE1A24",
      words: "/assets/images/flashcards/D2_05.png",
    },
    {
      color: "#029900",
      words: "/assets/images/flashcards/D2_07.png",
    },
  ];

  const flashCardsData = [
    {
      color: "#fff",
      words: "/assets/images/flashcards/A1_1_01.png",
    },
    {
      color: "#fff",
      words: "/assets/images/flashcards/A1_1_02.png",
    },
    {
      color: "#fff",
      words: "/assets/images/flashcards/A1_1_03.png",
    },
    {
      color: "#fff",
      words: "/assets/images/flashcards/A1_1_04.png",
    },

    {
      color: "#fff",
      words: "/assets/images/flashcards/A1_1_05.png",
    },

    {
      color: "#fff",
      words: "/assets/images/flashcards/A1_1_06.png",
    },

    {
      color: "#fff",
      words: "/assets/images/flashcards/A2_01.png",
    },
    {
      color: "#fff",
      words: "/assets/images/flashcards/A2_02.png",
    },

    {
      color: "#fff",
      words: "/assets/images/flashcards/A2_03.png",
    },

    {
      color: "#fff",
      words: "/assets/images/flashcards/A2_04.png",
    },

    {
      color: "#fff",
      words: "/assets/images/flashcards/A2_05.png",
    },

    {
      color: "#fff",
      words: "/assets/images/flashcards/A2_06.png",
    },

    {
      color: "#fff",
      words: "/assets/images/flashcards/A3_01.png",
    },

    {
      color: "#fff",
      words: "/assets/images/flashcards/A3_02.png",
    },

    {
      color: "#fff",
      words: "/assets/images/flashcards/A3_02.png",
    },

    {
      color: "#fff",
      words: "/assets/images/flashcards/A3_03.png",
    },


    {
      color: "#fff",
      words: "/assets/images/flashcards/A3_04.png",
    },

    {
      color: "#fff",
      words: "/assets/images/flashcards/A3_05.png",
    },

    {
      color: "#fff",
      words: "/assets/images/flashcards/A3_06.png",
    },



    
    {
      color: "#fff",
      words: "/assets/images/flashcards/B1_01.png",
    },


    {
      color: "#fff",
      words: "/assets/images/flashcards/B1_02.png",
    },


    {
      color: "#fff",
      words: "/assets/images/flashcards/B1_03.png",
    },
    

    {
      color: "#fff",
      words: "/assets/images/flashcards/B1_04.png",
    },


    {
      color: "#fff",
      words: "/assets/images/flashcards/B1_05.png",
    },

    {
      color: "#fff",
      words: "/assets/images/flashcards/B1_06.png",
    },

    {
      color: "#fff",
      words: "/assets/images/flashcards/B1_07.png",
    },
    
    {
      color: "#fff",
      words: "/assets/images/flashcards/B1_08.png",
    },

    {
      color: "#fff",
      words: "/assets/images/flashcards/B2_01.png",
    },

    {
      color: "#fff",
      words: "/assets/images/flashcards/B2_02.png",
    },

    {
      color: "#fff",
      words: "/assets/images/flashcards/B2_03.png",
    },

    {
      color: "#fff",
      words: "/assets/images/flashcards/B2_04.png",
    },

    {
      color: "#fff",
      words: "/assets/images/flashcards/B2_05.png",
    },

    {
      color: "#fff",
      words: "/assets/images/flashcards/B2_06.png",
    },

    {
      color: "#fff",
      words: "/assets/images/flashcards/B2_07.png",
    },

    {
      color: "#fff",
      words: "/assets/images/flashcards/B2_08.png",
    },

    {
      color: "#fff",
      words: "/assets/images/flashcards/B3_01.png",
    },
    {
      color: "#fff",
      words: "/assets/images/flashcards/B3_02.png",
    },
    {
      color: "#fff",
      words: "/assets/images/flashcards/B3_03.png",
    },
    {
      color: "#fff",
      words: "/assets/images/flashcards/B3_04.png",
    },
    {
      color: "#fff",
      words: "/assets/images/flashcards/B3_05.png",
    },
    {
      color: "#fff",
      words: "/assets/images/flashcards/B3_06.png",
    },
    {
      color: "#fff",
      words: "/assets/images/flashcards/B3_07.png",
    },

    {
      color: "#fff",
      words: "/assets/images/flashcards/B3_08.png",
    },
    {
      color: "#fff",
      words: "/assets/images/flashcards/C1_01.png",
    },
    {
      color: "#fff",
      words: "/assets/images/flashcards/C1_02.png",
    },
    {
      color: "#fff",
      words: "/assets/images/flashcards/C1_03.png",
    },
    {
      color: "#fff",
      words: "/assets/images/flashcards/C1_04.png",
    },
    {
      color: "#fff",
      words: "/assets/images/flashcards/C1_05.png",
    },
    {
      color: "#fff",
      words: "/assets/images/flashcards/C1_06.png",
    },

    {
      color: "#fff",
      words: "/assets/images/flashcards/C1_07.png",
    },
    {
      color: "#fff",
      words: "/assets/images/flashcards/C1_08.png",
    },
    {
      color: "#fff",
      words: "/assets/images/flashcards/C2_01.png",
    },
    {
      color: "#fff",
      words: "/assets/images/flashcards/C2_02.png",
    },

    {
      color: "#fff",
      words: "/assets/images/flashcards/C2_03.png",
    },
    {
      color: "#fff",
      words: "/assets/images/flashcards/C2_04.png",
    },

    {
      color: "#fff",
      words: "/assets/images/flashcards/C2_05.png",
    },
    {
      color: "#fff",
      words: "/assets/images/flashcards/C2_06.png",
    },

    {
      color: "#fff",
      words: "/assets/images/flashcards/C2_07.png",
    },

    {
      color: "#fff",
      words: "/assets/images/flashcards/C2_08.png",
    },

    {
      color: "#fff",
      words: "/assets/images/flashcards/D1_01.png",
    },
    {
      color: "#fff",
      words: "/assets/images/flashcards/D1_02.png",
    },
    {
      color: "#fff",
      words: "/assets/images/flashcards/D1_04.png",
    },

    {
      color: "#fff",
      words: "/assets/images/flashcards/D1_05.png",
    },


    {
      color: "#fff",
      words: "/assets/images/flashcards/D1_06.png",
    },
    

    {
      color: "#fff",
      words: "/assets/images/flashcards/D1_07.png",
    },

    {
      color: "#fff",
      words: "/assets/images/flashcards/D1_08.png",
    },


    // // {
    // //   color: "#fff",
    // //   words: "/assets/images/flashcards/D2_01.png",
    // // },
    
    // {
    //   color: "#fff",
    //   words: "/assets/images/flashcards/D2_02.png",
    // },
    

    // {
    //   color: "#fff",
    //   words: "/assets/images/flashcards/D2_03.png",
    // },
    
    // {
    //   color: "#fff",
    //   words: "/assets/images/flashcards/D2_04.png",
    // },
    
    // {
    //   color: "#fff",
    //   words: "/assets/images/flashcards/D2_05.png",
    // },
    
    // // {
    // //   color: "#fff",
    // //   words: "/assets/images/flashcards/D2_06.png",
    // // },
    
    // {
    //   color: "#fff",
    //   words: "/assets/images/flashcards/D2_07.png",
    // },
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
          <p className="text-[#DDDDDD] text-sm md:text-base text-center mb-5">
            Learn different words in different languages.
          </p>

          <WordsSwipper data={learnWordsData} />
        </div>

        <div className="w-[90%] md:w-[510px] bg-[#00BF9D] relative flex flex-col justify-center items-center rounded-[32px] px-5 md:px-[82px] py-8 md:py-10">
          <h1 className="h3 text-white font-sf-pro text-5xl font-semibold mt-[2px]">
            Flash Cards
          </h1>
          <p className="text-[#fff]/90 text-sm md:text-base text-center mb-5">
            Get our flash cards for self paced practice.
          </p>

          <WordsSwipper data={flashCardsData} />
        </div>
      </div>
    </Layout>
  );
};

export default OurResources;
