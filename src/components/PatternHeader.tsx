import React from "react";
import Layout from "./Layout";

type PatternHeaderProps = {
  title: string;
  description?: string;
};

const PatternHeader: React.FC<PatternHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <div className="bg-parle bg-blend-multiply  bg-no-repeat bg-cover bg-top ">
      <div className="  w-full bg-[#f5f6fa]/85 py-16 lg:py-28">
        <Layout className=" flex flex-col gap-8 jusify-center items-center bg-transparent ">
          <h1 className=" w-full text-center font-semibold text-primary text-3xl sm:text-6xl lg:text-[82px] ">
            {title}
          </h1>
          <p className=" w-full max-w-[1058px] text-center text-base sm:text-lg lg:text-2xl ">
            {description}
          </p>
        </Layout>
      </div>
    </div>
  );
};

export default PatternHeader;
