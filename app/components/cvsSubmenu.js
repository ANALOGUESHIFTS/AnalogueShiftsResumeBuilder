"use client";
import { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

import GridImage from "@/public/grid-icon.png";
import LeafImage from "@/public/leaf.png";
import RightArrowImage from "@/public/right-arrow-icon.png";
import FileImage from "@/public/file-icon.png";
import ResumeExample from "@/public/resume-example-nav.webp";
import PhoneIcon from "@/public/phone-icon.png";

export default function CVSubMenu() {
  const [opacity, setOpacity] = useState(0);

  const templateLinks = [
    {
      name: "Business",
      path: "/cv-templates#business",
      subTitle: "Professional CV templates for senior-level positions.",
    },
    {
      name: "Graduate",
      path: "/cv-templates#graduate",
      subTitle: "Templates for academics and scholars.",
    },
    {
      name: "Research",
      path: "/cv-templates#research",
      subTitle: "A format to showcase your research background.",
    },
    {
      name: "Writer",
      path: "/cv-templates#writer",
      subTitle: "Perfect templates for published writers.",
    },
  ];

  const cvHelpLinks = [
    {
      name: "What is a cv?",
      path: "/blog/cv-help/what-is-a-cv",
    },
    {
      name: "How to write a cv for a job",
      path: "/blog/cv-help/how-to-write-a-cv",
    },
    {
      name: "Cv vs Resume: what's the difference?",
      path: "/blog/cv-help/cv-vs-resume",
    },
    {
      name: "How to write an academic cv",
      path: "/blog/cv-help/academic-cv",
    },
    {
      name: "Cv examples for students",
      path: "/blog/cv-help/cv-examples-for-students",
    },
  ];

  useEffect(() => setOpacity(1), []);

  return (
    <div
      style={{ opacity: opacity }}
      className="absolute duration-500 top-[70px] -left-6 w-screen h-[450px] bg-white"
    >
      <div className="w-full p-8 flex justify-between border-b">
        <div className="w-[40%] h-[350px] bg-white duration-500 hover:shadow-2xl rounded-xl p-5 builders-link-box">
          <Link
            href="/cv-templates"
            className="w-full flex justify-between pb-5"
          >
            <div className="flex items-center gap-2">
              <Image
                src={GridImage}
                alt="File Icon"
                className="w-4 h-4 opacity-90"
              />
              <p className="relative text-black/90 font-medium text-[13px] tracking-wider">
                CV TEMPLATES
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
          <div className="w-full flex flex-wrap gap-5 gap-y-5">
            {templateLinks.map((data) => {
              return (
                <Link
                  href={data.path}
                  key={() => Math.randow() * Math.random()}
                  className="w-[calc(50%-10px)] h-[120px] hover:bg-[aliceblue] duration-300 rounded-lg bg-gray-200 p-5"
                >
                  <p className="text-black/80 font-semibold text-sm pb-1">
                    {data.name}
                  </p>
                  <p className="text-black/70 text-[13px] font-medium">
                    {data.subTitle}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="w-[30%] h-[350px] bg-white duration-500 hover:shadow-2xl rounded-xl p-5 builders-link-box">
          <Link
            href="/blog/cv-help"
            className="w-full flex justify-between pb-5"
          >
            <div className="flex items-center gap-2">
              <Image
                src={LeafImage}
                alt="Leaf Icon"
                className="w-4 h-4 opacity-90"
              />
              <p className="relative text-black/90 font-medium text-[13px] tracking-wider">
                CV HELP
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
          <div className="w-full flex flex-col">
            {cvHelpLinks.map((data) => {
              return (
                <Link
                  key={() => Math.randow() * Math.random()}
                  href={data.path}
                  className="p-2.5 w-full rounded-lg text-black/70 font-medium text-sm hover:bg-gray-200/80"
                >
                  {data.name}
                </Link>
              );
            })}
          </div>
        </div>
        <Link
          href="/cv-examples"
          className="w-[25%] h-[350px] bg-white duration-500 hover:shadow-2xl rounded-xl p-5 builders-link-box"
        >
          <div className="w-full flex justify-between pb-5">
            <div className="flex items-center gap-2">
              <Image
                src={FileImage}
                alt="Leaf Icon"
                className="w-4 h-4 opacity-90"
              />
              <p className="relative text-black/90 font-medium text-[13px] tracking-wider">
                CV EXAMPLES
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
          </div>
          <div className="w-full h-[240px] pt-[10%] px-[10%] rounded-lg bg-gray-200/70">
            <Image
              src={ResumeExample}
              alt="Image"
              className="w-full h-full rounded-lg"
            />
          </div>
        </Link>
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
