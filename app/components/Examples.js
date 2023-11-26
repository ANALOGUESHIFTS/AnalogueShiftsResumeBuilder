"use client";
import { useState, useEffect } from "react";
import FileImage from "@/public/file-icon.png";
import Image from "next/image";
import Link from "next/link";

export default function Examples() {
  const [selected, setSelected] = useState("Resume");

  const resumeLinks = [
    {
      title: "Acting",
      color: "#79b2f0",
      path: "/resume-samples/acting-resume-examples",
    },
    {
      title: "Administrative Assistant",
      color: "#ee7856",
      path: "/resume-samples/administrative-assistant-resume-examples",
    },
    {
      title: "Architecture",
      color: "#FAE315",
      path: "/resume-samples/architecture-resume-examples",
    },
    {
      title: "College Student",
      color: "#79b2f0",
      path: "/resume-samples/college-student-resume-examples",
    },
    {
      title: "Customer Service",
      color: "#ee7856",
      path: "/resume-samples/customer-service-resume-examples",
    },
    {
      title: "IT",
      color: "#FAE315",
      path: "/resume-samples/it-resume-examples",
    },
    {
      title: "Graphic Design",
      color: "#79b2f0",
      path: "/resume-samples/graphic-design-resume-examples",
    },
    {
      title: "Project Manager",
      color: "#ee7856",
      path: "/resume-samples/project-manager-resume-examples",
    },
    {
      title: "Marketing",
      color: "#FAE315",
      path: "/resume-samples/marketing-resume-examples",
    },
    {
      title: "Nursing",
      color: "#79b2f0",
      path: "/resume-samples/nursing-resume-examples",
    },
    {
      title: "Teacher",
      color: "#ee7856",
      path: "/resume-samples/teacher-resume-examples",
    },
    {
      title: "High School",
      color: "#FAE315",
      path: "/resume-samples/high-school-resume-examples",
    },
    {
      title: "Medical Assistant",
      color: "#79b2f0",
      path: "/resume-samples/medical-assitant-resume-examples",
    },
    {
      title: "Software Engineer",
      color: "#ee7856",
      path: "/resume-samples/software-engineer-resume-examples",
    },
    {
      title: "Cashier",
      color: "#FAE315",
      path: "/resume-samples/cashier-resume-examples",
    },
    {
      title: "Retail Sales Associate Examples",
      color: "#79b2f0",
      path: "/resume-samples/retail-sales-associate-resume-examples",
    },
  ];

  const coverLetterLinks = [
    {
      title: "Administrative Assistant",
      color: "#79b2f0",
      path: "/cover-letter-examples/administrative-assistant-cover-letter-example",
    },
    {
      title: "Babysitter",
      color: "#ee7856",
      path: "/cover-letter-examples/babysitter-cover-letter-example",
    },
    {
      title: "College Student",
      color: "#FAE315",
      path: "/cover-letter-examples/college-student-cover-letter-example",
    },
    {
      title: "Customer Service",
      color: "#79b2f0",
      path: "/cover-letter-examples/customer-service-cover-letter-example",
    },
    {
      title: "Graphic Designer",
      color: "#ee7856",
      path: "/cover-letter-examples/graphic-designer-cover-letter-example",
    },
    {
      title: "IT",
      color: "#FAE315",
      path: "/cover-letter-examples/it-cover-letter-example",
    },
    {
      title: "Librarian",
      color: "#79b2f0",
      path: "/cover-letter-examples/librarian-cover-letter-example",
    },

    {
      title: "Marketing",
      color: "#FAE315",
      path: "/cover-letter-examples/marketing-cover-letter-example",
    },
    {
      title: "Pharmacist",
      color: "#ee7856",
      path: "/cover-letter-examples/pharmacist-cover-letter-example",
    },
    {
      title: "Nursing",
      color: "#79b2f0",
      path: "/cover-letter-examples/nursing-cover-letter-example",
    },
    {
      title: "Teacher",
      color: "#ee7856",
      path: "/cover-letter-examples/teacher-cover-letter-example",
    },
    {
      title: "High School",
      color: "#FAE315",
      path: "/cover-letter-examples/high-school-cover-letter-example",
    },
    {
      title: "Medical Assistant",
      color: "#79b2f0",
      path: "/cover-letter-examples/medical-assitant-cover-letter-example",
    },
    {
      title: "Software Engineer",
      color: "#ee7856",
      path: "/cover-letter-examples/software-engineer-cover-letter-example",
    },
    {
      title: "Consulting",
      color: "#FAE315",
      path: "/cover-letter-examples/consulting-cover-letter-example",
    },
    {
      title: "Academic",
      color: "#79b2f0",
      path: "/cover-letter-examples/academic-cover-letter-example",
    },
    {
      title: "Project Manager",
      color: "#ee7856",
      path: "/cover-letter-examples/project-manager-cover-letter-example",
    },
  ];

  return (
    <div className="w-full h-[300px]  flex justify-center bg-white max-[1000px]:h-max max-[1000px]:pb-10">
      <div className="w-[90%] h-[500px] max-[1000px]:h-max rounded-3xl bg-white shadow-2xl translate-y-[-250px] max-[1000px]:translate-y-[-100px] z-30 max-[1000px]:p-5 max-[1000px]:flex max-[1000px]:flex-col max-[1000px]:gap-4 p-[45px] grid grid-cols-6 gap-5">
        <div className="col-span-3 max-[1000px]:h-max max-[1000px]:w-full max-[1000px]:items-center max-[1000px]:p-3 h-full flex flex-col gap-7 pr-14">
          <div className="z-10 relative bg-gray-200/30 w-[250px] rounded-full h-[40px] p-1">
            <div
              style={{
                transform: `translateX(${
                  selected === "Resume" ? "0px" : "100%"
                })`,
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
          <p className=" w-full text-[2.6rem]  max-[900px]:w-[90%] max-[900px]:text-xl font-extrabold text-black/70">
            Look at examples for inspiration
          </p>
          <p className="text-black/60 w-full  font-normal tracking-normal text-base">
            There are 600+ resume & cover letter examples on Resume Genius. Each
            sample was written and approved by our{" "}
            <Link
              className="text-AnalogueShiftsTextColor hover:underline"
              href=""
            >
              team of experts
            </Link>
            .
          </p>
          <Link
            className="text-base font-medium text-black/60 hover:text-AnalogueShiftsTextColor/80 w-max"
            href={`${
              selected === "Resume"
                ? "/resume-samples"
                : "/cover-letter-examples"
            }`}
          >
            {selected === "Resume"
              ? "View Resume Examples"
              : "View Cover Letter Examples"}
          </Link>
        </div>
        <div className="col-span-3 max-[1000px]:h-max max-[1000px]:w-full max-[1000px]:p-3 duration-300 px-3 h-full flex flex-wrap justify-center items-center gap-x-5 gap-y-5">
          {selected === "Resume"
            ? resumeLinks.map((data) => {
                return (
                  <Link
                    key={crypto.randomUUID()}
                    style={{ borderColor: data.color }}
                    href={data.path}
                    className={`py-2 px-6 text-black/75 duration-300 hover:scale-105 font-semibold text-sm rounded-full border`}
                  >
                    {data.title}
                  </Link>
                );
              })
            : coverLetterLinks.map((data) => {
                return (
                  <Link
                    key={crypto.randomUUID()}
                    style={{ borderColor: data.color }}
                    href={data.path}
                    className={`py-2 px-6 text-black/75 duration-300 hover:scale-105 font-semibold text-sm rounded-full border`}
                  >
                    {data.title}
                  </Link>
                );
              })}
        </div>
      </div>
    </div>
  );
}
