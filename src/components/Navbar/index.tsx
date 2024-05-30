"use client";
import Assets from "@/constants/assets.constant";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import CountryDropDownIcon from "../icons";
import { Button } from "../ui/button";
import { BookASessionButton } from "../Buttons";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

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
  const [isOpened, setIsOpened] = React.useState<boolean>(false);

  const menuRef = React.useRef<HTMLUListElement>(null);

  const toggleMenu = () => {
    setIsOpened((prev) => !prev);
    console.log(menuRef.current?.style.display);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setIsOpened(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [handleOutsideClick]);

  // useEffect(() => {
  //   if (isOpened) {
  //     menuRef.current?.classList.add("show");
  //   } else {
  //     menuRef.current?.classList.remove("show");
  //   }
  // }, [isOpened]);

  return (
    <div className="nav relative flex items-center justify-between container pt-8 bg-[#F3F5F9]">
      <Link href={"/"}>
        <Image
          src={Assets.brand}
          alt="brand"
          className="w-[90%] max-sm:w-[50%]"
          width={500}
          height={1000}
        />
      </Link>

      <ul className=" hidden lg:flex gap-4 text-base items-center justify-start">
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

      <div className=" hidden lg:flex items-end">
        {/* <CountryDropDownIcon /> */}
        <BookASessionButton />
      </div>

      {
        <motion.ul
          ref={menuRef}
          initial={"close"}
          animate={isOpened ? "open" : "close"}
          variants={{
            open: {
              scale: 1,
              opacity: 1,
              x: "-50%",
              y: "-50%",
            },
            close: {
              scale: 0,
              opacity: 0,
              x: "-50%",
              y: "-50%",
            },
          }}
          className="lg:hidden z-[1000] w-full rounded-lg max-w-[70%] top-1/2 left-1/2 fixed -translate-x-1/2 -translate-y-1/2 backdrop-blur-2xl bg-black/30 py-32 flex flex-col gap-4 text-base items-center justify-start"
        >
          {links.map((link, i) => (
            <Link
              href={link.link}
              key={i}
              // className={`nav-link hover:hover ${i === 0 ? "active" : ""}`}
              onClick={() => {
                setIsOpened(false);
              }}
              className={`
              nav-link
              hover:hover
              ${pathname === link.link ? "active" : ""}
            `}
            >
              {link.title}
            </Link>
          ))}
        </motion.ul>
      }

      <div
        className="lg:hidden"
        onClick={toggleMenu}
        style={{ cursor: "pointer" }}
      >
        {isOpened ? <X size={24} /> : <Menu size={24} />}
      </div>
    </div>
  );
};

export default Navbar;
