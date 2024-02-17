import Link from "next/link";
import Image from "next/image";
import HomeIcon from "@/public/house-icon.png";
import RightBracket from "@/public/right-bracket.png";
import { resumeTemplates } from "@/app/components/resources/resume/data";

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
    </>
  );
}
