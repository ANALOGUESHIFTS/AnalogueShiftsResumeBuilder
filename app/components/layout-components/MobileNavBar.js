"use client";
import { useState, useEffect } from "react";
//Datas
import { buildersLink } from "@/app/resources/data";
import { resumeNavLinks } from "@/app/resources/resume/data";
import { coverLetterNavLinks } from "@/app/resources/cover-letter/data";
import { cvNavLinks } from "@/app/resources/cv/data";
import { faqsData } from "@/app/resources/data";

import LeftArrowImage from "@/public/images/left-arrow.png";
import Image from "next/image";
import FileImage from "@/public/images/file-icon.png";
import GridImage from "@/public/images/grid-icon.png";
import LeafImage from "@/public/images/leaf.png";
import QuestionIcon from "@/public/images/question-icon.png";
import PhoneIcon from "@/public/images/phone-icon.png";
import Link from "next/link";

const navLinks = ["Builders", "Resumes", "Cover Letters", "CVs", "Resources"];

export default function MobileNavBar({
  selectedMobileMenu,
  setSelectedMobileMenu,
}) {
  const [position, setPosition] = useState(-1500);

  useEffect(() => {
    setPosition(0);
  }, []);

  return (
    <div
      style={{ left: `${position}px` }}
      className="w-[80%] z-90 h-[100dvh] static hidden duration-300 max-[850px]:fixed bg-white py-6 px-3.5 max-[850px]:flex flex-col gap-5"
    >
      {navLinks.map((data) => {
        if (selectedMobileMenu === "" || selectedMobileMenu === data) {
          return (
            <div
              onClick={() => {
                if (selectedMobileMenu === data) {
                  setSelectedMobileMenu("");
                } else {
                  setSelectedMobileMenu(data);
                }
              }}
              key={crypto.randomUUID()}
              className="cursor-pointer w-full py-2 border-b flex items-center gap-2"
            >
              {selectedMobileMenu === data && (
                <Image
                  src={LeftArrowImage}
                  alt="Back arrow"
                  className=" w-3 h-3"
                />
              )}
              <p
                className={`font-medium text-base ${
                  selectedMobileMenu === data
                    ? "text-AnalogueShiftsTextColor"
                    : "text-black/80"
                }`}
              >
                {data}
              </p>
            </div>
          );
        }
      })}
      {selectedMobileMenu === "Builders" && (
        <div className="w-full h-[280px] overflow-y-auto pt-2 flex flex-col gap-3">
          {buildersLink.map((link) => {
            return (
              <Link
                key={crypto.randomUUID()}
                href={link.path}
                className="flex gap-3 items-center"
              >
                <div className="w-7 h-7 rounded-lg bg-gray-200/70 flex justify-center items-center">
                  <Image
                    src={FileImage}
                    alt="File Icon"
                    className="w-3.5 h-4 opacity-60"
                  />
                </div>
                <p className="text-black/80 font-medium text-sm">{link.name}</p>
              </Link>
            );
          })}
        </div>
      )}
      {selectedMobileMenu === "Resumes" && (
        <div className="w-full h-[300px] overflow-y-auto pt-2 flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <Link href="/resume-templates" className="flex gap-3 items-center">
              <div className="w-7 h-7 rounded-lg bg-gray-200/70 flex justify-center items-center">
                <Image
                  src={GridImage}
                  alt="File Icon"
                  className="w-3.5 h-4 opacity-60"
                />
              </div>
              <p className="text-black/80 font-medium text-sm">
                RESUME TEMPLATES
              </p>
            </Link>
            <div className="w-full flex flex-col">
              {resumeNavLinks.map((data) => {
                return (
                  <Link
                    key={crypto.randomUUID()}
                    href={data.path}
                    className="py-2 pr-2 pl-10 rounded-lg hover:bg-gray-200/70 text-black/70 font-medium text-sm"
                  >
                    {data.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Link href="/blog" className="flex gap-3 items-center">
              <div className="w-7 h-7 rounded-lg bg-gray-200/70 flex justify-center items-center">
                <Image
                  src={LeafImage}
                  alt="File Icon"
                  className="w-3.5 h-4 opacity-80"
                />
              </div>
              <p className="text-black/80 font-medium text-sm">RESUME HELP</p>
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link href="/resume-samples" className="flex gap-3 items-center">
              <div className="w-7 h-7 rounded-lg bg-gray-200/70 flex justify-center items-center">
                <Image
                  src={FileImage}
                  alt="File Icon"
                  className="w-3.5 h-4 opacity-80"
                />
              </div>
              <p className="text-black/80 font-medium text-sm">
                RESUME EXAMPLES
              </p>
            </Link>
          </div>
        </div>
      )}
      {selectedMobileMenu === "Cover Letters" && (
        <div className="w-full h-[300px] overflow-y-auto pt-2 flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <Link
              href="/cover-letter-templates"
              className="flex gap-3 items-center"
            >
              <div className="w-7 h-7 rounded-lg bg-gray-200/70 flex justify-center items-center">
                <Image
                  src={GridImage}
                  alt="File Icon"
                  className="w-3.5 h-4 opacity-60"
                />
              </div>
              <p className="text-black/80 font-medium text-sm">
                COVER LETTER TEMPLATES
              </p>
            </Link>
            <div className="w-full flex flex-col">
              {coverLetterNavLinks.map((data) => {
                return (
                  <Link
                    key={crypto.randomUUID()}
                    href={data.path}
                    className="py-2 pr-2 pl-10 rounded-lg hover:bg-gray-200/70 text-black/70 font-medium text-sm"
                  >
                    {data.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Link href="/blog" className="flex gap-3 items-center">
              <div className="w-7 h-7 rounded-lg bg-gray-200/70 flex justify-center items-center">
                <Image
                  src={LeafImage}
                  alt="File Icon"
                  className="w-3.5 h-4 opacity-80"
                />
              </div>
              <p className="text-black/80 font-medium text-sm">
                COVER LETTER HELP
              </p>
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link
              href="/cover-letter-examples"
              className="flex gap-3 items-center"
            >
              <div className="w-7 h-7 rounded-lg bg-gray-200/70 flex justify-center items-center">
                <Image
                  src={FileImage}
                  alt="File Icon"
                  className="w-3.5 h-4 opacity-80"
                />
              </div>
              <p className="text-black/80 font-medium text-sm">
                COVER LETTER EXAMPLES
              </p>
            </Link>
          </div>
        </div>
      )}
      {selectedMobileMenu === "CVs" && (
        <div className="w-full h-[300px] overflow-y-auto pt-2 flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <Link href="/cv-template" className="flex gap-3 items-center">
              <div className="w-7 h-7 rounded-lg bg-gray-200/70 flex justify-center items-center">
                <Image
                  src={GridImage}
                  alt="File Icon"
                  className="w-3.5 h-4 opacity-60"
                />
              </div>
              <p className="text-black/80 font-medium text-sm">CV TEMPLATES</p>
            </Link>
            <div className="w-full flex flex-col">
              {cvNavLinks.map((data) => {
                return (
                  <Link
                    key={crypto.randomUUID()}
                    href={data.path}
                    className="py-2 pr-2 pl-10 rounded-lg hover:bg-gray-200/70 text-black/70 font-medium text-sm"
                  >
                    {data.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Link href="/blog" className="flex gap-3 items-center">
              <div className="w-7 h-7 rounded-lg bg-gray-200/70 flex justify-center items-center">
                <Image
                  src={LeafImage}
                  alt="File Icon"
                  className="w-3.5 h-4 opacity-80"
                />
              </div>
              <p className="text-black/80 font-medium text-sm">CV HELP</p>
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link href="/cv-examples" className="flex gap-3 items-center">
              <div className="w-7 h-7 rounded-lg bg-gray-200/70 flex justify-center items-center">
                <Image
                  src={FileImage}
                  alt="File Icon"
                  className="w-3.5 h-4 opacity-80"
                />
              </div>
              <p className="text-black/80 font-medium text-sm">CV EXAMPLES</p>
            </Link>
          </div>
        </div>
      )}
      {selectedMobileMenu === "Resources" && (
        <div className="w-full h-[300px] overflow-y-auto pt-2 flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <Link href="/faq" className="flex gap-3 items-center">
              <div className="w-7 h-7 rounded-lg bg-gray-200/70 flex justify-center items-center">
                <Image
                  src={QuestionIcon}
                  alt="File Icon"
                  className="w-4 h-4 opacity-80"
                />
              </div>
              <p className="text-black/80 font-medium text-sm">FAQS</p>
            </Link>
            <div className="w-full flex flex-col">
              {faqsData.map((data) => {
                return (
                  <Link
                    key={crypto.randomUUID()}
                    href={data.path}
                    className="py-2 pr-2 pl-10 rounded-lg hover:bg-gray-200/70 text-black/70 font-medium text-sm"
                  >
                    {data.title}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Link href="/blog" className="flex gap-3 items-center">
              <div className="w-7 h-7 rounded-lg bg-gray-200/70 flex justify-center items-center">
                <Image
                  src={FileImage}
                  alt="File Icon"
                  className="w-3.5 h-4 opacity-80"
                />
              </div>
              <p className="text-black/80 font-medium text-sm">BLOG</p>
            </Link>
          </div>
        </div>
      )}
      <div className="w-full flex flex-col gap-4 pt-8">
        <Link
          className="border-black/70 w-full flex justify-center items-center border duration-300 hover:-translate-y-1 text-black/80 font-medium text-sm py-2.5 rounded-lg"
          href="/login"
        >
          Login
        </Link>

        <Link
          className="bg-AnalogueShiftsTextColor w-full flex justify-center items-center duration-300 hover:-translate-y-1 text-black/80 font-medium text-sm py-2.5 rounded-lg"
          href="/resume-builder/app/how-to-start"
        >
          Build My Resume
        </Link>
      </div>
      <div className="py-2 border-t absolute bottom-0 w-full flex justify-center items-center gap-2">
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
