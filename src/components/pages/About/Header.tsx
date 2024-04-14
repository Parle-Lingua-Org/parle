import Layout from "@/components/Layout";
import PatternHeader from "@/components/PatternHeader";
import VideoComponent from "@/components/icons/VideoIcon";
import React from "react";

const AboutHeader = () => {
  return (
    <div>
      <PatternHeader title="About Us" />
      <div className=" relative bg-gradient-to-br from-[#2F53EB14] from-5% via-white to-[#2F53EB14] to-90% z-30 ">
        <Layout>
          <div className=" grid grid-cols-1 lg:grid-cols-2 max-lg:place-items-center gap-10 py-8 ">
            <div className="  flex flex-col w-full max-w-full lg:max-w-[535px] gap-3 lg:gap-6 leading-7 text-justify ">
              {/* <div className=" bg-gradient-to-br from-[#2F53EB14] via-transparent to-transparent z-10 w-1/3 h-full absolute left-0 top-0 " /> */}
              <p>
                Parle Lingua Services is a dynamic company specializing in
                translation, interpretation, and language training. Our
                dedicated team of language experts is committed to facilitating
                seamless communication across cultures.
              </p>
              <p>
                With a focus on precision and cultural sensitivity, we offer a
                wide range of language solutions tailored to meet the needs of
                individuals and businesses alike. From official document
                translation to website localization and beyond, we deliver
                top-notch linguistic support in major Asian and European
                languages.
              </p>
              <p>
                With a proven track record of client satisfaction, Parle Lingua
                Services is your partner in breaking language barriers and
                expanding global outreach.
              </p>
            </div>
            <div className=" bg-[#E5E7EC] flex  w-full max-w-[500px] lg:max-w-full h-64 lg:h-full justify-center items-center rounded-[32px] ">
              <VideoComponent />
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default AboutHeader;
