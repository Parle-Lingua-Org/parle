import React from "react";
import Layout from "@/components/Layout";
import FacebookSocialIcon from "@/components/icons/FacebookSocialIcon";
import InstagramSocialIcon from "@/components/icons/InstagramSocialIcon";
import LinkedInSocialIcon from "@/components/icons/LinkedInSocialIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import MailIcon from "@/components/icons/MailIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import ShareIcon from "@/components/icons/ShareIcon";
import TwitterSocialIcon from "@/components/icons/TwitterSocialIcon";
import WhatsappIcon from "@/components/icons/WhatsappIcon";
import { Button } from "@/components/ui/button";
import ContactForm from "./ContactForm";
import ContactUsFooter from "./Footer";

const ContactUsSection = () => {
  return (
    <div className=" relative pb-40 bg-gradient-to-br from-[#2f52eb12] from-5% via-white via-35% to-[#2F53EB20] to-95% z-30 ">
      <Layout>
        <div className=" grid z-30 grid-cols-1 lg:grid-cols-2 max-lg:place-items-center gap-10 py-8 ">
          <div className=" flex flex-col gap-8 ">
            <div className=" flex flex-col gap-4 ">
              <h2 className=" text-[44px] font-semibold text-primary ">
                Get in Touch
              </h2>
              <p className=" text-[#A8A7AE] text-2xl  ">
                Interested in any of our services immediately,
              </p>
              <Button
                type="button"
                className=" shadow-xl bg-secondary w-fit text-white py-2.5 lg:py-6 text-base lg:text-xl px-8 rounded-full "
              >
                Book A Session
              </Button>
            </div>
            <div className=" flex flex-col gap-6 ">
              {/* Whatsapp */}
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=2348093881906"
                className=" flex w-fit h-full flex-row gap-6 "
              >
                <div className=" rounded-[10px] flex justify-center items-center size-14 bg-[#00BF9D] ">
                  <WhatsappIcon />
                </div>
                <div className=" flex h-full justify-between gap-3 flex-col leading-none ">
                  <h3 className=" text-[#00000099] ">Whatsapp</h3>
                  <p className=" text-[#100F14] font-medium text-lg ">
                    +234 809 3881 906
                  </p>
                </div>
              </a>
              <hr className=" bg-[#A8A7AE33] h-px " />
              {/* Mail */}
              <a
                className=" flex w-fit h-full flex-row gap-6 "
                href="mailto:parlelinguaservices@gmail.com"
              >
                <div className=" rounded-[10px] flex justify-center items-center size-14 bg-primary ">
                  <MailIcon />
                </div>
                <div className=" flex h-full justify-between gap-3 flex-col leading-none ">
                  <h3 className=" text-[#00000099] ">Email Address</h3>
                  <p className=" text-[#100F14] font-medium text-lg ">
                    parlelinguaservices@gmail.com
                  </p>
                </div>
              </a>
              <hr className=" bg-[#A8A7AE33] h-px " />
              {/* Telephone */}
              <a
                className=" flex w-fit h-full flex-row gap-6 "
                href="tel:+2349162777004"
              >
                <div className=" rounded-[10px] flex justify-center items-center size-14 bg-[#8862D6] ">
                  <PhoneIcon />
                </div>
                <div className=" flex h-full justify-between gap-3 flex-col leading-none ">
                  <h3 className=" text-[#00000099] ">Phone Number</h3>
                  <p className=" text-[#100F14] font-medium text-lg ">
                    +234 916 2777 004
                  </p>
                </div>
              </a>
              <hr className=" bg-[#A8A7AE33] h-px " />
              {/* Location */}
              <a
                target="_blank"
                className=" flex w-fit h-full flex-row gap-6 "
                href="http://maps.google.com/?q=Bright Star Plaza, 50 Ebitu Ukiwe street, Jabi, Abuja,
              Nigeria."
              >
                <div className=" rounded-[10px] flex justify-center items-center size-14 bg-[#FE8947] ">
                  <LocationIcon />
                </div>
                <div className=" flex h-full justify-between gap-3 flex-col leading-none ">
                  <h3 className=" text-[#00000099] ">Location</h3>
                  <p className=" text-[#100F14] font-medium text-lg ">
                    Bright Star Plaza, 50 Ebitu Ukiwe street, Jabi, Abuja,
                    Nigeria.
                  </p>
                </div>
              </a>
              <hr className=" bg-[#A8A7AE33] h-px " />
              {/* Follow Us Socials */}
              <div className=" flex w-fit h-full flex-row gap-6 ">
                <div className=" rounded-[10px] flex justify-center items-center size-14 bg-[#F65555] ">
                  <ShareIcon />
                </div>
                <div className=" flex h-full justify-between gap-3 flex-col leading-none ">
                  <h3 className=" text-[#00000099] ">Follow Us</h3>
                  <p className=" text-[#100F14] flex gap-4 ">
                    <a target="_blank" href="http://linkedin.com">
                      <LinkedInSocialIcon />
                    </a>
                    <a target="_blank" href="http://instagram.com">
                      <InstagramSocialIcon />
                    </a>
                    <a target="_blank" href="http://facebook.com">
                      <FacebookSocialIcon />
                    </a>
                    <a target="_blank" href="http://twitter.com">
                      <TwitterSocialIcon />
                    </a>
                  </p>
                </div>
              </div>
              <hr className=" bg-[#A8A7AE33] h-px " />
            </div>
          </div>
          <div className=" flex self-center w-full ">
            <ContactForm />
          </div>
        </div>
      </Layout>
      <ContactUsFooter />
    </div>
  );
};

export default ContactUsSection;
