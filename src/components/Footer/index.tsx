import React from "react";
import Layout from "../Layout";
import BookASession from "../BookASession";
import FacebookSocialIcon from "../icons/FacebookSocialIcon";
import InstagramSocialIcon from "../icons/InstagramSocialIcon";
import LinkedInSocialIcon from "../icons/LinkedInSocialIcon";
import TwitterSocialIcon from "../icons/TwitterSocialIcon";
import Link from "next/link";

const Footer = () => {
  const perleLinguaLinks = [
    { title: "Home", link: "/" },
    { title: "Services", link: "/" },
    { title: "About Us", link: "/" },
    { title: "Contact Us", link: "/" },
  ];

  const communityLinks = [
    { title: "Blog", link: "/" },
    { title: "Testimonials", link: "/" },
  ];

  const helpCenterLinks = [
    { title: "FAQ", link: "/" },
    { title: "Terms & Conditions", link: "/" },
    { title: "Cookie Setting", link: "/" },
    { title: "Privacy Policy", link: "/" },
  ];

  return (
    <div className="pb-11 text-white bg-pattern bg-blend-multiply bg-no-repeat bg-cover bg-top">
      <Layout className="relative">
        <div className="absolute -top-[200px] left-0 px-4">
          <BookASession />
        </div>

        <div className="w-full pt-[30%] flex mb-10 md:gap-20 flex-col md:flex-row">
          <div className="flex flex-row md:flex-col gap-5 flex-[30%]">
            <div className="flex flex-col gap-5">
              <h1 className="font-medium text-2xl uppercase">
                PARLE LINGUA SERVICES
              </h1>
              <p className="text-white/80 text-base max-w-[80%]">
                The Leading Linguistic Service Provider You Can Trust!
              </p>
            </div>
          </div>

          <div className="flex-[70%] grid gap-5 sm:gap-0 sm:grid-cols-2 lg:grid-cols-3 ">
            <div className="flex flex-col gap-3">
              <h1 className="text-base font-semibold">Parle Lingua</h1>

              {perleLinguaLinks.map((link, i) => (
                <Link
                  href={link.link}
                  key={i}
                  className="text-white/70 transition duration-300 text-sm hover:text-white/90"
                >
                  {link.title}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="text-base font-semibold">Community</h1>

              {communityLinks.map((link, i) => (
                <Link
                  href={link.link}
                  key={i}
                  className="text-white/70 transition duration-300 text-sm hover:text-white/90"
                >
                  {link.title}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="text-base font-semibold">Help Center</h1>

              {helpCenterLinks.map((link, i) => (
                <Link
                  href={link.link}
                  key={i}
                  className="text-white/70 transition duration-300 text-sm hover:text-white/90"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between border-t-[1px] border-white pt-10">
          <h1>@ 2024 Parle Lingua Services. All Rights Reserved</h1>

          <p className=" text-[#100F14] flex gap-4 ">
            <a target="_blank" href="http://linkedin.com">
              <LinkedInSocialIcon fill="#fff" />
            </a>
            <a target="_blank" href="http://instagram.com">
              <InstagramSocialIcon fill="#fff" />
            </a>
            <a target="_blank" href="http://facebook.com">
              <FacebookSocialIcon fill="#fff" />
            </a>
            <a target="_blank" href="http://twitter.com">
              <TwitterSocialIcon fill="#fff" />
            </a>
          </p>
        </div>
      </Layout>
    </div>
  );
};

export default Footer;
