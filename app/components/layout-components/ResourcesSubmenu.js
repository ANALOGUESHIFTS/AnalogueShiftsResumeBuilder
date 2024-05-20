"use client";
import { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

import RightArrowImage from "@/public/images/right-arrow-icon.png";
import FileImage from "@/public/images/file-icon.png";
import PhoneIcon from "@/public/images/phone-icon.png";
import QuestionIcon from "@/public/images/question-icon.png";
import { faqsData } from "@/app/resources/data";
import JobHuntImage from "@/public/images/resources-blog.jpg";

export default function ResourcesSubMenu() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => setOpacity(1), []);

  return (
    <div
      style={{ opacity: opacity }}
      className="absolute duration-500 top-[70px] -left-6 w-screen h-[450px] bg-white"
    >
      <div className="w-full p-8 flex justify-between border-b">
        <div className="w-[45%] h-[350px] bg-white duration-500 hover:shadow-2xl rounded-xl p-5 builders-link-box">
          <Link href="/faq" className="w-full flex justify-between pb-5">
            <div className="flex items-center gap-2">
              <Image
                src={QuestionIcon}
                alt="File Icon"
                className="w-4 h-4 opacity-90"
              />
              <p className="relative text-black/90 font-medium text-[13px] tracking-wider">
                FAQS
                <span className="absolute left-0 bottom-0 w-0 border-b border-black/70 border-solid duration-500 custom-line"></span>
              </p>
            </div>
            <div className="duration-500 opacity-0 right-arrow">
              <Image
                src={RightArrowImage}
                alt="Arrow"
                className="w-3 h-3 opacity-60 "
              />
            </div>
          </Link>
          <div className="w-full flex flex-col gap-5">
            {faqsData.map((data) => {
              return (
                <Link
                  key={crypto.randomUUID()}
                  href={data.path}
                  className="bg-gray-200/60 duration-300  hover:bg-[aliceblue] w-full p-2 rounded-lg flex gap-3 items-center"
                >
                  <div className="p-1.5 rounded bg-white shadow">
                    <Image
                      src={data.image}
                      alt="Icon"
                      className="w-3.5 h-3.5"
                    />
                  </div>
                  <p className="text-black/80 font-medium text-sm">
                    {data.title}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="w-[45%] h-[350px] bg-white duration-500 hover:shadow-2xl rounded-xl p-5 builders-link-box">
          <Link href="/blog" className="w-full flex justify-between pb-5">
            <div className="flex items-center gap-2">
              <Image
                src={FileImage}
                alt="File Icon"
                className="w-3 h-4 opacity-90"
              />
              <p className="relative text-black/90 font-medium text-[13px] tracking-wider">
                BLOG
                <span className="absolute left-0 bottom-0 w-0 border-b border-black/70 border-solid duration-500 custom-line"></span>
              </p>
            </div>
            <div className="duration-500 opacity-0 right-arrow">
              <Image
                src={RightArrowImage}
                alt="Arrow"
                className="w-3 h-3 opacity-60 "
              />
            </div>
          </Link>
          <Link href="/blog" className="w-full ">
            <Image
              src={JobHuntImage}
              alt="Job Hunt Image"
              className="object-cover w-full h-[270px]"
            />
          </Link>
        </div>
      </div>
      <div className="py-2 w-full flex justify-center items-center gap-2">
        <Image
          src={PhoneIcon}
          alt="Phone Icon"
          className="w-4 h-4 opacity-70"
        />
        <p className=" text-[13px] font-normal text-black/60 tracking-normal">
          Monday to Friday, 8AM – 12AM (Midnight) and Saturdays and Sundays,
          10AM – 6PM EDT +234806708343
        </p>
      </div>
    </div>
  );
}
