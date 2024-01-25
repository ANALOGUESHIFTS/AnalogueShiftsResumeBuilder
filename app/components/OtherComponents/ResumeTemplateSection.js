"use client";
import { useState, useEffect } from "react";
import FileImage from "@/public/file-icon.png";
import Image from "next/image";
import Link from "next/link";
import AdvancedResumeTemplate from "../templates/resume/Advanced";
import { dummyUserData } from "./data";
import ProfessionalResumeTemplate from "../templates/resume/Professional";
import SimpleTemplate from "../templates/resume/Simple";

// Contexts
import { useResumeTemplates } from "../contexts/ResumeTemplatesContext";
import TemplateComponent from "../templates/TemplateComponent";

export default function ResumeTemplateSection() {
  const [selected, setSelected] = useState("Resume");
  const { resumeTemplates, updateResumeTemplates } = useResumeTemplates();

  // const resumeTemplates = [
  //   {
  //     id: "advanced-resume",
  //     template: <AdvancedResumeTemplate data={dummyUserData} />,
  //     name: "Advanced Template",
  //   },
  // ];

  const coverLetterTemplates = [];

  return (
    <main className="w-full pt-7  h-[1000px] flex flex-col items-center bg-white relative curvy-box">
      <div className=" relative bg-gray-200/30 w-[250px] rounded-full h-[40px] p-1">
        <div
          style={{
            transform: `translateX(${selected === "Resume" ? "0px" : "100%"})`,
          }}
          className="w-6/12 h-full rounded-full duration-300 bg-white shadow-lg"
        ></div>
        <button
          onClick={() => setSelected("Resume")}
          className={`flex w-6/12 h-full justify-center gap-1.5 hover:text-black/90 font-medium items-center absolute left-0 top-0  text-xs ${
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
          className={`flex w-6/12 h-full justify-center gap-1.5 font-medium hover:text-black/90 items-center absolute right-0 top-0 text-xs ${
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
          ? "Regardless of your background, the Genius resume maker offers a template perfectly suited for showcasing your experience and skill set."
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

      {selected === "Resume" && (
        <div className="w-full flex gap-5 px-7 overflow-x-auto h-[600px]">
          {resumeTemplates &&
            resumeTemplates.map((data) => {
              return (
                <div
                  key={crypto.randomUUID()}
                  className="relative h-max template-box w-[450px] max-w-full pb-2 rounded-lg bg-white shadow-xl"
                >
                  <div className="w-full ">
                    <div className="w-full h-[500px] overflow-y-scroll scroll-hidden  duration-300 rounded-xl">
                      {/* <TemplateComponent resume={data} data={dummyUserData} /> */}
                    </div>
                    <p className="text-center mt-3 py-2 border-t text-black/80 text-sm font-medium">
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
        <div className="w-full h-[600px] flex gap-5 px-7 overflow-x-auto ">
          {coverLetterTemplates.map((data) => {
            return (
              <div
                key={crypto.randomUUID()}
                className="relative h-max template-box w-[450px] max-w-full pb-2 rounded-lg bg-white shadow-xl"
              >
                <div className="w-full ">
                  <div className="w-full h-[500px] overflow-y-scroll scroll-hidden  duration-300 rounded-xl">
                    {data.template}
                  </div>
                  <p className="text-center mt-3 py-2 border-t text-black/80 text-sm font-medium">
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
    </main>
  );
}
