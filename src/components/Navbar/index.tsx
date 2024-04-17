"use client";
import Assets from "@/constants/assets.constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CountryDropDownIcon from "../icons";
import { Button } from "../ui/button";
import { BookASessionButton } from "../Buttons";
import { usePathname } from "next/navigation";

const links = [
  {
    link: "/",
    title: "Home",
  },
  {
    link: "/services",
    title: "Services",
  },
  {
    link: "/about-us",
    title: "About Us",
  },
  // {
  //   link: "/blog",
  //   title: "Blog",
  // },
  {
    link: "/contact-us",
    title: "Contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="nav flex items-center justify-between container pt-8">
      <Image
        src={Assets.brand}
        alt="brand"
        className="w-fit "
        width={500}
        height={1000}
      />

      <ul className="flex gap-4 text-base items-center justify-start">
        {links.map((link, i) => (
          <Link
            href={link.link}
            key={i}
            // className={`nav-link hover:hover ${i === 0 ? "active" : ""}`}
            className={`
              nav-link
              hover:hover
              ${pathname === link.link ? "active" : ""}
            
            `}
          >
            {link.title}
          </Link>
        ))}
      </ul>

      <div className="flex items-end">
        {/* <CountryDropDownIcon /> */}
        <BookASessionButton />
      </div>
    </div>
  );
};

export default Navbar;
