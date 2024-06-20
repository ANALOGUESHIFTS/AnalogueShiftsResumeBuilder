"use client";
import Link from "next/link";
import Faqs from "@/components/application/faqs";
import UseOurCVBuilder from "./use-our-cv-builder";
import HowOurCvBuilderWorks from "./how-our-cv-builder-works";
import CvSamples from "./cv-sample";
import Landing from "./Landing";
import Services from "./Services";
import Experts from "@/components/application/home-components/experts";
import GuestLayout from "@/components/application/layouts/guest";

export default function CvMakerPage() {
  return (
    <GuestLayout>
      <main className="w-full h-auto">
        <Landing />
        <Services />
        <Experts />
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
              Creating a quality CV from start to finish is difficult, but
              becomes easy with the help of our software.
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
    </GuestLayout>
  );
}
