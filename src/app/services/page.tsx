import PatternHeader from "@/components/PatternHeader";
import ServicesSection1 from "@/components/pages/Services/Section1";
import ServicesSection2 from "@/components/pages/Services/Section2";
import ServicesSection3 from "@/components/pages/Services/Section2";
import ServicesSection4 from "@/components/pages/Services/Section2";
import React from "react";

const Services = () => {
  return (
    <div className=" relative ">
      <PatternHeader
        title="Our Services"
        description="We offer a range of linguistics services.h"
      />
      <ServicesSection1 />
      <ServicesSection2 />
      <ServicesSection3 />
      <ServicesSection4 />
    </div>
  );
};

export default Services;
