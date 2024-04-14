import PatternHeader from "@/components/PatternHeader";
import ContactUsFooter from "@/components/pages/Contact/Footer";
import ContactUsSection from "@/components/pages/Contact/Section";
import React from "react";

const ContactUs = () => {
  return (
    <div className=" relative " >
      <PatternHeader
        title="Contact Us"
        description="If you’re interested in learning more about our language solutions you can reach us via any of these mediums and our customer service representatives will gladly respond to all your enquiries"
      />
      <ContactUsSection />
      {/* <ContactUsFooter /> */}
    </div>
  );
};

export default ContactUs;
