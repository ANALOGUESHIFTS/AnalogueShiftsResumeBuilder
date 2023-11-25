"use client";
import { useState, useEffect } from "react";
import FileImage from "@/public/file-icon.png";
import Image from "next/image";
import Link from "next/link";
import TemplateOne from "@/public/template-one.webp";
import TemplateTwo from "@/public/template-two.webp";
import ResumeTemplateTwo from "@/public/resume-template-one.webp";
import ResumeTemplateThree from "@/public/resume-template-two.webp";
import RightButton from "@/public/right-arrow-icon.png";
import CoverLetterOne from "@/public/cover-letter-one.webp";
import CoverLetterTwo from "@/public/cover-letter-two.webp";
import CoverLetterThree from "@/public/cover-letter-three.webp";

export default function ResumeTemplateSection() {
  const [selected, setSelected] = useState("Resume");
  const [resumeTransform, setResumeTransform] = useState(0);
  const [coverLetterTransform, setCoverLetterTransform] = useState(0);

  const resumeTemplates = [
    {
      id: "resume-01",
      img: TemplateTwo,
      name: "Clean",
    },
    {
      id: "resume-02",
      img: ResumeTemplateTwo,
      name: "Clean",
    },
    {
      id: "resume-03",
      img: ResumeTemplateThree,
      name: "Clean",
    },
    {
      id: "resume-04",
      img: TemplateTwo,
      name: "Clean",
    },
    {
      id: "resume-05",
      img: ResumeTemplateTwo,
      name: "Clean",
    },
    {
      id: "resume-06",
      img: ResumeTemplateThree,
      name: "Clean",
    },
    {
      id: "resume-07",
      img: TemplateTwo,
      name: "Clean",
    },
  ];

  const coverLetterTemplates = [
    {
      id: "cover-letter-01",
      img: TemplateOne,
      name: "Clean",
    },
    {
      id: "cover-letter-02",
      img: CoverLetterOne,
      name: "Clean",
    },
    {
      id: "cover-letter-03",
      img: CoverLetterTwo,
      name: "Clean",
    },
    {
      id: "cover-letter-04",
      img: CoverLetterThree,
      name: "Clean",
    },
    {
      id: "cover-letter-05",
      img: TemplateOne,
      name: "Clean",
    },
    {
      id: "cover-letter-06",
      img: CoverLetterOne,
      name: "Clean",
    },
    {
      id: "cover-letter-07",
      img: CoverLetterThree,
      name: "Clean",
    },
  ];

  const resumeTransformIncrement = () => {
    let max = 350 * resumeTemplates.length;
    if (resumeTransform > -max) {
      setResumeTransform((prev) => prev - 350);
    }
  };
  const resumeTransformDecrement = () => {
    if (resumeTransform < 0) {
      setResumeTransform((prev) => prev + 350);
    }
  };
  const coverLetterTransformIncrement = () => {
    let max = 350 * coverLetterTemplates.length;
    if (coverLetterTransform > -max) {
      setCoverLetterTransform((prev) => prev - 350);
    }
  };
  const coverLetterTransformDecrement = () => {
    if (coverLetterTransform < 0) {
      setCoverLetterTransform((prev) => prev + 350);
    }
  };

  return (
    <main className="w-full  h-[1150px] flex flex-col items-center bg-white z-30 relative">
      <div className="curvy-box absolute bottom-[80px] left-0 w-full h-[550px] z-10"></div>
      <div className="z-10 relative bg-gray-200/30 w-[250px] rounded-full h-[40px] p-1">
        <div
          style={{
            transform: `translateX(${selected === "Resume" ? "0px" : "100%"})`,
          }}
          className="w-6/12 h-full z-20 rounded-full duration-300 bg-white shadow-lg"
        ></div>
        <button
          onClick={() => setSelected("Resume")}
          className={`flex w-6/12 h-full justify-center gap-1.5 hover:text-black/90 font-medium items-center absolute left-0 top-0 z-30 text-xs ${
            selected === "Resume" ? "text-black/90" : "text-black/60"
          }`}
        >
          <Image
            src={FileImage}
            alt="File"
            className={`w-2.5 h-3 ${
              selected === "Resume" ? "opacity-100" : "opacity-60"
            }`}
          />
          Resume
        </button>
        <button
          onClick={() => setSelected("Cover Letter")}
          className={`flex w-6/12 h-full justify-center gap-1.5 font-medium hover:text-black/90 items-center absolute right-0 top-0 z-30 text-xs ${
            selected === "Cover Letter" ? "text-black/90" : "text-black/60"
          }`}
        >
          <Image
            src={FileImage}
            alt="File"
            className={`w-2.5 h-3 ${
              selected === "Cover Letter" ? "opacity-100" : "opacity-60"
            }`}
          />
          Cover Letter
        </button>
      </div>
      <p className="py-5 text-[2.6rem] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80">
        Choose your favorite template
      </p>
      <p className="text-black/60 w-[700px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal pb-10 tracking-normal text-base text-center">
        {selected === "Resume"
          ? "Regardless of your background, there’s a template in the Genius resume maker that’s perfect for highlighting your experience & skill set."
          : "Let the Genius cover letter generator automatically format the content of your letter into a professional, HR-approved template."}
      </p>
      {selected === "Resume" ? (
        <Link
          className="w-max px-8 mb-10 flex justify-center border-black/40 border hover:border-black/70 items-center duration-300 hover:-translate-y-1 text-black/80 font-medium text-sm py-3 rounded-lg"
          href="/resume-templates"
        >
          View More Resume Templates
        </Link>
      ) : (
        <Link
          className="w-max px-8 mb-10 flex justify-center border-black/40 border hover:border-black/70 items-center duration-300 hover:-translate-y-1 text-black/80 font-medium text-sm py-3 rounded-lg"
          href="/cover-letter-templates"
        >
          View More Cover Letter Templates
        </Link>
      )}

      <div className="w-full h-max relative z-30 overflow-hidden max-[500px]:pl-3">
        <button
          onClick={() => {
            if (selected === "Resume") {
              resumeTransformDecrement();
            } else {
              coverLetterTransformDecrement();
            }
          }}
          className="absolute z-40 top-[45%] left-6 bg-white/90 shadow-2xl flex justify-center items-center rounded-full h-10 w-10"
        >
          <Image
            src={RightButton}
            alt="Left Icon"
            className="w-6/12 h-6/12 rotate-[-180deg]"
          />
        </button>
        <button
          onClick={() => {
            if (selected === "Resume") {
              resumeTransformIncrement();
            } else {
              coverLetterTransformIncrement();
            }
          }}
          className="absolute z-40 top-[45%] right-6 bg-white/90 shadow-2xl flex justify-center items-center rounded-full h-10 w-10"
        >
          <Image src={RightButton} alt="Right Icon" className="w-6/12 h-6/12" />
        </button>
        {selected === "Resume" && (
          <div
            style={{ transform: `translateX(${resumeTransform}px)` }}
            className="w-max duration-300 flex gap-5"
          >
            {resumeTemplates.map((data) => {
              return (
                <div
                  key={() => Math.random() * Math.random()}
                  className="relative template-box w-[350px] max-w-[90%]"
                >
                  <div className="w-full h-max pb-[60px]">
                    <Image
                      className="w-full h-max  duration-300 shadow-xl rounded-xl"
                      src={data.img}
                      alt="Template Image"
                    />
                    <p className="text-center py-4 text-black/80 text-sm font-medium">
                      {data.name}
                    </p>
                  </div>
                  <Link
                    className="template-link w-max absolute opacity-0  bottom-[20%] left-[25%] px-8 flex hover:scale-105 justify-center bg-AnalogueShiftsTextColor/80 items-center duration-300 text-black/80 font-medium text-sm py-3 rounded-lg"
                    href={`/resume-builder/app/how-to-start/${data.id}`}
                  >
                    Use This Template
                  </Link>
                </div>
              );
            })}
          </div>
        )}
        {selected !== "Resume" && (
          <div
            style={{ transform: `translateX(${coverLetterTransform}px)` }}
            className="w-max duration-300 flex gap-5"
          >
            {coverLetterTemplates.map((data) => {
              return (
                <div
                  key={() => Math.random() * Math.random()}
                  className="relative template-box w-[350px] max-w-[90%]"
                >
                  <div className="w-full h-max pb-[60px]">
                    <Image
                      className="w-full h-max  duration-300 shadow-xl rounded-xl"
                      src={data.img}
                      alt="Template Image"
                    />
                    <p className="text-center py-4 text-black/80 text-sm font-medium">
                      {data.name}
                    </p>
                  </div>
                  <Link
                    className="template-link w-max absolute opacity-0  bottom-[20%] left-[25%] px-8 flex hover:scale-105 justify-center bg-AnalogueShiftsTextColor/80 items-center duration-300 text-black/80 font-medium text-sm py-3 rounded-lg"
                    href={`/cover-letter-builder/app/how-to-start/`}
                  >
                    Use This Template
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
