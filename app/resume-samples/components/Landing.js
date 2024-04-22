import Link from "next/link";
import Image from "next/image";
import HomeIcon from "@/public/images/house-icon.png";
import RightBracket from "@/public/images/right-bracket.png";
import { resumeTemplates } from "@/app/resources/resume/data";
import ResumeList from "@/app/components/ResumeList";

export default function Landing() {
  return (
    <>
      {" "}
      <main className="w-full items-center h-max py-[100px] px-10 max-[800px]:px-5  bg-white">
        <div className="flex w-full gap-4 items-center pb-8">
          <Link href="/" className="flex gap-1.5 items-center">
            <Image src={HomeIcon} alt="Home Icon" className="w-7 h-7" />
            <p className="text-black/80 font-medium text-sm hover:underline">
              Home
            </p>
          </Link>
          <Image src={RightBracket} alt="Divider Icon" className="w-5 h-4" />
          <p className="text-black/50 font-medium text-sm">Resume Examples</p>
        </div>
        <div className="w-full flex flex-col items-center">
          <p className="pb-5 text-[2.6rem] w-[700px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80">
            Resume Examples for Every Job or Experience Level
          </p>
          <p className="text-black/60 w-[800px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal pb-10 tracking-normal text-base text-center">
            If you're in search of excellent resume examples, you've found the
            right place. Each sample resume on this page has been approved by a
            professional resume writer, is free to download, and includes
            job-specific writing tips.
          </p>
          <div className="w-full flex max-[500px]:flex-col justify-center">
            <Link
              className="w-max max-[500px]:w-full px-8  flex justify-center bg-AnalogueShiftsTextColor/80 items-center hover:-translate-y-1 text-black/80 duration-300 hover:scale-105 font-medium text-sm py-3 rounded-lg"
              href="/resume-builder/app/how-to-start"
            >
              Build My Resume
            </Link>
          </div>
        </div>
      </main>
      <section className="mt-10 pb-8 w-full px-10 max-[800px]:px-5 h-max flex flex-col  bg-no-repeat">
        <p className="pb-6 text-[2.6rem] w-full text-center max-[900px]:text-xl font-extrabold text-black/80">
          Our Most Used Resume Samples
        </p>
        <ResumeList data={resumeTemplates.slice(0, 2)} />
      </section>
    </>
  );
}
