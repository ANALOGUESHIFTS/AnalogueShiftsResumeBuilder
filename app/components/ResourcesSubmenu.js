"use client";
import { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

import RightArrowImage from "@/public/right-arrow-icon.png";
import FileImage from "@/public/file-icon.png";
import PhoneIcon from "@/public/phone-icon.png";
import QuestionIcon from "@/public/question-icon.png";
import SettingsIcon from "@/public/settings-icon.svg";
import ResumeFaqNavIcon from "@/public/resume-faqs-nav-icon.svg";
import CoverLetterFaqNavIcon from "@/public/cover-letter-faqs-nav-icon.svg";
import CvFaqNavIcon from "@/public/cv-faqs-nav-icon.svg";
import JobHuntingImage from "@/public/job-hunting-nav.webp";
import InterviewHelp from "@/public/interview-help-nav.webp";
import CareerAdvice from "@/public/career-advice-nav.webp";

export default function ResourcesSubMenu() {
  const [opacity, setOpacity] = useState(0);

  const faqsData = [
    {
      image: SettingsIcon,
      title: "Technical Assistance",
      path: "/faq#technical-assistance",
    },
    {
      image: ResumeFaqNavIcon,
      title: "Resume FAQs",
      path: "/faq#resume-faqs",
    },
    {
      image: CoverLetterFaqNavIcon,
      title: "Cover Letter FAQs",
      path: "/faq#cover-letter-faqs",
    },
    {
      image: CvFaqNavIcon,
      title: "CV FAQs",
      path: "/faq#cv-faqs",
    },
  ];

  const blogData = [
    {
      title: "Job Hunting",
      path: "/blog/job-hunting",
      description:
        "Need help getting your job hunt started? Our job-hunting resources, guides, and expert advice are at your disposal.",
      image: JobHuntingImage,
    },
    {
      title: "Interview Help",
      path: "/blog/interview",
      description:
        "You're one step away from getting the job. Win over hiring managers with our expert interview tips.",
      image: InterviewHelp,
    },
    {
      title: "Career Advice",
      path: "/blog/career-advice",
      description:
        "Grow as a professional with career advice from certified experts and experienced HR pros.",
      image: CareerAdvice,
    },
  ];

  useEffect(() => setOpacity(1), []);

  return (
    <div
      style={{ opacity: opacity }}
      className="absolute duration-500 top-[70px] -left-6 w-screen h-[450px] bg-white"
    >
      <div className="w-full p-8 flex justify-between border-b">
        <div className="w-[35%] h-[350px] bg-white duration-500 hover:shadow-2xl rounded-xl p-5 builders-link-box">
          <Link href="/faqs" className="w-full flex justify-between pb-5">
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
                  key={() => Math.randow() * Math.random()}
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
        <div className="w-[60%] h-[350px] bg-white duration-500 hover:shadow-2xl rounded-xl p-5 builders-link-box">
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
          <div className="w-full flex justify-between">
            {blogData.map((data) => {
              return (
                <Link
                  key={() => Math.randow() * Math.random()}
                  href={data.path}
                  className="flex flex-col w-[32%] resources-link"
                >
                  <div className="w-full h-[120px] overflow-hidden">
                    <Image
                      src={data.image}
                      alt="Image"
                      className="w-full duration-300 h-full rounded-lg img"
                    />
                  </div>
                  <p className="pt-3 font-medium text-black/80 text-sm pb-1">
                    {data.title}
                  </p>
                  <p className="text-black/60 text-[13px] font-normal">
                    {data.description}
                  </p>
                </Link>
              );
            })}
          </div>
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
