"use client";
import Link from "next/link";
import Image from "next/image";
import TipMan from "@/public/images/tip-man.svg";
import Faqs from "@/app/components/Faqs";
import GuestLayout from "@/app/layouts/GuestLayout";
import Landing from "./Landing";
import SamplesSection from "./Samples";

export default function ResumeSamplePage() {
  return (
    <GuestLayout>
      <main className="w-full h-auto">
        <Landing />
        <section className="py-[100px] bg-[#fafbfc] h-max w-full  flex flex-col items-center">
          <p className="text-black/50 px-5 pb-1 text-center max-[1050px]:text-center font-bold tracking-wide text-[13px]">
            JOB-SPECIFIC RESUMES
          </p>
          <p className="pb-6 text-[2.6rem] px-5 w-full text-center max-[900px]:text-xl font-extrabold text-black/80">
            Sample Resumes by Industry
          </p>
          <p className="text-black/60 px-5 w-[800px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal pb-10 tracking-normal text-base text-center">
            Crafting a resume for a specific job? Explore one of the largest
            collections of industry-specific resume examples on the internet.
          </p>
          {/* <div className="w-full px-10 max-[800px]:px-5 z-60 py-5 sticky top-0 left-0 bg-[#fafbfc]">
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
          </div> */}
          <SamplesSection />
        </section>
        <section className="w-full bg-white h-max py-[100px] flex flex-col items-center px-10 max-[800px]:px-5">
          <p className="text-black/50 px-5 pb-1 text-center max-[1050px]:text-center font-bold tracking-wide text-[13px]">
            EXAMPLES FOR EVERY SITUATION
          </p>
          <p className="pb-6 text-[2.6rem] px-5 w-full text-center max-[900px]:text-xl font-extrabold text-black/80">
            Exploring new career paths or entering the workforce without prior
            experience?
          </p>
          <p className="text-black/60 px-5 w-[800px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal pb-10 tracking-normal text-base text-center">
            Regardless of where you are in life, we offer resume examples and
            writing guides to assist you in creating a resume that highlights
            why you would be a valuable hire to employers.
          </p>
          <p className="text-black/60 px-5 w-[800px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal tracking-normal text-base text-center">
            Looking for more ideas beyond just resume samples? Our{" "}
            <Link
              href="/blog"
              className="text-AnalogueShiftsTextColor/90 hover:underline"
            >
              Blog
            </Link>{" "}
            is here to help you out
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
                EXPERT ADVICE TO GET STARTED
              </p>
              <p className="text-black/60   font-normal tracking-normal text-base">
                Once you've gathered ideas from our professional resume examples
                and acquired the skills to create a resume, download a free
                resume template to streamline the formatting process and save
                time.
              </p>
            </div>
          </div>
        </section>

        <Faqs />
        <div className="w-full h-[500px] px-10 max-[500px]:px-4 pb-[50px]">
          <div className="w-full h-[450px] rounded-3xl bg-white shadow-2xl p-7 flex justify-center flex-col items-center">
            <p className="py-3 text-[2.6rem] w-[700px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80">
              Ready to start making your new resume?
            </p>
            <p className="text-black/60 w-[800px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal pb-10 tracking-normal text-base text-center">
              Crafting a resume demands time and energy, and even with
              substantial effort, it may not guarantee the desired job. Our
              resume builder software is designed to assist you in swiftly
              creating a resume that effectively highlights your qualifications,
              increasing your chances of securing more interviews.
            </p>
            <div className="w-full flex max-[500px]:flex-col justify-center pb-6">
              <Link
                className="w-max max-[500px]:w-full px-8  flex justify-center bg-AnalogueShiftsTextColor/80 items-center hover:-translate-y-1 text-black/80 duration-300 hover:scale-105 font-medium text-sm py-3 rounded-lg"
                href="/resume-builder/app/how-to-start"
              >
                Build My Resume Now
              </Link>
            </div>
          </div>
        </div>
      </main>
    </GuestLayout>
  );
}
