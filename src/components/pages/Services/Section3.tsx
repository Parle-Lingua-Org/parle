import Layout from "@/components/Layout";
import SpeakerIcon from "@/components/icons/SpeakerIcon";
import Assets from "@/constants/assets.constant";
import Image from "next/image";
import React from "react";

const ServicesSection3 = () => {
  return (
    <div className=" relative bg-gradient-to-br from-[#2F53EB14] from-5% via-white to-[#2F53EB14] to-90% z-30 ">
      <Layout className=" py-20 " >
          <h3 className=" text-primary font-semibold text-4xl lg:text-[44.5px] ">
            3. Language Training
          </h3>
        <div className=" grid py-16 grid-cols-1 max-lg:justify-items-center lg:grid-cols-2 gap-8 gap-y-20 ">
          <div className=" flex flex-col md:gap-10 lg:gap-16 ">
            <div className=" flex flex-col justify-center items-center gap-8 ">
              <Image
                src={Assets.physical}
                alt="hero-image-2"
                width={494}
                height={494}
                className=" scale-fast"
              />
            </div>
            <div className=" flex flex-col text-justify items-center gap-4 ">
              <h3 className=" text-primary font-semibold text-xl lg:text-[27.5px] ">
                Physical/ Online Training
              </h3>
              <div className=" flex text-[#1A1A1A99] flex-col gap-4 text-base lg:text-lg text-justify  ">
                <p>
                  <strong>Language Courses: </strong>Parle Lingua Services
                  offers comprehensive language acquisition programs designed to
                  foster fluency and understanding beyond mere vocabulary. Our
                  experienced trainers provide tailored online or in-person
                  sessions, emphasizing the nuanced use of language in context.
                  Whether it&apos;s mastering conversational skills or honing
                  translation abilities, our courses equip students with the
                  tools for success.
                </p>
                <p>
                  <strong>Exam-centric Courses: </strong> Prepare for
                  international language certification exams with our
                  exam-centric courses. Our comprehensive training covers TEF
                  Canada, IGCSE, DELF, DALF (A1 - C1), Ab initio, and more.
                  Strengthen your vocabulary, sentence structuring, listening
                  skills, and overall language proficiency for success in both
                  exams and real-world communication.
                </p>
              </div>
            </div>
          </div>
          <div className=" flex flex-col md:gap-10 lg:gap-16 ">
            <div className=" flex flex-col justify-center items-center gap-8 ">
              <Image
                src={Assets.corporate}
                alt="hero-image-2"
                width={494}
                height={494}
                className=" scale-fast"
              />
            </div>

            <div className=" flex flex-col text-justify items-center gap-4 ">
              <h3 className=" text-primary font-semibold text-xl lg:text-[27.5px] ">
                Corporate / Group Training{" "}
              </h3>
              <div className=" flex text-[#1A1A1A99] flex-col gap-4 text-base lg:text-lg text-justify  ">
                <p>
                  <strong>Industry-Specific Training:</strong> Beyond basic
                  grammar and vocabulary, our corporate language instruction
                  delves into industry-specific jargon, tailored to
                  professionals&apos; needs. With a focus on functional
                  precision, we equip learners to navigate their field
                  effectively. Our intensive timelines ensure efficient skill
                  acquisition.
                </p>
                <p>
                  <strong> Business Communication: </strong> Master the art of
                  effective business communication, leveraging expertise in
                  language functionality and professional application. Enhance
                  your written and spoken communication skills for seamless
                  business interactions.
                </p>
                <p>
                  <strong>Importance to Cultural Nuances: </strong> At Parle
                  Lingua, we understand the critical importance of cultural
                  nuances in international business interactions. Our services
                  include cross-cultural training as part of our corporate
                  training programs. We provide insights into acceptable norms
                  and expectations in your client&apos;s culture, empowering you
                  to build strong, professional relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center w-full gap-6 md:gap-10 pb-16 ">
          <h3 className=" text-primary font-semibold text-xl lg:text-[27.5px] ">
            Why Choose Us for Your Language Interpretation
          </h3>
          <div>
            <div className=" grid font-semibold gap-4 grid-cols-1 w-fit md:grid-cols-2 ">
              <div className=" w-fit flex gap-4 text-sm lg:text-base p-3 border justify-start items-center bg-[#F7F9FF] rounded-[10px] ">
                <SpeakerIcon fill="#8862D6" />{" "}
                <p>Highly Qualified Language Trainers</p>
              </div>
              <div className=" w-fit flex gap-4 text-sm lg:text-base p-3 border justify-start items-center bg-[#F7F9FF] rounded-[10px] ">
                <SpeakerIcon fill="#00BF9D" /> <p>Learner Oriented Teaching</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ServicesSection3;
