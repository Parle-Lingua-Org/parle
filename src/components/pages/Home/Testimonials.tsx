"use client";
import { BookASessionButton } from "@/components/Buttons";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Assets from "@/constants/assets.constant";
import Image from "next/image";
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      photo: Assets.avater1,
      fullname: "Mike Warren",
      role: "Product Manager at Zapier",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum auctor nisl ut molestie. Suspendisse potenti. Donec nec nulla vulputate, luctus tortor nec, consequat felis.",
    },
    {
      photo: Assets.avater1,
      fullname: "Mike Warren",
      role: "Product Manager at Zapier",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum auctor nisl ut molestie. Suspendisse potenti. Donec nec nulla vulputate, luctus tortor nec, consequat felis.",
    },
    {
      photo: Assets.avater1,
      fullname: "Mike Warren",
      role: "Product Manager at Zapier",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum auctor nisl ut molestie. Suspendisse potenti. Donec nec nulla vulputate, luctus tortor nec, consequat felis.",
    },
    {
      photo: Assets.avater1,
      fullname: "Mike Warren",
      role: "Product Manager at Zapier",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum auctor nisl ut molestie. Suspendisse potenti. Donec nec nulla vulputate, luctus tortor nec, consequat felis.",
    },
  ];

  return (
    <div className="min-h-[500px] bg-primary pt-16 pb-[300px] ">
      <Layout className="flex flex-col items-center">
        <h1 className="h2 text-white text-center">Testimonials/Reviews</h1>

        <p className="text-base text-lightText3">
          Don’t just take our word for it. Here are a few (of many) reviews of
          Parle Lingua.
        </p>

        <div className="flex w-full overflow-auto mt-10 gap-4 no-scrollbar">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard testimonial={testimonial} key={i} />
          ))}
        </div>

        <div className="mt-10 flex gap-5">
          <Button
            variant={"outline"}
            className="text-white rounded-[100px] py-2.5 px-8 scale-fast"
          >
            Drop A Review
          </Button>
          <BookASessionButton />
        </div>
      </Layout>
    </div>
  );
};

interface ITestimonial {
  photo: string;
  fullname: string;
  role: string;
  testimonial: string;
}

interface ITestimonialCardProps {
  testimonial: ITestimonial;
}

export const TestimonialCard: React.FC<ITestimonialCardProps> = ({
  testimonial: { fullname, photo, role, testimonial },
}) => {
  return (
    <div className="flex flex-col gap-3 px-10 py-6 rounded-[32px] bg-white min-w-[450px]">
      <p className="text-lightText1 leading-[28px] line-clamp-4 text-sm">
        {testimonial}
      </p>

      <div className="flex gap-3">
        <Image src={photo} width={50} height={50} className="" alt="avater" />
        <div className="flex flex-col gap-[2px] justify-center">
          <h1 className="font-bold text-base">{fullname}</h1>
          <p className="text-lightText5 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
