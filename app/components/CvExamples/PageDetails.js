"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HomeIcon from "@/public/house-icon.png";
import RightBracket from "@/public/right-bracket.png";
import SearchIcon from "@/public/search-icon.png";
import RightArrow from "@/public/right-arrow-icon.png";
import SideBarImage from "@/public/sidebar-image.svg";
import TipMan from "@/public/tip-man.svg";
import Faqs from "../OtherComponents/Faqs";
import ResumeSampleSearch from "../OtherComponents/ResumeSampleSearch";
import { cvSamplesLinks, cvSamplesData } from "../resources/cv/data";
import { resumeTemplates } from "../resources/resume/data";

export default function CvExamplePageDetails() {
  const [searchModal, setSearchModal] = useState(false);
  return (
    <>
      {searchModal && (
        <ResumeSampleSearch
          cancel={() => setSearchModal(false)}
          searchData={cvSamplesLinks}
        />
      )}
      <main className="w-full h-auto">
        <main className="w-full items-center h-max py-[100px] px-10 max-[800px]:px-5  bg-white">
          <div className="flex w-full gap-4 items-center pb-8">
            <Link href="/" className="flex gap-1.5 items-center">
              <Image src={HomeIcon} alt="Home Icon" className="w-7 h-7" />
              <p className="text-black/80 font-medium text-sm hover:underline">
                Home
              </p>
            </Link>
            <Image src={RightBracket} alt="Divider Icon" className="w-5 h-4" />
            <p className="text-black/50 font-medium text-sm">Cv Examples</p>
          </div>
          <div className="w-full flex flex-col items-center">
            <p className="pb-5 text-[2.6rem] w-[700px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80">
              CV Examples
            </p>
            <p className="text-black/60 w-[800px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal pb-10 tracking-normal text-base text-center">
              A CV is an extensive document that offers a comprehensive overview
              of your academic and professional experience.
            </p>
            <div className="w-full flex max-[500px]:flex-col justify-center">
              <Link
                className="w-max max-[500px]:w-full px-8  flex justify-center bg-AnalogueShiftsTextColor/80 items-center hover:-translate-y-1 text-black/80 duration-300 hover:scale-105 font-medium text-sm py-3 rounded-lg"
                href="/cv-maker"
              >
                Build My Cv Now
              </Link>
            </div>
          </div>
        </main>
        <section className="mt-10 pb-8 w-full px-10 max-[800px]:px-5 h-max flex flex-col  bg-no-repeat">
          <p className="pb-6 text-[2.6rem] w-full text-center max-[900px]:text-xl font-extrabold text-black/80">
            Our Most Utilized CV Samples
          </p>
          <div className="w-full flex flex-wrap gap-x-4 gap-y-4">
            {resumeTemplates.map((data) => {
              return (
                <div
                  key={crypto.randomUUID()}
                  className="h-max p-4 w-[450px] max-[1150px]:w-[calc(50%-16px)] max-[650px]:w-full bg-[#f8f9fb] rounded-lg resume-template-link"
                >
                  <div className="w-full h-[500px] max-[900px]:h-max relative template-img-box">
                    <div className="w-full h-full max-[900px]:h-max rounded-lg overflow-y-scroll scroll-hidden">
                      {data.templates[0].template}
                    </div>
                    <Link
                      href={`/resume-builder/app/how-to-start/${data.id}`}
                      className="absolute button-row  opacity-0 translate-y-2 duration-300 bottom-4 left-4 w-[calc(100%-32px)] py-3 hover:bg-AnalogueShiftsTextColor/80 flex justify-center rounded-lg bg-AnalogueShiftsTextColor text-sm font-medium text-black/80"
                    >
                      Use Template
                    </Link>
                  </div>
                  <div className="w-full pl-2 h-[120px]">
                    <p className="pt-6 text-base text-black/90 font-medium pb-2">
                      {data.name}
                    </p>
                    <p className="text-black/60 font-medium text-sm">
                      {data.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section className="py-[100px] bg-[#fafbfc] h-max w-full  flex flex-col items-center">
          <p className="text-black/50 px-5 pb-1 text-center max-[1050px]:text-center font-bold tracking-wide text-[13px]">
            Industry-Tailored CV
          </p>
          <p className="pb-6 text-[2.6rem] px-5 w-full text-center max-[900px]:text-xl font-extrabold text-black/80">
            Industry-Specific CV Samples
          </p>
          <p className="text-black/60 px-5 w-[800px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal pb-10 tracking-normal text-base text-center">
            Crafting a CV for a specific job? Explore one of the largest
            collections of industry-specific CV examples on the internet.
          </p>
          <div className="w-full px-10 max-[800px]:px-5 z-60 py-5 sticky top-0 left-0 bg-[#fafbfc]">
            <div
              onClick={() => setSearchModal(true)}
              className="w-full h-max overflow-hidden bg-white rounded-lg border flex items-center pl-3"
            >
              <Image
                className="cursor-pointer w-5 h-5 mr-3 opacity-70"
                src={SearchIcon}
                alt="Search Icon"
              />
              <input
                placeholder="Search job title (e.g. 'Engineer')"
                className="text font-normal w-[calc(100%-28px)] py-3.5 outline-none border-none text-black/40 text-[15px]"
              />
            </div>
          </div>
          <div className="w-full pt-10 relative flex justify-between px-10 max-[800px]:px-5 max-[974px]:flex-col max-[974px]:gap-8">
            <div className="w-[30%] max-[974px]:w-full flex flex-col gap-5">
              <div
                id="Categories"
                className="w-full h-max bg-white rounded-lg shadow-2xl p-3"
              >
                <p className="py-2 text-[1.3rem] px-3 w-full max-[900px]:text-2xl font-bold text-black/80">
                  Categories
                </p>
                <div className="w-full max-[974px]:flex-row max-[540px]:flex-col max-[974px]:flex-wrap max-[974px]:gap-y-1.5 max-[974px]:gap-x-0 flex flex-col gap-1.5">
                  {cvSamplesLinks.map((data) => {
                    return (
                      <Link
                        key={crypto.randomUUID()}
                        href={data.path}
                        className="w-full max-[974px]:w-6/12 max-[540px]:w-full px-3 py-2 text-base font-medium text-black/60 hover:bg-black/10 rounded-lg"
                      >
                        {data.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <Link
                href="#Categories"
                className="w-full max-[974px]:hidden rounded-lg border border-black/70 bg-white flex justify-center py-3 duration-300 hover:bg-transparent hover:-translate-y-1 text-base font-medium text-black/60 items-center gap-3"
              >
                Back to Categories
                <Image
                  src={RightArrow}
                  alt="Right Arrow"
                  className="w-4 h-4 rotate-[-90deg] opacity-70"
                />
              </Link>
              <div className="w-full max-[974px]:hidden h-max sticky top-[130px] bg-white rounded-lg shadow-2xl p-5 gap-4 flex flex-col justify-center">
                <Image src={SideBarImage} alt="Side Bar Image" />
                <p className="text-center font-medium text-base text-black/60 leading-7">
                  Craft a winning resume in just 12 minutes with our resume
                  builder. Choose a resume template, input your information, and
                  let our software take care of the rest.
                </p>
                <Link
                  href="/cover-letter-builder/app"
                  className="w-full rounded-lg bg-AnalogueShiftsTextColor flex justify-center py-3 duration-300 hover:-translate-y-1 text-base font-medium text-black/60"
                >
                  Build My Cv Now
                </Link>
              </div>
            </div>
            <div className="w-[65%] max-[974px]:w-full h-max flex flex-col gap-8">
              {cvSamplesData.map((data) => {
                return (
                  <div
                    key={crypto.randomUUID()}
                    id={data.id}
                    className="w-full h-max rounded-xl overflow-hidden border"
                  >
                    <div
                      style={{ backgroundColor: data.background }}
                      className="w-full h-max p-5 flex flex-col"
                    >
                      <p className="text-black/70 text-xl font-bold pb-5">
                        {data.name}
                      </p>
                      <p className="text-black/60 text-base font-[500]">
                        {data.description}
                      </p>
                    </div>
                    <div className="w-full overflow-y-scroll scroll-hidden h-[500px] py-6 px-3 bg-white">
                      {data.template}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="w-full bg-white h-max py-[100px] flex flex-col items-center px-10 max-[800px]:px-5">
          <p className="text-black/50 px-5 pb-1 text-center max-[1050px]:text-center font-bold tracking-wide text-[13px]">
            Illustrations for Every Scenario
          </p>
          <p className="pb-6 text-[2.6rem] px-5 w-full text-center max-[900px]:text-xl font-extrabold text-black/80">
            Transitioning Careers or Starting Fresh with No Work Experience?
          </p>
          <p className="text-black/60 px-5 w-[800px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal pb-10 tracking-normal text-base text-center">
            Regardless of your life stage, we offer CV examples and writing
            guides to assist you in creating a CV that demonstrates to employers
            why you would be an excellent hire.
          </p>
          <p className="text-black/60 px-5 w-[800px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal tracking-normal text-base text-center">
            Looking for more ideas beyond just cover letter samples? Our{" "}
            <Link
              href="/blog"
              className="text-AnalogueShiftsTextColor/90 hover:underline"
            >
              Blog
            </Link>{" "}
            is here to help you out.
          </p>
        </section>
        <section className="w-full bg-white flex justify-center px-10 max-[800px]:px-5">
          <div className="w-full h-max bg-[#fafbfc] rounded-xl max-[775px]:items-center px-12 pt-12 max-[775px]:pb-5 flex gap-12 max-[775px]:px-7 max-[775px]:flex-col">
            <Image
              className="w-[200px] max-[775px]:w-[70%]"
              src={TipMan}
              alt=""
            />
            <div className="flex max-[775px]:w-full flex-col">
              <p className="text-black/70 pb-3  font-semibold tracking-wide text-sm">
                Professional Guidance to Begin
              </p>
              <p className="text-black/60   font-normal tracking-normal text-base">
                After you’ve pulled ideas from our professional cv examples and
                learned how to make a cv , download a{" "}
                <Link
                  href="/cover-letter-templates"
                  className="text-AnalogueShiftsTextColor/90 hover:underline"
                >
                  cv template
                </Link>{" "}
                to save time on formatting.
              </p>
            </div>
          </div>
        </section>
        {/*
          <section className="w-full bg-white h-max py-[100px] flex flex-col items-center px-10 max-[800px]:px-5">
          <p className="text-black/50 px-5 pb-1 text-center max-[1050px]:text-center font-bold tracking-wide text-[13px]">
            ARTICLES & DOWNLOADABLE TEMPLATES
          </p>
          <p className="pb-6 text-[2.6rem] px-5 w-full text-center max-[900px]:text-xl font-extrabold text-black/80">
            Examples of Different Cv Formats
          </p>
          <div className="w-full flex justify-between flex-wrap gap-y-6">
            {differentResumeFormat.map((data) => {
              return (
                <Link
                  key={crypto.randomUUID()}
                  href={data.path}
                  className="w-[calc(25%-20px)] max-[1064px]:w-[calc(33.3%-20px)] max-[500px]:w-full max-[720px]:w-[calc(50%-20px)] h-max flex flex-col gap-3 hover:opacity-80 resume-format-link"
                >
                  <Image
                    src={data.image}
                    alt=""
                    className="mb-1 w-full h-max rounded-xl shadow-xl"
                  />
                  <p className="text-black/70 font-bold text-xl resume-format-text">
                    {data.name}
                  </p>
                  <p className="text-base font-medium text-black/50">
                    {data.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>
      
      */}
        <Faqs />
        <div className="w-full h-[500px] px-10 max-[500px]:px-4 pb-[50px]">
          <div className="w-full h-[450px] rounded-3xl bg-white shadow-2xl p-7 flex justify-center flex-col items-center">
            <p className="py-3 text-[2.6rem] w-[700px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80">
              Ready to begin crafting your new CV?
            </p>
            <p className="text-black/60 w-[800px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal pb-10 tracking-normal text-base text-center">
              Crafting a CV demands time and energy, and even with substantial
              effort, it might not guarantee the desired job. Our CV builder
              software is designed to assist you in swiftly creating a CV that
              effectively highlights your qualifications, increasing your
              chances of securing more interviews.
            </p>
            <div className="w-full flex max-[500px]:flex-col justify-center pb-6">
              <Link
                className="w-max max-[500px]:w-full px-8  flex justify-center bg-AnalogueShiftsTextColor/80 items-center hover:-translate-y-1 text-black/80 duration-300 hover:scale-105 font-medium text-sm py-3 rounded-lg"
                href="/cv-maker"
              >
                Build My Cv Now
              </Link>
            </div>{" "}
          </div>
        </div>
      </main>
    </>
  );
}
