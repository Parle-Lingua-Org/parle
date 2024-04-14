import BookASession from "@/components/BookASession";
import Layout from "@/components/Layout";
import React from "react";

const ContactUsFooter = () => {
  return (
    <div className=" relative z-0 py-20 ">
      <Layout className="  ">
        <BookASession />
      </Layout>
      <div className="bg-primary w-full absolute -z-10 top-1/2 h-1/2 " />
    </div>
  );
};

export default ContactUsFooter;
