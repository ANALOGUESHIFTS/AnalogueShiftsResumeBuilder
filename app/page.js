"use client";

import Image from "next/image";
import Link from "next/link";

//Images
import curve from "@/public/curve.svg";
import Hero from "@/public/hero-home-page-banner.webp";
import LeverageThePowerOfAi from "@/public/leverage-the-power-of-ai.svg";
import GenerateBulletPoint from "@/public/generate-bullet-point.svg";
import AutoFormatEachSection from "@/public/auto-format-each-section.svg";
import InstantlyDownloadYourResume from "@/public/instantly-download-your-resume.svg";
import GetExpertFeedback from "@/public/get-expert-feedback.svg";
import LaunchYourJobHunt from "@/public/launch-your-job-hunt.svg";

import ResumeTemplateSection from "./components/ResumeTemplateSection";
import Examples from "./components/Examples";
import HowToCreateAResume from "./components/HowToCreateAResume";
import CustomSlides from "./components/CustomSlides";
import GuidesAndAdvice from "./components/GuidesAndAdvice";
import LevelUpJobHunt from "./components/LevelUpJobHunt";
import Experts from "./components/Experts";
import Faqs from "./components/Faqs";
import ReadyToMakeResume from "./components/ReadyToMakeResume";

export default function Home() {
  const serviceData = [
    {
      title: "Leverage the power of AI",
      subTitle:
        "Our AI resume builder lets you make a resume in minutes. Use technology to your advantage & apply for jobs faster.",
      image: LeverageThePowerOfAi,
    },
    {
      title: "Generate bullet points",
      subTitle:
        "Your resume’s experience section is what employers care about most. Autogenerate experience bullet points that prove your on-the-job skills.",
      image: GenerateBulletPoint,
    },
    {
      title: "Auto-format each section",
      subTitle:
        "Formatting can be time-consuming. Don’t let margins & spacing slow you down – put in your details and the resume maker does the rest.",
      image: AutoFormatEachSection,
    },
    {
      title: "Instantly download your resume",
      subTitle:
        "Easily download your resume as a PDF, for Word, or in text format. Use the dashboard to test different templates to see what works best for you.",
      image: InstantlyDownloadYourResume,
    },
    {
      title: "Get expert feedback",
      subTitle:
        "The job market is extremely competitive. Get an edge on other applicants with professional feedback after you’ve made your resume.",
      image: GetExpertFeedback,
    },
    {
      title: "Launch your job hunt",
      subTitle:
        "Equipped with your perfected resume, you’re ready to take on the job market. Get more job interviews & earn better job offers.",
      image: LaunchYourJobHunt,
    },
  ];

  return (
    <main className="w-full h-auto bg-white">
      <main className="w-full box-border curvy-box h-[800px] relative pt-[150px] max-[1050px]:pt-[50px] px-10 max-[500px]:px-5 flex justify-between max-[1050px]:h-auto max-[1050px]:flex-col max-[1050px]:items-center">
        <div className="w-[50%] pr-[50px] h-[610px] max-[800px]:h-auto max-[800px]:py-16 flex flex-col justify-center max-[1050px]:items-center max-[1050px]:w-full max-[1050px]:presume-0">
          <p className="text-black/50 max-[1050px]:text-center font-bold tracking-wide text-[13px]">
            THE BEST RESUME BUILDER ONLINE
          </p>
          <p className="text-black/80 text-[3.5rem] max-[1050px]:text-center max-[700px]:text-3xl leading-[4.5rem] font-extrabold py-2">
            Make Your Professional Resume
          </p>
          <p className="text-AnalogueShiftsTextColor/70 max-[700px]:text-3xl text-[3.5rem] leading-[4.5rem] font-extrabold ">
            in Minutes...
          </p>
          <p className="text-black/60 max-[1050px]:text-center font-normal tracking-normal text-base pt-3">
            Try our free resume builder and create a resume with the power of
            AI. Let the Genius resume maker help build your resume quickly and
            effortlessly.
          </p>
          <div className="pt-12">
            <Link
              className="bg-AnalogueShiftsTextColor w-max px-8 flex justify-center items-center duration-300 hover:-translate-y-1 text-black/70 font-medium text-sm py-3 rounded-lg"
              href="#"
            >
              Build My Resume Now
            </Link>
          </div>
        </div>
        <div className="w-[50%] h-[610px] max-[1050px]:w-[70%] max-[800px]:w-full max-[800px]:h-auto max-[1050px]:pb-10">
          <Image
            src={Hero}
            alt="Hero BG"
            className="w-full h-full max-[800px]:h-auto"
          />
        </div>
      </main>
      <Image className="w-full absolute" src={curve} alt="Curve" />
      <div className="w-full px-10 h-auto py-[120px] max-[1000px]:py-[40px] flex flex-wrap gap-x-10 gap-y-10">
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
              <p className="text-black/60 max-[1050px]:text-center font-normal tracking-normal text-base pl-2">
                {data.subTitle}
              </p>
            </div>
          );
        })}
      </div>
      <ResumeTemplateSection />
      <Examples />
      <HowToCreateAResume />
      <CustomSlides />
      <GuidesAndAdvice />
      <LevelUpJobHunt />
      <Experts />
      <Faqs />
      <ReadyToMakeResume />
    </main>
  );
}
