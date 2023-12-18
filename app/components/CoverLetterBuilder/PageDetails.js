"use client";
import Link from "next/link";
import HeroBg from "@/public/cover-letter-builder-hero.webp";
import Image from "next/image";
import SalesForceLogo from "@/public/salesforce-logo.svg";
import NewYorkLogo from "@/public/new-york-post-logo.svg";
import MSNBC from "@/public/msnbc-logo.svg";
import FOX from "@/public/fox-logo.svg";
import Entrepreneur from "@/public/entrepreneur-logo.svg";
import Zendesk from "@/public/zendesk-logo.svg";
import UseOurBuilder from "../OtherComponents/UseOurBuilder";
import HowOurCoverLetterBuilderWorks from "../OtherComponents/HowOurCoverLetterBuilderWorks";
import CoverLetterSamples from "../OtherComponents/CoverLetterSamples";
import Faqs from "../OtherComponents/Faqs";
import RightButton from "@/public/right-arrow-icon.png";
import { useState } from "react";
import { serviceData, coverLetterTemplates } from "./data";

const logos = [SalesForceLogo, NewYorkLogo, MSNBC, FOX, Entrepreneur, Zendesk];

export default function CoverLetterBuilderPageDetails() {
  const [coverLetterTransform, setCoverLetterTransform] = useState(0);
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

  const handleMouseOver = (id) => {
    let elem = document.getElementById(id);
    elem.classList.add("pauseAnimation");
  };
  const handleMouseOut = (id) => {
    let elem = document.getElementById(id);
    elem.classList.remove("pauseAnimation");
  };

  return (
    <main className="w-full h-auto">
      <main className="w-full curvy-box box-border items-center h-[800px] max-[600px]:h-[620px] relative pt-[150px] px-5 flex flex-col">
        <p className="text-black/50 text-center max-[1050px]:text-center font-bold tracking-wide text-[13px]">
          ONLINE COVER LETTER GENERATOR
        </p>
        <p className="py-5 text-[2.6rem] w-[700px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80">
          Make the perfect cover letter.
        </p>
        <p className="text-black/60 w-[800px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal pb-10 tracking-normal text-base text-center">
          Writing a good cover letter takes time and effort. Our AI-powered
          cover letter generator makes it easy — helping you build a customized
          cover letter that improves your chance of getting an interview.
        </p>
        <div className="w-full flex justify-center">
          <Link
            className="w-max px-8  flex justify-center bg-AnalogueShiftsTextColor/80 items-center hover:-translate-y-1 text-black/80 duration-300 hover:scale-105 font-medium text-sm py-3 rounded-lg"
            href="/cover-letter-builder/app"
          >
            Build My Cover Letter
          </Link>
        </div>
      </main>
      <Image
        src={HeroBg}
        alt="Hero Background"
        className="absolute w-[90%] left-[5%] top-[480px] z-30 max-[600px]:w-full max-[600px]:left-0 max-[600px]:top-[520px]"
      />
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
          Proven cover letter templates
        </p>
        <p className="text-black/60 w-[700px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal pb-10 tracking-normal text-base text-center">
          Our wide range of professional, HR-approved templates have helped
          100,000+ job seekers earn jobs in hundreds of different industries.
        </p>

        <Link
          className="w-max px-8 mb-10 flex justify-center border-black/40 border hover:border-black/70 items-center duration-300 hover:-translate-y-1 text-black/80 font-medium text-sm py-3 rounded-lg"
          href="/cover-letter-builder/app"
        >
          Make My Cover Letter Now
        </Link>

        <div className="w-full h-max relative z-30 overflow-hidden max-[500px]:pl-3">
          <button
            onClick={coverLetterTransformDecrement}
            className="absolute z-40 top-[45%] left-6 bg-white/90 shadow-2xl flex justify-center items-center rounded-full h-10 w-10"
          >
            <Image
              src={RightButton}
              alt="Left Icon"
              className="w-6/12 h-6/12 rotate-[-180deg]"
            />
          </button>
          <button
            onClick={coverLetterTransformIncrement}
            className="absolute z-40 top-[45%] right-6 bg-white/90 shadow-2xl flex justify-center items-center rounded-full h-10 w-10"
          >
            <Image
              src={RightButton}
              alt="Right Icon"
              className="w-6/12 h-6/12"
            />
          </button>

          <div
            style={{ transform: `translateX(${coverLetterTransform}px)` }}
            className="w-max duration-300 flex gap-5"
          >
            {coverLetterTemplates.map((data) => {
              return (
                <div
                  key={crypto.randomUUID()}
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
        </div>
      </main>
      <div className="w-full h-max py-8 px-10 max-[500px]:px-4">
        <div className="w-full h-max rounded-2xl bg-[#f8f9fb] p-7 flex flex-col items-center">
          <p className="py-5 text-[2rem] w-[750px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-bold text-black/80">
            Get job offers from top companies
          </p>
          <p className="text-black/60 w-[800px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal pb-10 tracking-normal text-base text-center">
            The results of our cover letter generator speak for themselves. Our
            users have landed jobs at some of the most competitive companies in
            the world:
          </p>
          <div
            onMouseOver={() => handleMouseOver("logo-box3")}
            onMouseOut={() => handleMouseOut("logo-box3")}
            className="w-full overflow-hidden mb-5"
          >
            <div
              id="logo-box3"
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
            onMouseOver={() => handleMouseOver("logo-box4")}
            onMouseOut={() => handleMouseOut("logo-box4")}
            className="w-full overflow-hidden "
          >
            <div
              id="logo-box4"
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
      <UseOurBuilder />
      <div className="px-5 w-full flex justify-center">
        <p className="py-5 text-[2.6rem] text-center  max-[900px]:text-xl font-extrabold text-black/70">
          How our cover letter builder works
        </p>
      </div>
      <HowOurCoverLetterBuilderWorks />
      <CoverLetterSamples />
      <Faqs />
      <div className="w-full h-[400px] px-10 max-[500px]:h-max max-[500px]:px-4 pb-[50px]">
        <div className="w-full h-[350px] rounded-3xl max-[500px]:h-auto bg-white shadow-2xl p-7 flex justify-center flex-col items-center">
          <p className="py-3 text-[2.6rem] w-[700px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80">
            Create your cover letter now
          </p>
          <p className="text-black/60 w-[800px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal pb-10 tracking-normal text-base text-center">
            Don’t let a cover letter hold you back from getting your dream job.
            Try our professional cover letter builder and make cover letters
            that perfectly showcase your qualifications and interest in the role
            to land more interviews.
          </p>
          <div className="w-full flex max-[500px]:flex-col justify-center pb-6">
            <Link
              className="w-max max-[500px]:w-full px-8  flex justify-center bg-AnalogueShiftsTextColor/80 items-center hover:-translate-y-1 text-black/80 duration-300 hover:scale-105 font-medium text-sm py-3 rounded-lg"
              href="/cover-letter-builder/app"
            >
              Build My Cover Letter
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
