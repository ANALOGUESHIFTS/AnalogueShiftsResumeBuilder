"use client";
import { useState } from "react";
import Link from "next/link";
import HeroBg from "@/public/cover-letter-builder-hero.webp";
import Image from "next/image";

import LeverageThePowerOfAi from "@/public/leverage-the-power-of-ai.svg";
import SaveOursOfTime from "@/public/save-hours-of-time.svg";
import MakeACohesiveApplication from "@/public/make-a-cohesive-application.svg";
import TryOutDifferentTemplate from "@/public/try-out-different-template.svg";
import GetPastApplicant from "@/public/get-past-applicant.svg";
import AskForExpertSuggestion from "@/public/ask-for-expert-suggestion.svg";
import TemplateTwo from "@/public/template-two.webp";
import SalesForceLogo from "@/public/salesforce-logo.svg";
import NewYorkLogo from "@/public/new-york-post-logo.svg";
import MSNBC from "@/public/msnbc-logo.svg";
import FOX from "@/public/fox-logo.svg";
import Entrepreneur from "@/public/entrepreneur-logo.svg";
import Zendesk from "@/public/zendesk-logo.svg";
import Faqs from "../components/Faqs";
import UseOurCVBuilder from "../components/UseOurCVBuilder";
import HowOurCvBuilderWorks from "../components/HowOurCvBuilderWorks";
import CvSamples from "../components/CvSamples";
import ResumeTemplateTwo from "@/public/resume-template-one.webp";
import ResumeTemplateThree from "@/public/resume-template-two.webp";
import RightButton from "@/public/right-arrow-icon.png";

export default function Page() {
  const [resumeTransform, setResumeTransform] = useState(0);
  const serviceData = [
    {
      title: "Save hours of time",
      subTitle: (
        <p className="text-black/60 max-[1050px]:text-center font-normal tracking-normal text-base pl-2">
          Our CV maker is a major timesaver. Simply choose your favorite CV
          template, and the builder will help you fill out each section.
        </p>
      ),
      image: SaveOursOfTime,
    },
    {
      title: "Make a matching cover letter",
      subTitle: (
        <p className="text-black/60 max-[1050px]:text-center font-normal tracking-normal text-base pl-2">
          Pair your CV with a customized cover letter to target a specific
          position and boost your chance of landing an interview for the role.
        </p>
      ),
      image: MakeACohesiveApplication,
    },
    {
      title: "Autogenerate bullet points",
      subTitle: (
        <p className="text-black/60 max-[1050px]:text-center font-normal tracking-normal text-base pl-2">
          Our CV maker pulls information from job ads and academic listings,
          then applies AI to generate custom bullet points to add to your CV.
        </p>
      ),
      image: LeverageThePowerOfAi,
    },
    {
      title: "Make a CV summary in seconds",
      subTitle: (
        <p className="text-black/60 max-[1050px]:text-center font-normal tracking-normal text-base pl-2">
          Start your CV off strong with an introduction that showcases why
          you’re a qualified and capable great candidate.
        </p>
      ),
      image: TryOutDifferentTemplate,
    },
    {
      title: "Autoformat an easy-to-read CV",
      subTitle: (
        <p className="text-black/60 max-[1050px]:text-center font-normal tracking-normal text-base pl-2">
          Each CV template in our builder is easy to read for humans and the
          computer programs big companies use to vet candidates.
        </p>
      ),
      image: GetPastApplicant,
    },
    {
      title: "Get CV tips from experts",
      subTitle: (
        <p className="text-black/60 max-[1050px]:text-center font-normal tracking-normal text-base pl-2">
          After you’ve made your CV, our team of CV experts will gladly provide
          you with suggestions and tweaks to perfect your document.
        </p>
      ),
      image: AskForExpertSuggestion,
    },
  ];

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

  const logos = [
    SalesForceLogo,
    NewYorkLogo,
    MSNBC,
    FOX,
    Entrepreneur,
    Zendesk,
  ];

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
          Make a job-winning CV in minutes.
        </p>
        <p className="text-black/60 w-[800px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal pb-10 tracking-normal text-base text-center">
          You don’t need to spend hours writing the perfect CV. Create a custom
          CV in 15 minutes or less and start getting more interviews after using
          our free CV builder tool.
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
                key={() => Math.random() * Math.random()}
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
          Choose from our range of HR-approved, professional CV templates that
          have landed 100,000+ people across the world new jobs.
        </p>

        <Link
          className="w-max px-8 mb-10 flex justify-center border-black/40 border hover:border-black/70 items-center duration-300 hover:-translate-y-1 text-black/80 font-medium text-sm py-3 rounded-lg"
          href="/resume-builder/app/how-to-start"
        >
          Build My CV Now
        </Link>

        <div className="w-full h-max relative z-30 overflow-hidden max-[500px]:pl-3">
          <button
            onClick={resumeTransformDecrement}
            className="absolute z-40 top-[45%] left-6 bg-white/90 shadow-2xl flex justify-center items-center rounded-full h-10 w-10"
          >
            <Image
              src={RightButton}
              alt="Left Icon"
              className="w-6/12 h-6/12 rotate-[-180deg]"
            />
          </button>
          <button
            onClick={resumeTransformIncrement}
            className="absolute z-40 top-[45%] right-6 bg-white/90 shadow-2xl flex justify-center items-center rounded-full h-10 w-10"
          >
            <Image
              src={RightButton}
              alt="Right Icon"
              className="w-6/12 h-6/12"
            />
          </button>

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
                    key={() => Math.random() * Math.random()}
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
                    key={() => Math.random() * Math.random()}
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
