import Image from "next/image";
import Link from "next/link";
import HomeIcon from "@/public/images/house-icon.png";
import RightBracket from "@/public/images/right-bracket.png";
import { coverLetterTemplates } from "@/app/resources/cover-letter/data";

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
          <p className="text-black/50 font-medium text-sm">
            Cover Letter Templates
          </p>
        </div>
        <div className="w-full flex flex-col items-center">
          <p className="pb-5 text-[2.6rem] w-[700px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80">
            Cover Letter Templates
          </p>
          <p className="text-black/60 w-[800px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal pb-10 tracking-normal text-base text-center">
            In search of a cover letter template? Download any of our 200+ free
            cover letter templates for Word, then fill out a copy-paste cover
            letter template to complement your resume and finalize your job
            application.
          </p>
          <div className="w-full flex max-[500px]:flex-col justify-center">
            <Link
              className="w-max max-[500px]:w-full px-8  flex justify-center bg-AnalogueShiftsTextColor/80 items-center hover:-translate-y-1 text-black/80 duration-300 hover:scale-105 font-medium text-sm py-3 rounded-lg"
              href="/cover-letter-builder/app"
            >
              Build My Cover Letter
            </Link>
          </div>
        </div>
      </main>
      <div className="w-full px-10 max-[800px]:px-5">
        <div className="w-full flex justify-center border-b ">
          <Link
            href="#"
            className="w-max px-14 pb-5 text-black/60  hover:text-black/80 text-base font-medium"
          >
            Resume
          </Link>
          <Link
            href="/cover-letter-templates"
            className="w-[112px] flex justify-center pb-5 text-AnalogueShiftsTextColor/80 border-b border-AnalogueShiftsTextColor/80 text-base font-medium"
          >
            Cover Letter
          </Link>
        </div>
        <section
          style={{ backgroundImage: "url(/pop-bg.svg)" }}
          className="mt-10 w-full h-max flex flex-col  bg-no-repeat"
        >
          {coverLetterTemplates[0] && (
            <p className="pb-6 text-[2.6rem] w-full text-center max-[900px]:text-xl font-extrabold text-black/80">
              Use an AnalogueShifts Cover Letter Template
            </p>
          )}
          <div className="w-full flex flex-wrap items-center gap-x-4 gap-y-4">
            {coverLetterTemplates.slice(0, 2).map((data) => {
              return (
                <div
                  key={crypto.randomUUID()}
                  className="h-max p-4 w-[450px] max-[1150px]:w-[calc(50%-16px)] max-[650px]:w-full bg-[#f8f9fb] rounded-lg resume-template-link"
                >
                  <div className="w-full h-max relative template-img-box">
                    <div className="w-full h-max rounded-lg overflow-y-scroll scroll-hidden">
                      <Image
                        src={data.templates[0].templateImage}
                        alt="Cover Letter Image"
                        className="w-max mx-auto"
                      />
                    </div>
                    <Link
                      href={`/cover-letter-builder/app/how-to-start/${data.id}`}
                      className="absolute button-row  opacity-0 translate-y-2 duration-300 bottom-4 left-4 w-[calc(100%-32px)] py-3 hover:bg-AnalogueShiftsTextColor/80 flex justify-center rounded-lg bg-AnalogueShiftsTextColor text-sm font-medium text-black/80"
                    >
                      Use Template
                    </Link>
                  </div>
                  <div className="w-full pl-2 h-max">
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
            {!coverLetterTemplates[0] && (
              <div className="w-full flex justify-center py-5">
                <p className="text-lg font-semibold text-black/70">
                  No Template Available At The Moment
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
