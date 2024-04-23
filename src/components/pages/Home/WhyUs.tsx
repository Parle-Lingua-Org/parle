"use client";
import {
  BreakingLanguageBarriersIcon,
  DiversityIcon,
  ExcellentCustomerServiceIcon,
  ProfessionalismAndCompetenceIcon,
} from "@/components/icons";
import Layout from "@/components/Layout";
import React, { ReactNode } from "react";

const WhyUs = () => {
  const data = [
    {
      icon: <DiversityIcon />,
      title: "Diversity",
      desc: `We love languages just as much as the different people who speak them.
Our team at Parle Lingua Services is made up of diverse people from
different cultures and backgrounds.`,
    },

    {
      icon: <ExcellentCustomerServiceIcon />,
      title: "Excellent Customer Service",
      desc: `We will always go the extra mile for our customers and strive to provide exceptional service at all times. Every single member of our team is conditioned to go above and beyond what is expected of them to make our service stand out.`,
    },

    {
      icon: <BreakingLanguageBarriersIcon />,
      title: "Breaking Language Barriers",
      desc: `Breaking through the language barrier and allowing people to travel, do business and gain a better understanding of other civilizations is our goal.`,
    },

    {
      icon: <ProfessionalismAndCompetenceIcon />,
      title: "Professionalism and Competence",
      desc: `We work with highly trained native translators and project managers to make sure that we get your words right. We’re here to make sure that your words are delivered with integrity, accuracy and clarity of meaning - the way you’d want to sound in your native tongue.`,
    },
  ];

  return (
    <Layout className="w-full flex flex-col h-full justify-center items-center py-10 px-10 gap-2">
      <h1 className=" text-center h2 text-purple1 font-sf-pro mb-5 md:mb-10">
        Why You Should
        <br />
        Choose Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {data.map((data, i) => (
          <WhatWeDoCard
            icon={data.icon}
            title={data.title}
            desc={data.desc}
            key={i}
          />
        ))}
      </div>
    </Layout>
  );
};

interface IWhatWeDoCardProps {
  icon: ReactNode;
  title: string;
  desc: string;
}

const WhatWeDoCard: React.FC<IWhatWeDoCardProps> = ({ title, icon, desc }) => {
  return (
    <div className="flex flex-col gap-5 p-6 bg-white rounded-[8px] scale-fast hover:shadow-sm">
      <div className="flex items-center gap-3 flex-shrink-0">
        {icon}
        <h1 className="text-base md:text-2xl font-medium text-lightText2 font-sf-pro">
          {title}
        </h1>
      </div>
      <p className="text-base text-grey60">{desc}</p>
    </div>
  );
};

export default WhyUs;
