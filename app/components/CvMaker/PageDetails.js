"use client";
import { useState } from "react";
import Link from "next/link";
import HeroBg from "@/public/hero-image.png";
import Image from "next/image";
import SalesForceLogo from "@/public/salesforce-logo.svg";
import NewYorkLogo from "@/public/new-york-post-logo.svg";
import MSNBC from "@/public/msnbc-logo.svg";
import FOX from "@/public/fox-logo.svg";
import Entrepreneur from "@/public/entrepreneur-logo.svg";
import Zendesk from "@/public/zendesk-logo.svg";
import Faqs from "../OtherComponents/Faqs";
import UseOurCVBuilder from "../OtherComponents/UseOurCVBuilder";
import HowOurCvBuilderWorks from "../OtherComponents/HowOurCvBuilderWorks";
import CvSamples from "../OtherComponents/CvSamples";
import RightButton from "@/public/right-arrow-icon.png";
import { serviceData, resumeTemplates } from "./data";

const logos = [SalesForceLogo, NewYorkLogo, MSNBC, FOX, Entrepreneur, Zendesk];

export default function CvMakerPageDetails() {
  const [resumeTransform, setResumeTransform] = useState(0);
  const handleMouseOver = (id) => {
    let elem = document.getElementById(id);
    elem.classList.add("pauseAnimation");
  };
  const handleMouseOut = (id) => {
    let elem = document.getElementById(id);
    elem.classList.remove("pauseAnimation");
  };

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
  return (
    <main className="w-full h-auto">
      <main className="w-full curvy-box box-border items-center h-[800px] max-[600px]:h-[620px] relative pt-[150px] px-5 flex flex-col">
        <p className="text-black/50 text-center max-[1050px]:text-center font-bold tracking-wide text-[13px]">
          ONLINE CV MAKER
        </p>
        <p className="py-5 text-[2.6rem] w-[700px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80">
          Craft a winning CV in minutes.
        </p>
        <p className="text-black/60 w-[800px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal pb-10 tracking-normal text-base text-center">
          Save yourself from spending hours writing the perfect CV. Generate a
          custom CV in 15 minutes or less and increase your interview prospects
          with our free CV builder tool.
        </p>
        <div className="w-full flex justify-center">
          <Link
            className="w-max px-8  flex justify-center bg-AnalogueShiftsTextColor/80 items-center hover:-translate-y-1 text-black/80 duration-300 hover:scale-105 font-medium text-sm py-3 rounded-lg"
            href="/resume-builder/app/how-to-start"
          >
            Build My CV Now
          </Link>
        </div>
      </main>
      <div className="w-full absolute px-5 top-[480px] left-0 z-30 max-[600px]:top-[520px] flex justify-center">
        <Image src={HeroBg} alt="Hero Background" className="" />
      </div>
      <main className="w-full bg-white box-border items-center h-[900px] max-[1150px]:pt-[280px] max-[986px]:pt-[180px] max-[800px]:pt-[100px] max-[600px]:pt-[260px] max-[450px]:pt-[200px] max-[1150px]:h-max relative pt-[380px] px-5 flex flex-col">
        <div className="w-full px-10 max-[600px]:px-0 h-auto flex flex-wrap gap-x-10 gap-y-10">
          {serviceData.map((data) => {
            return (
              <div
                key={crypto.randomUUID()}
                className="w-[calc(33.3%-40px)] flex flex-col gap-5 max-[1000px]:w-[calc(50%-40px)] max-[700px]:w-full max-[700px]:items-center"
              >
                <div className="w-[70px] h-[70px] flex justify-center items-center bg-AnalogueShiftsTextColor/40 shape-box">
                  <Image
                    src={data.image}
                    alt="Icon"
                    className="w-[60%] h-[60%]"
                  />
                </div>
                <p className="text-black/80 font-bold text-lg pl-2">
                  {data.title}
                </p>
                {data.subTitle}
              </div>
            );
          })}
        </div>
      </main>
      <main className="w-full h-[1000px] pt-10 flex flex-col items-center bg-white relative">
        <p className="py-5 text-[2.6rem] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80">
          Our best CV templates
        </p>
        <p className="text-black/60 w-[700px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal pb-10 tracking-normal text-base text-center">
          Select from our array of HR-approved, professional CV templates.
        </p>

        <Link
          className="w-max px-8 mb-10 flex justify-center border-black/40 border hover:border-black/70 items-center duration-300 hover:-translate-y-1 text-black/80 font-medium text-sm py-3 rounded-lg"
          href="/resume-builder/app/how-to-start"
        >
          Build My CV Now
        </Link>

        <div className="w-full flex gap-5 px-7 overflow-x-auto h-[600px]">
          {resumeTemplates.map((data) => {
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
      </main>
      <div className="w-full h-max py-8 px-10 max-[500px]:px-4">
        <div className="w-full h-max rounded-2xl bg-[#f8f9fb] p-7 flex flex-col items-center">
          <p className="py-5 text-[2rem] w-[750px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-bold text-black/80">
            Our experts have been cited in top publications around the world
          </p>
          <p className="text-black/60 w-[800px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal pb-10 tracking-normal text-base text-center">
            All our authors are authorities in job hunting, interviewing, and CV
            writing. Some of the publications that have cited our experts
            include:
          </p>
          <div
            onMouseOver={() => handleMouseOver("logo-box5")}
            onMouseOut={() => handleMouseOut("logo-box5")}
            className="w-full overflow-hidden mb-5"
          >
            <div
              id="logo-box5"
              className="moveFromRightToLeft w-max flex gap-4"
            >
              {logos.map((logo) => {
                return (
                  <div
                    key={crypto.randomUUID()}
                    className=" w-[200px] h-[80px] border flex justify-center items-center border-dashed rounded-lg border-gray-300"
                  >
                    <Image src={logo} alt="Logo" />
                  </div>
                );
              })}
            </div>
          </div>
          <div
            onMouseOver={() => handleMouseOver("logo-box6")}
            onMouseOut={() => handleMouseOut("logo-box6")}
            className="w-full overflow-hidden "
          >
            <div
              id="logo-box6"
              className="moveFromLeftToRight translate-x-[-100%] w-max flex gap-4"
            >
              {logos.map((logo) => {
                return (
                  <div
                    key={crypto.randomUUID()}
                    className=" w-[200px] h-[80px] border flex justify-center items-center border-dashed rounded-lg border-gray-300"
                  >
                    <Image src={logo} alt="Logo" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <UseOurCVBuilder />
      <div className="px-5 w-full flex justify-center">
        <p className="py-5 text-[2.6rem] text-center  max-[900px]:text-xl font-extrabold text-black/70">
          How our CV builder makes a professional CV fast
        </p>
      </div>
      <HowOurCvBuilderWorks />
      <CvSamples />
      <Faqs />
      <div className="w-full h-[400px] px-10 max-[500px]:h-max max-[500px]:px-4 pb-[50px]">
        <div className="w-full h-[350px] rounded-3xl max-[500px]:h-auto bg-white shadow-2xl p-7 flex justify-center flex-col items-center">
          <p className="py-3 text-[2.6rem] w-[700px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80">
            Ready to make your CV?
          </p>
          <p className="text-black/60 w-[800px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal pb-10 tracking-normal text-base text-center">
            Try out our CV maker to build your professional CV in minutes.
            Creating a quality CV from start to finish is difficult, but becomes
            easy with the help of our software.
          </p>
          <div className="w-full flex max-[500px]:flex-col justify-center pb-6">
            <Link
              className="w-max max-[500px]:w-full px-8  flex justify-center bg-AnalogueShiftsTextColor/80 items-center hover:-translate-y-1 text-black/80 duration-300 hover:scale-105 font-medium text-sm py-3 rounded-lg"
              href="/resume-builder/app/how-to-start"
            >
              Build My CV
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
