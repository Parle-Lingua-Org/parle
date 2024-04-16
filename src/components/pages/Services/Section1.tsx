import Layout from "@/components/Layout";
import React from "react";

const ServicesSection1 = () => {
  return (
    <div className=" relative bg-gradient-to-br from-[#2F53EB14] from-5% via-white to-[#2F53EB14] to-90% z-30 ">
      <Layout>
        <div className=" grid grid-cols-12 gap-8 ">
          <div className=" col-span-7 flex flex-col gap-6 ">
            <h3 className=" text-primary font-semibold " >1. Interpretation</h3>
            <div>
              <p>
                Experience exceptional interpretation services tailored to your
                needs. Our network of native-speaking professionals ensures
                accurate communication across various languages and industries.
              </p>
              <p>
                Benefit from interpreters well-versed in culture, history, and
                specialized domains, establishing seamless connections for
                effective communication and professional relationships.
              </p>
            </div>
          </div>
          <div className=" col-span-5 ">IMAGE</div>
        </div>
      </Layout>
    </div>
  );
};

export default ServicesSection1;
