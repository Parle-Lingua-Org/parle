"use client";
import { BookASessionButton } from "@/components/Buttons";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Assets from "@/constants/assets.constant";
import { bookAsessionLink, dropAreviewLink } from "@/constants/index.constant";
import Image from "next/image";
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      photo: Assets.noImg,
      fullname: "Adenike from Nigeria",
      role: "",
      testimonial:
        " I started as a beginner. In four months, I could speak and write in French.  Thanks to Parle Lingua for providing me with a good tutor. I got many materials/tools for learning French. My tutor has a great knowledge of French and can communicate that knowledge to me as a student. I was also taught how to use the language but most importantly tips in French culture. I highly recommend learning with parle lingua.",
    },
    {
      photo: Assets.noImg,
      fullname: "Ridhima from India",
      role: "",
      testimonial:
        "When we started I was a lower intermediate student(b1). I wanted to take the TEF exam in two months. We did an intensive section and I passed with an advanced level(c1). The journey was exceptional. I got a good and professional teacher. Her expertise in French, especially TEF exam preparation is worth applauding",
    },
    {
      photo: Assets.noImg,
      fullname: "Olatunde from Nigeria",
      role: "",
      testimonial:
        "I was sceptical about learning a new language but I needed it for my job. In less than a year I could speak and start writing in French. My tutor is a good listener, communication skills are excellent. She loves languages and for me that's contagious. I can't wait for the next class. Merci, à la semaine prochaine!",
    },
    {
      photo: Assets.noImg,
      fullname: "Theodora from Malaysia",
      role: "",
      testimonial:
        "Difficult grammar rules of the French and language concepts were made easier to understand. I was helped to get top marks in my school's French course. 10/10 recommended.",
    },
    {
      photo: Assets.noImg,
      fullname: "Kiran from Canada",
      role: "",
      testimonial:
        "Excellent tutor! She helped me prepare for my tests and written assignments and I did extremely well on them. She's very patient and thorough when teaching!",
    },

    {
      photo: Assets.noImg,
      fullname: "Marie from Germany",
      role: "",
      testimonial:
        "Parle lingua has very compassionate and caring tutors. They care about their student's learning and make sure their needs are met.  The flexible schedule helped me to work around my tight schedule.",
    },
    {
      photo: Assets.noImg,
      fullname: "Generation 21",
      role: "",
      testimonial:
        "As an NGO we constantly work with parle lingua services. The team interpret from French to English during our Zoom meeting. Also when need translation of documents they deliver promptly and accurately. We have been having a great time working together and we would love to recommend Parle Lingua for any interpretation and translation service.",
    },
    {
      photo: Assets.noImg,
      fullname: "Steve from UK",
      role: "",
      testimonial:
        "I am 83 years old. I live in Chester. For over two years I have been taking classes with parle lingua. My tutor is a patient, exceptional teacher. Her teaching ability has helped me to remember vocabularies that I easily forget.",
    },
    {
      photo: Assets.noImg,
      fullname: "Kaili from Greece",
      role: "",
      testimonial:
        "My kids are about to write the delf prim exam and the classes have helped them to be more confident. I appreciate the dedication and commitment to see my teens succeeded",
    },
    {
      photo: Assets.noImg,
      fullname: "Jocelyn from the USA",
      role: "",
      testimonial:
        "The classes with my kids have been excellent. My kids love their tutor. Every time she comes to the house they do different activities that helps them love the language more.",
    },

  ];

  return (
    <div className="min-h-[500px] bg-primary pt-16 pb-[300px] w-full">
      <Layout className="flex flex-col gap-4 items-center">
        <h1 className="h2 text-white text-center">Testimonials/Reviews</h1>

        <p className="text-base max-lg:text-center text-lightText3">
          Don’t just take our word for it. Here are a few (of many) reviews of
          Parle Lingua.
        </p>

        <div className="flex w-full overflow-auto mt-10 gap-4 no-scrollbar">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard testimonial={testimonial} key={i} />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center w-full items-center gap-5">
          <a href={dropAreviewLink}>
            <Button
              variant={"outline"}
              className="text-white rounded-[100px] py-4 px-9 scale-fast"
            >
              Drop A Review
            </Button>
          </a>
          <BookASessionButton />
        </div>
      </Layout>
    </div>
  );
};

interface ITestimonial {
  photo: any;
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
        <Image src={photo} width={50} height={50} className="rounded-full" alt="avater" />
        <div className="flex flex-col gap-[2px] justify-center">
          <h1 className="font-bold text-base">{fullname}</h1>
          <p className="text-lightText5 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
