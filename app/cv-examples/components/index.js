import Link from "next/link";
import Image from "next/image";
import TipMan from "@/public/tip-man.svg";
import Faqs from "@/app/components/Faqs";
import GuestLayout from "@/app/Layouts/GuestLayout";
import Landing from "./Landing";
import IndustryTailoredCV from "./industryTailoredCV";

export default function CvExamplePage() {
  return (
    <GuestLayout>
      <main className="w-full h-auto">
        <Landing />
        <IndustryTailoredCV />
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
    </GuestLayout>
  );
}
