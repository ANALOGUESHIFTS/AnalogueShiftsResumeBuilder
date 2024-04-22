"use client";
import { useState, useEffect } from "react";
import FileImage from "@/public/images/file-icon.png";
import Image from "next/image";
import Link from "next/link";

// Templates
import { resumeTemplates } from "@/app/resources/resume/data";
import { coverLetterTemplates } from "@/app/resources/cover-letter/data";

// Splide JS
import "@splidejs/react-splide/css";
import { SplideSlide, Splide } from "@splidejs/react-splide";

export default function ResumeTemplateSection() {
  const [selected, setSelected] = useState("Resume");
  const [templates, setTemplates] = useState(resumeTemplates);
  const [perPage, setPerPage] = useState(1);

  // Handle OnResize
  const handleResize = () => {
    if (window.innerWidth <= 500) {
      setPerPage(1);
    } else if (window.innerWidth > 500 && window.innerWidth < 1000) {
      setPerPage(2);
    } else {
      setPerPage(3);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (selected === "Resume") {
      setTemplates(resumeTemplates);
    } else {
      setTemplates(coverLetterTemplates);
    }
  }, [selected]);

  return (
    <main className="w-full pt-7  h-max flex flex-col items-center bg-white relative curvy-box">
      {/* Switch */}
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
      {/* Switch */}

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

      {/* Templates */}

      <Splide
        aria-label="Templates"
        className="w-full h-max px-10"
        options={{
          perPage: perPage,
        }}
      >
        {templates[0] &&
          templates.map((data) => {
            return (
              <SplideSlide
                className="w-full flex items-center justify-center pb-14"
                key={crypto.randomUUID()}
              >
                <div className="relative mx-3 max-w-[450px] template-box h-[500px] pb-2 rounded-lg bg-white">
                  <div className="h-full w-full">
                    <div className="w-full h-full scroll-hidden rounded-t-xl  duration-300">
                      <Image
                        src={data.templateImage}
                        alt="Template Image"
                        className="rounded-t-xl mx-auto h-full w-max object-fit"
                      />
                    </div>
                    <p className="text-center py-2 border-t text-black/80 text-sm font-medium">
                      {data.name}
                    </p>
                  </div>
                  <Link
                    className="template-link w-max absolute opacity-0  bottom-[20%] left-[25%] px-8 flex hover:scale-105 justify-center bg-AnalogueShiftsTextColor/80 items-center duration-300 text-black/80 font-medium text-sm py-3 rounded-lg"
                    href={`/${
                      selected === "Resume"
                        ? "resume-builder"
                        : "cover-letter-builder"
                    }/app/how-to-start/${data.id}`}
                  >
                    Use This Template
                  </Link>
                </div>
              </SplideSlide>
            );
          })}
      </Splide>
    </main>
  );
}
