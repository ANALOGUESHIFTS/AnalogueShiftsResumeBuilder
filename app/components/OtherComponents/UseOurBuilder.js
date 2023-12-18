"use client";
import { useState } from "react";
import LoadingProgress from "./LoadingProgress";
import StepOneIcon from "@/public/generate-bullet-point.svg";
import StepTwoIcon from "@/public/try-out-different-template.svg";
import StepThreeIcon from "@/public/instantly-download-your-resume.svg";

import Image from "next/image";

export default function UseOurBuilder() {
  const [selected, setSelected] = useState("1ST STEP");

  const steps = [
    {
      step: "1ST STEP",
      color: "#4b94ea",
      title: "Fill in a few quick details",
      description:
        "Input your basic information and let our software handle the writing and formatting.",
      icon: StepOneIcon,
    },
    {
      step: "2ND STEP",
      color: "#ea723c",
      title: "Pick a professional template",
      description:
        "Each template in our cover letter builder is proven to help job seekers land interviews.",
      icon: StepTwoIcon,
    },
    {
      step: "3RD STEP",
      color: "#2ca482",
      title: "Download your new cover letter",
      description:
        "PDF & Word formats available. With your letter, you're ready to enhance your job hunt.",
      icon: StepThreeIcon,
    },
  ];

  const handleFull = () => {
    if (selected === "1ST STEP") setSelected("2ND STEP");
    if (selected === "2ND STEP") setSelected("3RD STEP");
    if (selected === "3RD STEP") setSelected("1ST STEP");
  };

  return (
    <div className="w-full h-[500px] max-[838px]:h-max max-[838px]:flex-col max-[838px]:py-6 flex justify-between items-center px-10 max-[600px]:px-5">
      <div className="w-[40%] max-[838px]:w-full h-full flex flex-col justify-center">
        <p className="text-black/50 font-bold tracking-wide text-[13px]">
          THE NEXT STEP
        </p>
        <p className="py-5 text-[2.6rem]  max-[900px]:text-xl font-extrabold text-black/80">
          Use our builder in 3 simple steps
        </p>
        <p className="text-black/60 font-normal pb-10 tracking-normal text-base">
          Using our cover letter generator is easy. In <b>three easy steps</b>,
          you can create your own customized cover letter to use in your next
          job application.
        </p>
      </div>
      <div className="w-[55%] max-[838px]:w-full h-full flex flex-col justify-center gap-4">
        {steps.map((data) => {
          return (
            <div
              key={crypto.randomUUID()}
              onClick={() => setSelected(data.step)}
              style={{ height: `${selected === data.step ? "160px" : "85px"}` }}
              className="overflow-y-hidden w-fulll rounded-xl shadow-2xl bg-white p-4 cursor-pointer duration-300"
            >
              <div className="w-full h-[53px] flex justify-between">
                <div className="w-[80%] h-full flex flex-col justify-between">
                  <p
                    style={{
                      color: `${
                        selected === data.step ? data.color : "rgba(0,0,0,0.5)"
                      }`,
                    }}
                    className=" font-semibold tracking-wide text-[13px]"
                  >
                    {data.step}
                  </p>
                  <p className="text-black/90 font-medium tracking-normal text-base">
                    {data.title}
                  </p>
                </div>
                <div className="w-[50px] h-[50px] flex justify-center items-center bg-AnalogueShiftsTextColor/40 shape-box">
                  <Image
                    src={data.icon}
                    alt="Icon"
                    className="w-[60%] h-[60%]"
                  />
                </div>
              </div>
              <div className="w-full h-[65px] flex flex-col">
                {selected === data.step && (
                  <p className="text-black/70 font-normal py-2 tracking-normal text-sm">
                    {data.description}
                  </p>
                )}
                {selected === data.step && (
                  <LoadingProgress bg={data.color} full={handleFull} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
