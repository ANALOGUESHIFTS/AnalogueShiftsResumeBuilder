"use client";
import { useState } from "react";
import Link from "next/link";

import SwitchTabs from "@/components/ui/switch-tabs";

//Data
import resumeSamples from "@/resources/resume-builder/samples-links.json";
import coverLetterSamples from "@/resources/cover-letter-builder/samples-links.json";

export default function Examples() {
  const [selected, setSelected] = useState("Resume");

  return (
    <div className="w-full h-[550px] pt-8  flex justify-center bg-white max-[1000px]:h-max max-[1000px]:pb-10">
      <div className="w-[90%] h-[500px] max-[1000px]:h-max rounded-3xl bg-white shadow-2xl z-30 max-[1000px]:p-5 max-[1000px]:flex max-[1000px]:flex-col max-[1000px]:gap-4 p-[45px] grid grid-cols-6 gap-5">
        <div className="col-span-3 max-[1000px]:h-max max-[1000px]:w-full max-[1000px]:items-center max-[1000px]:p-3 h-full flex flex-col gap-7 pr-14">
          {/* SWITCH */}
          <SwitchTabs selected={selected} setSelected={setSelected} />

          <p className=" w-full text-[2.6rem]  max-[900px]:w-[90%] max-[900px]:text-xl font-extrabold text-black/70">
            Explore examples for inspiration
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
            ? resumeSamples.map((data) => {
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
            : coverLetterSamples.map((data) => {
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
