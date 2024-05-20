"use client";
import Link from "next/link";
import UseOurBuilder from "./UseOurBuilder";
import HowOurCoverLetterBuilderWorks from "./HowOurCoverLetterBuilderWorks";
import CoverLetterSamples from "./CoverLetterSamples";
import Faqs from "@/app/components/Faqs";
import Landing from "./Landing";
import Services from "./Services";
import TopCompanies from "../../components/Topcompanies";
import GuestLayout from "@/app/components/layouts/GuestLayout";

export default function CoverLetterBuilderPage() {
  return (
    <GuestLayout>
      <main className="w-full h-auto">
        <Landing />
        <Services />
        <TopCompanies
          title="Get job offers from top companies"
          description="The outcomes of our cover letter generator speak volumes. Our users
          have successfully secured positions at some of the most competitive
          companies in the world:"
        />
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
              Don’t let a cover letter hold you back from getting your dream
              job. Try our professional cover letter builder and make cover
              letters that perfectly showcase your qualifications and interest
              in the role to land more interviews.
            </p>
            <div className="w-full flex max-[500px]:flex-col justify-center pb-6">
              <Link
                className="w-max max-[500px]:w-full px-8  flex justify-center bg-AnalogueShiftsTextColor/80 items-center hover:-translate-y-1 text-black/80 duration-300 hover:scale-105 font-medium text-sm py-3 rounded-lg"
                href=""
              >
                Build My Cover Letter
              </Link>
            </div>
          </div>
        </div>
      </main>
    </GuestLayout>
  );
}
